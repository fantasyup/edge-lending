import { ethers, utils } from 'ethers'
import { IApproveMessageData, IAssetDetails } from './types'
import { ecsign } from "ethereumjs-util"
import { MockToken } from '../types'

const { keccak256, defaultAbiCoder, toUtf8Bytes, solidityPack } = utils

const PERMIT_TYPEHASH = keccak256(
	toUtf8Bytes('Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)')
)
const VAULT_APPROVAL_TYPEHASH = keccak256(
	toUtf8Bytes('VaultAccessApproval(bytes32 warning,address user,address contract,bool approved,uint256 nonce)')
)

export function getDomainSeparator(name: string, version: string, tokenAddress: string, chainId: number) {
	return keccak256(
		defaultAbiCoder.encode(
			['bytes32', 'bytes32', 'bytes32', 'uint256', 'address'],
			[
				keccak256(
					toUtf8Bytes(
						'EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)'
					)
				),
				keccak256(toUtf8Bytes(name)),
				keccak256(toUtf8Bytes(version)),
				chainId,
				tokenAddress
			]
		)
	)
}

export function getApprovalDigest(token: any, approve: any, nonce: number, deadline: number) {
	const DOMAIN_SEPARATOR = getDomainSeparator(token.name, token.version, token.address, token.chainId)

	return keccak256(
		solidityPack(
			['bytes1', 'bytes1', 'bytes32', 'bytes32'],
			[
				'0x19',
				'0x01',
				DOMAIN_SEPARATOR,
				keccak256(
					defaultAbiCoder.encode(
						['bytes32', 'address', 'address', 'uint256', 'uint256', 'uint256'],
						[PERMIT_TYPEHASH, approve.owner, approve.spender, approve.value, nonce, deadline]
					)
				)
			]
		)
	)
}


export function getVaultSignApproveContractMessage(vaultDetails: IAssetDetails, data: IApproveMessageData) {
	const DOMAIN_SEPARATOR = getDomainSeparator(vaultDetails.name, vaultDetails.version, vaultDetails.address, vaultDetails.chainId)
    const warning = data.approve ? 
        keccak256(toUtf8Bytes(`Grant full access to funds in Edge Vault? Read more here https://edge.finance/permission`))
            : 
        keccak256(toUtf8Bytes(`Revoke access to Edge Vault? Read more here https://edge.finance/revoke`))

    return keccak256(
		solidityPack(
			['bytes1', 'bytes1', 'bytes32', 'bytes32'],
			[
				'0x19',
				'0x01',
				DOMAIN_SEPARATOR,
				keccak256(
					defaultAbiCoder.encode(
						['bytes32', 'bytes32', 'address', 'address', 'bool', 'uint256'],
						[VAULT_APPROVAL_TYPEHASH, warning, data.user, data.contract, data.approve, data.nonce]
					)
				)
			]
		)
	)
}

export async function signVaultApproveContractMessage(
    privateKey: string,
    vaultDetails: IAssetDetails, 
    messageData: IApproveMessageData
): Promise<{ v: number, r: Buffer, s: Buffer }> {
    const data = getVaultSignApproveContractMessage(vaultDetails, messageData)

    const { v, r, s } = ecsign(
        Buffer.from(data.slice(2), 'hex'),
        Buffer.from(privateKey.slice(2), 'hex')
    )

    return { v, r, s }
}
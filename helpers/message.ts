import { utils } from 'ethers'
import { IApproveMessageData, ITokenDetails } from './types'

const { keccak256, defaultAbiCoder, toUtf8Bytes, solidityPack } = utils

const PERMIT_TYPEHASH = keccak256(
	toUtf8Bytes('Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)')
)
const VAULT_APPROVAL_TYPEHASH = keccak256(
	toUtf8Bytes('VaultAccessApproval(string warning,address user,address contract,bool approved,uint256 nonce)')
)

export function getDomainSeparator(name: string, tokenAddress: string, chainId: number) {
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
				keccak256(toUtf8Bytes('1')),
				chainId,
				tokenAddress
			]
		)
	)
}

export function getApprovalDigest(token: any, approve: any, nonce: number, deadline: number) {
	const DOMAIN_SEPARATOR = getDomainSeparator(token.name, token.address, token.chainId)

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


export function getVaultSignApproveContractMessage(tokenDetails: ITokenDetails, data: IApproveMessageData) {
	const DOMAIN_SEPARATOR = getDomainSeparator(tokenDetails.name, tokenDetails.address, tokenDetails.chainId)
    const warning = data.approve ? `Grant full access to funds in Edge Vault? Read more here https://edge.finance/permission`: `Revoke access to Edge Vault? Read more here https://edge.finance/revoke`
    
    return keccak256(
		solidityPack(
			['bytes1', 'bytes1', 'bytes32', 'bytes32'],
			[
				'0x19',
				'0x01',
				DOMAIN_SEPARATOR,
				keccak256(
					defaultAbiCoder.encode(
						['bytes32', 'string', 'address', 'address', 'bool', 'uint256'],
						[VAULT_APPROVAL_TYPEHASH, warning, data.user, tokenDetails.address, data.approve, data.nonce]
					)
				)
			]
		)
	)

}

# Issues

## Rounding Issue

Rounding issue in `toShare` & `toUnderlying` a user could end up with a fraction less than what they deposited if the protocol doesn't accrue fees.

#### Vault

We ignore the problem in the `deposit` & `withdraw` function of `Vault`

#### LendingPair

We address this by rounding up for LendingPair actions such as `liquidation` & `repay` because we don't want users to underpay for a `repay` or `liquidation`


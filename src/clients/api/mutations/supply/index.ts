import BigNumber from 'bignumber.js';
import { ContractReceipt, Signer } from 'ethers';
import { VToken } from '@/types';

import { getVTokenContract } from '@/clients/contracts';
import { VBep20, VBnbToken } from '@/types/contracts';

export interface SupplyInput {
  vToken: VToken;
  amountWei: BigNumber;
  signer?: Signer;
}

export type SupplyOutput = ContractReceipt;

const supply = async ({
  signer,
  vToken,
  amountWei,
}: SupplyInput): Promise<SupplyOutput> => {
  // Handle supplying ETH
  if (vToken.underlyingToken.isNative) {
    const tokenContract = getVTokenContract(vToken, signer as any) as VBnbToken;

    const transaction = await tokenContract.mint({
      value: amountWei.toFixed(),
    });
    return transaction.wait(1);
  }

  // Handle supplying tokens other that ETH
  const tokenContract = getVTokenContract(vToken, signer as any) as VBep20;
  const transaction = await tokenContract.mint(amountWei.toFixed());
  return transaction.wait(1);
};

export default supply;

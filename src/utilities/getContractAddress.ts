import config from '@/config';

import mainContractChainAddresses from '@/constants/contracts/addresses/main.json';

const mainContractAddresses = Object.entries(mainContractChainAddresses).reduce(
  (accContractAddresses, [contractName, addresses]) => ({
    ...accContractAddresses,
    [contractName]: (
      addresses as {
        [key: string]: string;
      }
    )[config.chainId],
  }),
  {} as Record<keyof typeof mainContractChainAddresses, string>
);

//const isolatedLendingContractChainAddresses = config.isOnTestnet
//? isolatedLendingTestnetDeployments.contracts
//: isolatedLendingMainnetDeployments.contracts;

//type IsolatedLendingContractName = keyof typeof isolatedLendingContractChainAddresses;

//const isolatedLendingContractAddresses = Object.entries(
//isolatedLendingContractChainAddresses,
//).reduce(
//(accContractAddresses, [contractName, contractInfo]) => ({
//...accContractAddresses,
//[contractName]: contractInfo.address,
//}),
//{},
//) as Record<IsolatedLendingContractName, string>;

const contractAddresses = {
  ...mainContractAddresses,
  //...isolatedLendingContractAddresses,
};

const getContractAddress = (contractName: keyof typeof contractAddresses) =>
  contractAddresses[contractName];

export default getContractAddress;

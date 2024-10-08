import { QueryObserverOptions, useQuery } from '@tanstack/react-query';

import getMarketHistory, {
  GetMarketHistoryInput,
  GetMarketHistoryOutput,
} from '@/clients/api/queries/getMarketHistory';
import FunctionKey from '@/constants/functionKey';

type Options = QueryObserverOptions<
  GetMarketHistoryOutput,
  Error,
  GetMarketHistoryOutput,
  GetMarketHistoryOutput,
  [FunctionKey.GET_MARKET_HISTORY, { vTokenAddress: string }]
>;

const useGetMarketHistory = (input: GetMarketHistoryInput, options?: Options) =>
  useQuery({
    queryKey: [
      FunctionKey.GET_MARKET_HISTORY,
      { vTokenAddress: input.vToken.address },
    ],
    queryFn: () => getMarketHistory(input),
    ...(options ? options : {}),
  });

export default useGetMarketHistory;

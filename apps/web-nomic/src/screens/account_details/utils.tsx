import axios from 'axios';
import {
  AccountBalancesDocument,
  // AccountWithdrawalAddressDocument,
  AccountDelegationBalanceDocument,
} from '@/graphql/general/account_details_documents';

import chainConfig from '@/chainConfig';

export const fetchAvailableBalances = async (address: string) => {
  const defaultReturnValue = {
    accountBalances: {
      coins: [],
    },
  };
  try {
    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_GRAPHQL_URL ||
        chainConfig.endpoints.graphql ||
        'http://localhost:3000/v1/graphql',
      {
        variables: {
          address,
        },
        query: AccountBalancesDocument,
      }
    );
    return data?.data ?? defaultReturnValue;
  } catch (error) {
    return defaultReturnValue;
  }
};

// export const fetchAccountWithdrawalAddress = async (address: string) => {
//   const defaultReturnValue = {
//     withdrawalAddress: {
//       address,
//     },
//   };
//   try {
//     const { data } = await axios.post(
//       process.env.NEXT_PUBLIC_GRAPHQL_URL ||
//         chainConfig.endpoints.graphql ||
//         'http://localhost:3000/v1/graphql',
//       {
//         variables: {
//           address,
//         },
//         query: AccountWithdrawalAddressDocument,
//       }
//     );
//     return data?.data ?? defaultReturnValue;
//   } catch (error) {
//     return defaultReturnValue;
//   }
// };

export const fetchDelegationBalance = async (address: string) => {
  const defaultReturnValue = {
    delegationBalance: {
      coins: [],
    },
  };
  try {
    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_GRAPHQL_URL ||
        chainConfig.endpoints.graphql ||
        'http://localhost:3000/v1/graphql',
      {
        variables: {
          address,
        },
        query: AccountDelegationBalanceDocument,
      }
    );
    return data?.data ?? defaultReturnValue;
  } catch (error) {
    return defaultReturnValue;
  }
};

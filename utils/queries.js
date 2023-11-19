import { gql } from 'graphql-request';

export const addressInsightsGql = gql `
  query ($address: String) {
    ethereum {
      address(address: {is: $address}) {
        balances {
          currency {
            symbol
            name
            tokenType
            address
          }
          value
        }
        balance
      }
    }
  }
`;
import { request } from 'graphql-request';
import { addressInsightsGql } from './queries.js';

// paste BQ api key
const BQ_API_KEY = '';

export class BitQueryClient {
   url = "https://graphql.bitquery.io";

   async getAddressInsights(address) {
      const result = await request({
         url: this.url, 
         document: addressInsightsGql, 
         requestHeaders: {
            'Content-Type': 'application/json',
            'X-API-KEY': BQ_API_KEY
         },
         variables: {
            address
         }
      });

      return result.ethereum.address[0];
   }
}
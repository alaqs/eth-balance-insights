import { request } from 'graphql-request';
import { addressInsightsGql } from './queries.js';

export class BitQueryClient {
   url = "https://graphql.bitquery.io";

   async getAddressInsights(address) {
      const result = await request({
         url: this.url, 
         document: addressInsightsGql, 
         requestHeaders: {
            'Content-Type': 'application/json',
            'X-API-KEY': ''
         },
         variables: {
            address
         }
      });

      console.log(JSON.stringify(result));
   }
}
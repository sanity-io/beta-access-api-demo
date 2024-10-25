import dotenv from 'dotenv';
import { client } from '../../../generated/typescript';

export function initApi(tokenEnvVar: string = "") {
  dotenv.config();

  client.setConfig({
    baseUrl: process.env.BASE_URL || 'https://api.sanity.io/',
  });

  const token = process.env[tokenEnvVar];

  client.interceptors.request.use((request, options) => {
    if (token) {
      request.headers.set('Authorization', `Bearer ${token}`);
    }

    if (process.env.DEBUG) {
      console.log(`Options: ${JSON.stringify(options, null, 2)}`);
    }
    return request;
  });
}
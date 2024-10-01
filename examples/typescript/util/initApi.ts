import dotenv from 'dotenv';
import { client } from '../../../generated/typescript';

export function initApi() {
  dotenv.config();

  client.setConfig({
    baseUrl: 'https://api.sanity.io/',
  });

  client.interceptors.request.use((request, options) => {
    request.headers.set('Authorization', `Bearer ${process.env.PROJECT_ROBOT_TOKEN}`);

    if (process.env.DEBUG) {
      console.log(`Options: ${JSON.stringify(options, null, 2)}`);
    }
    return request;
  });
}
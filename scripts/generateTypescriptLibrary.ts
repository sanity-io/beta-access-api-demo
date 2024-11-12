import { createClient } from '@hey-api/openapi-ts';

async function generateClient() {
  await createClient({
    client: {
      bundle: true,
      name: '@hey-api/client-fetch',
    },
    input: './specs/beta-access-api.yaml',
    output: './generated/typescript',
    services: {
      asClass: true,
      name: '{{name}}',
    },
  });
}

generateClient();

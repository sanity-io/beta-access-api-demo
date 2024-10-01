# Welcome to the Beta Access API

Thank you for trying the new Access API from Sanity.io. The intention of this API is to provide a single simplified interface for managing access to Organizations and Projects.

## Beta Information

This is a beta API, so please be aware that the API may change, stop working or be removed at any time.

We plan to make the API generally available in the near future. This is your opportunity to provide feedback and help us shape the final API.

## API Documentation

The OpenAPI Specification has been included in this package. The specification includes a detailed description of the API and endpoint definitions. Feel free to use this spec to generate client libraries in your preferred language.

You can view a human-readable version of the documentation in `generated/docs/beta-access-api.html`.

## API Usage

You can call the HTTP endpoints directly, or use the SDK. You need to pass a valid bearer token in the header of your request. This can be a project robot token or a user token.

### HTTP

Example HTTP request to return all users in a project:

```bash
curl -X 'GET' \
  'https://api.sanity.io/vX/access/project/<project-id>/users' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer <token>'
```

### SDK

A typescript SDK has generated from the OpenAPI Specification into `generated/typescript` that includes TypeScript types and wrapper methods that call the API.
This has been pre-built for you, so you can start using it immediately. Look at the `/examples` folder for examples of how to use the SDK.

Example usage:

```bash
tsx ./examples/getUsers.ts
```

Populate the environment variables with your token and project ID, then run the script. 
The examples use dotenv to load the environment variables, an example .env file is included.

## Regenerating the SDK or Documentation

If you make changes to the OpenAPI Specification, you will need to regenerate the SDK and documentation.

The spec can be found in `./specs/beta-access-api.yaml`.

```bash
npm install
npm run generate:sdk:typescript
npm run generate:docs:html
```

## Feedback

Please provide feedback on the API via Slack in your support channel.

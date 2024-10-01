# Welcome to the Beta Access API

Thank you for trying the new Access API from Sanity.io. The intention of this API is to provide a single simplified interface for managing access to Organizations and Projects.

## Beta Information

This is a beta API, so please be aware that the API may change, stop working or be removed at any time.

We plan to make the API generally available in the near future. This is your opportunity to provide feedback and help us shape the final API.

## API Documentation

The OpenAPI Specification has been included in this package. The specification includes a detailed description of the API and endpoint definitions.  
You can view a human-readable version of the documentation in `docs/index.html`.

## API Usage

You can call the HTTP endpoints directly, or use the SDK.

### HTTP

Example HTTP request to return all users in a project:

```bash
curl -X 'GET' \
  'http://localhost:5001/vX/access/project/<project-id>/users' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer <access-token>'
```

The `access-token` can be a project robot token or a user token.

### SDK

The SDK is generated from the OpenAPI Specification and includes TypeScript types and client methods. 
This has been pre-built for you, so you can start using it immediately. Look at the `/examples` folder for examples of how to use the SDK.

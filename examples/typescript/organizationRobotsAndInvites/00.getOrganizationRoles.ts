import { Roles } from '../../../generated/typescript';
import { initApi } from '../util/initApi';

// Requires a user session with organization admin permissions
// Make sure to pass in a user session and not a robot session
initApi("USER_TOKEN");

const organizationId = process.env.ORGANIZATION_ID || '<organization-id>';

async function getOrganizationRoles(organizationId: string) {
  let nextCursor: string | undefined;
  while (true) {
    try {
      const { data, error } = await Roles.getRoles({
        path: {
          resourceId: organizationId,
          resourceType: 'organization',
        },
        query: {
          limit: 10,
          nextCursor,
        },
      });

      if (error) {
        throw error;
      }

      console.log(`data: ${JSON.stringify(data?.data, null, 2)}`);

      if (data?.nextCursor == null) {
        break;
      }

      nextCursor = data.nextCursor;
    } catch (error) {
      console.error(error);
      break;
    }
  }
}
getOrganizationRoles(organizationId);

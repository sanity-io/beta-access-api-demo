import { PaginatedResponse, Role, Roles } from '../../../generated/typescript';
import { initApi } from '../util/initApi';

// Requires a user session with organization admin permissions
// Make sure to pass in a user session and not a robot session
initApi('USER_TOKEN');

const organizationId = process.env.ORGANIZATION_ID || '<organization-id>';

async function getOrganizationRoles(organizationId: string) {
  let nextCursor: string | undefined;
  let roles: Array<Role> = [];
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
          includeChildren: true,
        },
      });

      if (error) {
        throw error;
      }

      const paginatedData = data as PaginatedResponse & {
        data?: Array<Role>;
      };

      roles = roles.concat(paginatedData.data || []);

      if (paginatedData?.nextCursor == null) {
        break;
      }

      nextCursor = paginatedData.nextCursor;
    } catch (error) {
      console.error(error);
      break;
    }
  }

  console.log('Roles');
  console.log(JSON.stringify(roles, null, 2));
}
getOrganizationRoles(organizationId);

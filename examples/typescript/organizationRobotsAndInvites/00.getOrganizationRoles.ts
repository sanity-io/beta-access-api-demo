import { Roles } from '../../../generated/typescript';
import { initApi } from '../util/initApi';

// Requires a user session with organization admin permissions
// Make sure to pass in a user session and not a robot session
initApi("USER_TOKEN");

const organizationId = process.env.ORGANIZATION_ID || '<organization-id>';

async function getOrganizationRoles(organizationId: string) {
  const {data, error} = await Roles.getRoles({
    path: {
      resourceId: organizationId,
      resourceType: 'organization',
    },
  });

  console.log(JSON.stringify(data, null, 2));

  if (error) {
    console.error(error);
  }
}

getOrganizationRoles(organizationId);

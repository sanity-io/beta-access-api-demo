import { Roles } from '../../../generated/typescript';
import { initApi } from '../util/initApi';

// Requires a user session with organization admin permissions
// Make sure to pass in a user session and not a robot session
initApi('USER_TOKEN');

const organizationId = process.env.ORGANIZATION_ID || '<organization-id>';

async function createOrganizationRobotRole(organizationId: string, robotRoleName: string) {
  const { data, error } = await Roles.createRole({
    path: {
      resourceId: organizationId,
      resourceType: 'organization',
    },
    body: {
      title: robotRoleName,
      name: robotRoleName,
      description: `Organization robot role to manage users`,
      appliesToRobots: true,
      appliesToUsers: false,
      permissions: [
        {
          name: 'sanity-project-members',
          action: 'read',
        },
        {
          name: 'sanity-project-members',
          action: 'update',
        },
        {
          name: 'sanity-project-members',
          action: 'delete',
        },
        {
          name: 'sanity-project-members',
          action: 'invite',
        },
        {
          name: 'sanity-organization-members',
          action: 'read',
        },
        {
          name: 'sanity-organization-members',
          action: 'update',
        },
        {
          name: 'sanity-organization-members',
          action: 'delete',
        },
        {
          name: 'sanity-organization-members',
          action: 'invite',
        },
      ],
    },
  });

  console.log(data);

  if (error) {
    console.error(error);
  }
}

createOrganizationRobotRole(organizationId, 'organization-robot-role-manage-users');

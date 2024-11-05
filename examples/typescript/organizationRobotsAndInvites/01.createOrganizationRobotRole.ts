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
        /*{ // Project wildcard permissions not supported yet
          name: 'sanity.project.members.read',
        },
        {
          name: 'sanity.project.member.update',
        },
        {
          name: 'sanity.project.members.delete',
        },
        {
          name: 'sanity.project.members.invite',
        },*/
        {
          name: 'sanity.organization.members.read',
        },
        {
          name: 'sanity.organization.members.update',
        },
        {
          name: 'sanity.organization.members.delete',
        },
        {
          name: 'sanity.organization.members.invite',
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

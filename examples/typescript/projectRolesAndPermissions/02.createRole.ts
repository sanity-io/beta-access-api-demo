import { initApi } from '../util/initApi';
import { Roles } from '../../../generated/typescript';

initApi('PROJECT_ROBOT_TOKEN');

const projectId = process.env.PROJECT_ID || '<project-id>';

async function createRole(projectId: string, roleName: string) {
  const { data: newRole, error } = await Roles.createRole({
    body: {
      name: roleName,
      title: 'Member',
      description: 'Read project members and roles',
      appliesToUsers: true,
      appliesToRobots: false,
      permissions: [
        {
          name: 'sanity.project.members.read',
        },
        {
          name: 'sanity.project.roles.read',
        },
        {
          name: 'my-test-permission.mode',
          params: {
            mode: 'read',
            dataset: 'production',
          },
        },
      ],
    },
    path: {
      resourceId: projectId,
      resourceType: 'project',
    },
  });

  if (error) {
    console.error(error);
    return;
  }

  console.log(`Role ${newRole?.name} created successfully`);

  const { data: role, error: getError } = await Roles.getRole({
    path: {
      resourceId: projectId,
      resourceType: 'project',
      roleName: newRole?.name || '',
    },
  });

  if (getError) {
    console.error(getError);
    return;
  }

  console.log(`Role retrieved: ${JSON.stringify(role, null, 2)}`);
}

if (require.main === module) {
  createRole(projectId, 'my-test-role');
}

export { createRole };

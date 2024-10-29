import { initApi } from '../util/initApi';
import { Roles } from '../../../generated/typescript';

initApi("PROJECT_ROBOT_TOKEN");

const projectId = process.env.PROJECT_ID || '<project-id>';

async function createRole(projectId: string, roleName: string) {
  const {data: role, error} = await Roles.createRole({
    body: {
      name: roleName,
      title: "Member",
      description: 'Read project members and roles',
      appliesToUsers: true,
      appliesToRobots: false,
      permissions: [
        {
          name: 'sanity.projects.members.read',
        },
        {
          name: 'sanity.projects.roles.read',
        },
        {
          name: 'my-test-permission.mode',
        },
      ],
    },
    path: {
      resourceId: projectId,
      resourceType: 'project',
    }
  });

  if (error) {
    console.error(error);
    return;
  }

  console.log(`Role ${role?.name} created successfully`);
}

if (require.main === module) {
  createRole(projectId, 'my-test-role');
}

export { createRole };


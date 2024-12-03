import { Roles, Role, PaginatedResponse } from '../../../generated/typescript';
import { initApi } from '../util/initApi';

initApi('PROJECT_ROBOT_TOKEN');

const projectId = process.env.PROJECT_ID || '<project-id>';

async function readRoles(projectId: string) {
  let roles: Array<Role> = [];
  let nextCursor: string | undefined;

  while (true) {
    const { data, error } = await Roles.getRoles({
      path: {
        resourceId: projectId,
        resourceType: 'project',
      },
      query: {
        limit: 10,
        nextCursor,
      },
    });

    if (error) {
      console.error(error);
      return;
    }

    const paginatedData = data as PaginatedResponse & {
      data?: Array<Role>;
    };

    roles = roles.concat(paginatedData.data || []);
    nextCursor = paginatedData.nextCursor || undefined;

    if (nextCursor == null) {
      break;
    }
  }

  console.log('Roles');
  for (const role of roles) {
    console.log(`- ${role.title} (identifier: ${role.name}) has permissions:`);
    for (const permission of role.permissions || []) {
      console.log(`  - ${permission.name}: ${permission.action}`);
      if (permission.params) {
        console.log(`    - params: ${JSON.stringify(permission.params)}`);
      }
    }
  }
}

if (require.main === module) {
  readRoles(projectId);
}

export { readRoles };

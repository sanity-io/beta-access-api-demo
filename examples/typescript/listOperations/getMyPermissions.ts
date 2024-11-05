import { Permissions, Permission } from '../../../generated/typescript';
import { initApi } from '../util/initApi';

initApi('PROJECT_ROBOT_TOKEN');

const projectId = process.env.PROJECT_ID || '<project-id>';

async function readMyPermissions(projectId: string) {
  let permissions: Array<Permission> = [];
  let nextCursor: string | undefined;

  while (true) {
    const { data, error } = await Permissions.getMyPermissions({
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

    permissions = permissions.concat(data?.data || []);
    nextCursor = data?.nextCursor || undefined;

    if (nextCursor == null) {
      break;
    }
  }

  for (const permission of permissions) {
    console.log(`- ${permission.title}`);
    console.log(`  Identifier: ${permission.name}`);
    console.log(`  Description: ${permission.description}`);
    console.log(`  ResourceId: ${permission.resourceId}`);
    console.log(`  ResourceType: ${permission.resourceType}`);
    if (permission.params) {
      console.log(`  Params: ${JSON.stringify(permission.params)}`);
    }
  }
}

if (require.main === module) {
  readMyPermissions(projectId);
}

export { readMyPermissions };

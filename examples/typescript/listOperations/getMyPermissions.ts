import { Permissions, Permission, PaginatedResponse } from '../../../generated/typescript';
import { initApi } from '../util/initApi';

initApi('USER_TOKEN');

const projectId = process.env.PROJECT_ID || '<project-id>';

async function readMyPermissions(projectId: string) {
  const { data, error } = await Permissions.getMyPermissions({
    path: {
      resourceId: projectId,
      resourceType: 'project',
    },
  });

  if (error) {
    console.error(error);
    return;
  }

  const permissions = data as Array<Permission>;
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

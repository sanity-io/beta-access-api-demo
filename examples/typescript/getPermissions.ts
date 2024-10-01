import { Permissions } from '../../generated/typescript';
import { initApi } from './util/initApi';

initApi();

const projectId = process.env.PROJECT_ID || '<project-id>';

async function readPermissions(projectId: string) {
  const {data: permissions, error} = await Permissions.getPermissions({
    path: {
      resourceId: projectId,
      resourceType: 'project',
    }
  });

  if (error) {
    console.error(error);
    return;
  }

  if (!permissions) {
    console.error("No permissions found");
    return;
  }

  console.log("Permissions");
  for (const permission of permissions) {
    console.log(`- ${permission.title}`);
    console.log(`  Identifier: ${permission.name}`);
    console.log(`  Description: ${permission.description}`);
  }
}

if (require.main === module) {
  readPermissions(projectId);
}

export { readPermissions };
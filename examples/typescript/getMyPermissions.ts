import { Permissions } from '../../generated/typescript';
import { initApi } from './util/initApi';

initApi();

const projectId = process.env.PROJECT_ID || '<project-id>';

async function readMyPermissions(projectId: string) {
  const {data: permissions, error} = await Permissions.getMyPermissions({
    path: {
      resourceId: projectId,
      resourceType: 'project',
    },
  });

  if (error) {
    console.error(error);
    return;
  }

  for (const permission of permissions || []) {
    console.log(`- ${permission.title}`);
    console.log(`  Identifier: ${permission.name}`);
    console.log(`  Description: ${permission.description}`);
  }
}

if (require.main === module) {
  readMyPermissions(projectId);
}

export { readMyPermissions };
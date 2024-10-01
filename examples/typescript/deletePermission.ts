import { Permissions } from '../../generated/typescript';
import { initApi } from './util/initApi';

initApi();

const projectId = process.env.PROJECT_ID || '<project-id>';

async function deletePermission(projectId: string, permissionName: string) {
  const { error } = await Permissions.deletePermission({
    path: {
      resourceId: projectId,
      resourceType: 'project',
      permissionName: permissionName,
    },
  });

  if (error) {
    console.error(error);
    return;
  }

  console.log(`Permission deleted`);
}

if (require.main === module) {
  deletePermission(projectId, 'my-test-permission');
}

export { deletePermission };
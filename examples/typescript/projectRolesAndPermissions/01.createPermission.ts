import { Permissions } from '../../../generated/typescript';
import { initApi } from '../util/initApi';

initApi('PROJECT_ROBOT_TOKEN');

const projectId = process.env.PROJECT_ID || '<project-id>';

async function createPermission(projectId: string) {
  const { data: newPermission, error } = await Permissions.createPermission({
    path: {
      resourceId: projectId,
      resourceType: 'project',
    },
    body: {
      title: 'My Permission',
      description: 'This is a test permission',
      name: 'my-test-permission',
      type: 'sanity.document.filter.mode',
      config: {
        filter: `_type == "documentType"`,
      },
    },
  });

  if (error) {
    console.error(error);
    return;
  }

  console.log(`Permission created: ${JSON.stringify(newPermission, null, 2)}`);

  const { data: permission, error: getError } = await Permissions.getPermission({
    path: {
      resourceId: projectId,
      resourceType: 'project',
      permissionName: newPermission?.name + '.mode' || '',
    },
  });

  if (getError) {
    console.error(getError);
    return;
  }

  console.log(`Permission retrieved: ${JSON.stringify(permission, null, 2)}`);
}

if (require.main === module) {
  createPermission(projectId);
}

export { createPermission };

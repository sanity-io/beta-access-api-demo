import { Permissions } from '../../../generated/typescript';
import { initApi } from '../util/initApi';

initApi(process.env.PROJECT_ROBOT_TOKEN);

const projectId = process.env.PROJECT_ID || '<project-id>';

async function createPermission(projectId: string) {
  const {data: permissions, error} = await Permissions.createPermission({
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
        filter: `_type == "documentType"`
      }
    }
  });

  if (error) {
    console.error(error);
    return;
  }

  console.log(`Permission created, identifier: ${permissions?.name}`);
}

if (require.main === module) {
  createPermission(projectId);
}

export { createPermission };
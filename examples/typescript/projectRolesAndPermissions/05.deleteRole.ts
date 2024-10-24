import { initApi } from '../util/initApi';
import { Roles } from '../../../generated/typescript';

initApi(process.env.PROJECT_ROBOT_TOKEN);

const projectId = process.env.PROJECT_ID || '<project-id>';

async function deleteRole(projectId: string, roleName: string) {
  const {data: role, error} = await Roles.deleteRole({
    path: {
      resourceId: projectId,
      resourceType: 'project',
      roleName: roleName,
    }
  });

  if (error) {
    console.error(error);
    return;
  }

  console.log(`Role deleted successfully`);
}

if (require.main === module) {
  deleteRole(projectId, 'my-test-role');
}

export { deleteRole };


import { Roles } from '../../../generated/typescript';
import { initApi } from '../util/initApi';

initApi("USER_TOKEN");

const organizationId = process.env.ORGANIZATION_ID || '<organization-id>';

async function deleteRobotRole(organizationId: string) {

  const {data, error} = await Roles.deleteRole({
    path: {
      resourceId: organizationId,
      resourceType: 'organization',
      roleName: 'organization-robot-role-manage-users',
    }
  });

  if (error) {
    console.error(error);
    return;
  }

  console.log(data);
}

deleteRobotRole(organizationId);

import { Roles } from '../../../generated/typescript';
import { initApi } from '../util/initApi';

initApi("ORGANIZATION_ROBOT_TOKEN");

const organizationId = process.env.ORGANIZATION_ID || '<organization-id>';
const robotId = process.env.ROBOT_ID || '<robot-id>';

async function deleteRobotRole(organizationId: string, roleName: string) {

  const {data, error} = await Roles.deleteRole({
    path: {
      resourceId: organizationId,
      resourceType: 'organization',
      roleName: roleName,
    }
  });

  if (error) {
    console.error(error);
    return;
  }

  console.log(data);
}

deleteRobotRole(organizationId, robotId);

import { Robots } from '../../../generated/typescript';
import { initApi } from '../util/initApi';

// Make sure to pass in a user session and not a robot session
initApi("USER_TOKEN");

const organizationId = process.env.ORGANIZATION_ID || 'developer';

async function createRobot(organizationId: string, robotName: string) {
  const {data, error} = await Robots.createRobot({
    path: {
      resourceId: organizationId,
      resourceType: 'organization',
    },
    body: {
      label: robotName,
      memberships: [
        {
          resourceId: organizationId,
          resourceType: 'organization',
          roleNames: ['organization-robot-role-manage-users'],
        }
      ],
    }
  });

  console.log(`Make sure to save the token to the environment variable ORGANIZATION_ROBOT_TOKEN`);
  console.log(data);

  if (error) {
    console.error(error);
  }
}

createRobot(organizationId, 'organization-robot-manage-users');

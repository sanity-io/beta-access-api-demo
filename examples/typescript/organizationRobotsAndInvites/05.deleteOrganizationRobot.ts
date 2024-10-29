import { Robots } from '../../../generated/typescript';
import { initApi } from '../util/initApi';

initApi("ORGANIZATION_ROBOT_TOKEN");

const organizationId = process.env.ORGANIZATION_ID || '<organization-id>';
const robotId = process.env.ROBOT_ID || '<robot-id>';

async function deleteRobot(organizationId: string, robotId: string) {

  const {data: robots, error: robotsError} = await Robots.listRobots({
    path: {
      resourceId: organizationId,
      resourceType: 'organization',
    }
  });

  if (robotsError) {
    console.error(robotsError);
    return;
  }

  const robot = robots?.find((robot) => robot.id === robotId);

  if (!robot) {
    console.error("Robot not found");
    return;
  }

  const {data, error} = await Robots.deleteRobot({
    path: {
      resourceId: organizationId,
      resourceType: 'organization',
      robotId: robot.id,
    }
  });

  if (error) {
    console.error(error);
    return;
  }

  console.log(data);
}

deleteRobot(organizationId, robotId);

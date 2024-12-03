import { Robots, Robot, PaginatedResponse } from '../../../generated/typescript';
import { initApi } from '../util/initApi';

initApi('ORGANIZATION_ROBOT_TOKEN');

const organizationId = process.env.ORGANIZATION_ID || '<organization-id>';

async function readRobots(organizationId: string) {
  const { data, error } = await Robots.getRobots({
    path: {
      resourceId: organizationId,
      resourceType: 'organization',
    },
  });

  if (error) {
    console.error(error);
    return;
  }

  const robots = data as Array<Robot>;

  for (const robot of robots) {
    console.log(`- ${robot.label}`);
    console.log(`  ID: ${robot.id}`);
    console.log(`  Memberships: ${JSON.stringify(robot.memberships, null, 2)}`);
  }
}

if (require.main === module) {
  readRobots(organizationId);
}

export { readRobots };

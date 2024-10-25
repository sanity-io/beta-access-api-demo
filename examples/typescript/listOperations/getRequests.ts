import { Requests } from '../../../generated/typescript';
import { initApi } from '../util/initApi';

initApi("PROJECT_ROBOT_TOKEN");

const projectId = process.env.PROJECT_ID || '<project-id>';

async function readRequests(projectId: string) {
  const {data: requests, error} = await Requests.getRequests({
    path: {
      resourceId: projectId,
      resourceType: 'project',
    },
  });

  if (error) {
    console.error(error);
    return;
  }

  for (const request of requests || []) {
    console.log(`- ${request.requestedByUserProfile?.displayName}`);
    console.log(`  Email: ${request.requestedByUserProfile?.email}`);
    console.log(`  Status: ${request.status}`);
    console.log(`  Role: ${request.requestedRole}`);
    console.log(`  Note: ${request.note}`);
  }
}

if (require.main === module) {
  readRequests(projectId);
}

export { readRequests };

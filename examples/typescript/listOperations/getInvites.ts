import { Invites } from '../../../generated/typescript';
import { initApi } from '../util/initApi';

initApi("PROJECT_ROBOT_TOKEN");

const projectId = process.env.PROJECT_ID || '<project-id>';

async function readInvites(projectId: string) {
  const {data: invites, error} = await Invites.getInvites({
    path: {
      resourceId: projectId,
      resourceType: 'project',
    },
  });

  if (error) {
    console.error(error);
    return;
  }

  for (const invite of invites || []) {
    console.log(`- ${invite.email}`);
    console.log(`  Status: ${invite.status}`);
    console.log(`  Role: ${invite.role}`);
  }
}

if (require.main === module) {
  readInvites(projectId);
}

export { readInvites };

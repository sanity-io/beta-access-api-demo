import { Invites, Invite } from '../../../generated/typescript';
import { initApi } from '../util/initApi';

initApi("PROJECT_ROBOT_TOKEN");

const projectId = process.env.PROJECT_ID || '<project-id>';

async function readInvites(projectId: string) {
  let invites: Array<Invite> = []
  let nextCursor: string | undefined;

  while (true) {
    const { data, error } = await Invites.getInvites({
      path: {
        resourceId: projectId,
        resourceType: 'project',
      },
      query: {
          limit: 10,
          nextCursor,
        },
    });

    if (error) {
      console.error(error);
      return;
    }

    invites = invites.concat(data?.data || []);
    nextCursor = data?.nextCursor || undefined;

    if (nextCursor == null) {
      break;
    }
  }

    for (const invite of invites) {
      console.log(`- ${invite.email}`);
      console.log(`  Status: ${invite.status}`);
      console.log(`  Role: ${invite.role}`);
  }
}

if (require.main === module) {
  readInvites(projectId);
}

export { readInvites };

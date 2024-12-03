import { Invites, Invite, PaginatedResponse } from '../../../generated/typescript';
import { initApi } from '../util/initApi';

initApi('PROJECT_ROBOT_TOKEN');

const projectId = process.env.PROJECT_ID || '<project-id>';

async function readInvites(projectId: string) {
  let invites: Array<Invite> = [];
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

    // Temporary fix for the API optionally returning a non-paginated response
    const paginatedData = data as PaginatedResponse & {
      data?: Array<Invite>;
    };

    invites = invites.concat(paginatedData.data || []);
    nextCursor = paginatedData.nextCursor || undefined;

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

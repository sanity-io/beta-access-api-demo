import { Users, User } from '../../../generated/typescript';
import { initApi } from '../util/initApi';

initApi("PROJECT_ROBOT_TOKEN");

const projectId = process.env.PROJECT_ID || '<project-id>';

async function readUsers(projectId: string) {
  let users: Array<User> = [];
  let nextCursor: string | undefined;

  while (true) {
    const {data, error} = await Users.getUsers({
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

    users = users.concat(data?.data || []);
    nextCursor = data?.nextCursor || undefined;

    if (nextCursor == null) {
      break;
    }
  }

  console.log("Users");
  for (const user of users) {
    console.log(`- ${user.profile.displayName} (${user.profile.email} provided by ${user.profile.provider}) has roles:`);
    for (const membership of user.memberships) {
      console.log(`  - ${membership.resourceId} (${membership.resourceType}) has roles:`);
      for (const roleName of membership.roleNames) {
        console.log(`    - ${roleName}`);
      }
    }
  }
}

if (require.main === module) {
  readUsers(projectId);
}

export { readUsers };
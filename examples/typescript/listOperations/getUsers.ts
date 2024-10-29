import { Users } from '../../../generated/typescript';
import { initApi } from '../util/initApi';

initApi("PROJECT_ROBOT_TOKEN");

const projectId = process.env.PROJECT_ID || '<project-id>';

async function readUsers(projectId: string) {
  const {data: users, error} = await Users.getUsers({
    path: {
      resourceId: projectId,
      resourceType: 'project',
    }
  });

  if (error) {
    console.error(error);
    return;
  }

  if (!users) {
    console.error("No users found");
    return;
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
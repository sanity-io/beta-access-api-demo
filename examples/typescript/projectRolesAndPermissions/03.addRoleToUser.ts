import { Users } from '../../../generated/typescript';
import { initApi } from '../util/initApi';

initApi(process.env.PROJECT_ROBOT_TOKEN);

const projectId = process.env.PROJECT_ID || '<project-id>';
const email = process.env.EMAIL_ADDRESS || 'john.doe@example.com';
const roleName = process.env.ROLE_NAME || 'my-test-role';

async function assignRole(projectId: string, email: string, roleName: string) {
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

  const user = users.find((user) => user.profile.email === email);

  if (!user || !user.sanityUserId) {
    console.error("User not found");
    return;
  }

  const {data, error: addError} = await Users.addRoleToUser({
    path: {
      resourceId: projectId,
      resourceType: 'project',
      roleName: roleName,
      sanityUserId: user.sanityUserId,
    }
  })

  if (addError) {
    console.error(addError);
    return;
  }

  console.log(data);
}

if (require.main === module) {
  assignRole(projectId, email, roleName);
}

export { assignRole };
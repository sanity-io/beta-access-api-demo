import { PaginatedResponse, User, Users } from '../../../generated/typescript';
import { initApi } from '../util/initApi';

initApi('ORGANIZATION_ROBOT_TOKEN');

const organizationId = process.env.ORGANIZATION_ID || '<organization-id>';
const projectId = process.env.PROJECT_ID || '<project-id>';
const email = process.env.EMAIL_ADDRESS || 'john.doe@example.com';
const roleName = process.env.ROLE_NAME || 'developer';

async function assignRole(organizationId: string, email: string, roleName: string) {
  let nextCursor: string | undefined;
  let users: Array<User> = [];
  while (true) {
    const { data, error } = await Users.getUsers({
      path: {
        resourceId: organizationId,
        resourceType: 'organization',
    },
      query: {
        nextCursor,
        limit: 10,
      },
    });

    if (error) {
      console.error(error);
      return;
    }

    if (!data) {
      console.error('No users found');
      return;
    }

    const paginatedData = data as PaginatedResponse & {
      data?: Array<User>;
    };

    users = users.concat(paginatedData.data || []);
    nextCursor = paginatedData.nextCursor || undefined;

    if (nextCursor == null) {
      break;
    }
  }

  const user = users.find(user => user.profile.email === email);

  if (!user || !user.sanityUserId) {
    console.error('User not found');
    return;
  }

  const { data: addData, error: addError } = await Users.addRoleToUser({
    path: {
      resourceId: organizationId,
      resourceType: 'organization',
      roleName: roleName,
      sanityUserId: user.sanityUserId,
    },
  });

  if (addError) {
    console.error(addError);
    return;
  }

  console.log(addData);
}

if (require.main === module) {
  assignRole(organizationId, email, roleName);
}

export { assignRole };

import { Invites } from '../../../generated/typescript';
import { initApi } from '../util/initApi';

// Make sure to set the TOKEN environment variable to the organization token
initApi('ORGANIZATION_ROBOT_TOKEN');

const organizationId = process.env.ORGANIZATION_ID || '<organization-id>';
const email = process.env.INVITE_EMAIL || '';

async function sendInvites(organizationId: string, email: string) {
  const { data, error } = await Invites.createInvite({
    path: {
      resourceId: organizationId,
      resourceType: 'organization',
    },
    body: {
      email: email,
      role: 'administrator',
    },
  });

  console.log(data);

  if (error) {
    console.error(error);
  }
}

sendInvites(organizationId, email);

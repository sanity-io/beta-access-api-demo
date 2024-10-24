import { Invites } from '../../../generated/typescript';
import { initApi } from '../util/initApi';

// Doesn't require a session
initApi();

const organizationId = process.env.ORGANIZATION_ID || '<organization-id>';

// This is only sent to the invitee via email. We do not have access to it in the client.
const inviteToken = process.env.INVITE_TOKEN || '<invite-token>';

async function getInviteByToken(organizationId: string, inviteToken: string) {
  const {data, error} = await Invites.getInviteByToken({
    path: {
      inviteToken: inviteToken,
      resourceId: organizationId,
      resourceType: 'organization',
    },
  });

  console.log(data);

  if (error) {
    console.error(error);
  }
}

getInviteByToken(organizationId, inviteToken);

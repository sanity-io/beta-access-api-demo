import { Roles } from '../../../generated/typescript';
import { initApi } from '../util/initApi';

initApi(process.env.PROJECT_ROBOT_TOKEN);

const projectId = process.env.PROJECT_ID || '<project-id>';

async function readRoles(projectId: string) {
  const {data: roles, error} = await Roles.getRoles({
    path: {
      resourceId: projectId,
      resourceType: 'project',
    }
  });

  if (error) {
    console.error(error);
    return;
  }

  if (!roles) {
    console.error("No roles found");
    return;
  }

  console.log("Roles");
  for (const role of roles) {
    console.log(`- ${role.title} (identifier: ${role.name}) has permissions:`);
    for (const permission of role.permissions || []) {
      console.log(`  - ${permission.name} (identifier: ${permission.name})`);
      if (permission.params) {
        console.log(`    - params: ${JSON.stringify(permission.params)}`);
      }
    }
  }
}

if (require.main === module) {
  readRoles(projectId);
}

export { readRoles };
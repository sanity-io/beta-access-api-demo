// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type Options } from './client';
import type { GetPermissionsData, GetPermissionsError, GetPermissionsResponse, CreatePermissionData, CreatePermissionError, CreatePermissionResponse, GetPermissionData, GetPermissionError, GetPermissionResponse, UpdatePermissionData, UpdatePermissionError, UpdatePermissionResponse, DeletePermissionData, DeletePermissionError, DeletePermissionResponse, GetMyPermissionsData, GetMyPermissionsError, GetMyPermissionsResponse, GetUsersData, GetUsersError, GetUsersResponse, AddDefaultRoleToUsersData, AddDefaultRoleToUsersError, AddDefaultRoleToUsersResponse, GetUserData, GetUserError, GetUserResponse, RemoveUserData, RemoveUserError, RemoveUserResponse, AddRoleToUserData, AddRoleToUserError, AddRoleToUserResponse, RemoveRoleFromUserData, RemoveRoleFromUserError, RemoveRoleFromUserResponse, GetuserPermissionsData, GetuserPermissionsError, GetuserPermissionsResponse, GetRolesData, GetRolesError, GetRolesResponse, CreateRoleData, CreateRoleError, CreateRoleResponse, GetRoleData, GetRoleError, GetRoleResponse, UpdateRoleData, UpdateRoleError, UpdateRoleResponse, DeleteRoleData, DeleteRoleError, DeleteRoleResponse, GetRequestsData, GetRequestsError, GetRequestsResponse, CreateRequestData, CreateRequestError, CreateRequestResponse, AcceptRequestData, AcceptRequestError, AcceptRequestResponse, DeclineRequestData, DeclineRequestError, DeclineRequestResponse, GetMyRequestsError, GetMyRequestsResponse, GetInvitesData, GetInvitesError, GetInvitesResponse, CreateInviteData, CreateInviteError, CreateInviteResponse, RevokeInviteData, RevokeInviteError, RevokeInviteResponse, GetInviteByTokenData, GetInviteByTokenError, GetInviteByTokenResponse, AcceptInviteData, AcceptInviteError, AcceptInviteResponse, GetRobotsData, GetRobotsError, GetRobotsResponse, CreateRobotData, CreateRobotError, CreateRobotResponse, GetRobotData, GetRobotError, GetRobotResponse, DeleteRobotData, DeleteRobotError, DeleteRobotResponse } from './types.gen';

export const client = createClient(createConfig());

export class Permissions {
    /**
     * Get Permissions.
     * Gets the available permissions within scope of a resource. These permissions can be applied to roles and are used to determine user/robot access to resources. <br /> <br /> Requires permission: `sanity.{resourceType}.roles.read`
     *
     */
    public static getPermissions<ThrowOnError extends boolean = false>(options: Options<GetPermissionsData, ThrowOnError>) {
        return (options?.client ?? client).get<GetPermissionsResponse, GetPermissionsError, ThrowOnError>({
            ...options,
            url: '/vX/access/{resourceType}/{resourceId}/permissions'
        });
    }
    
    /**
     * Create a permission.
     * Creates a custom permission on a resource. <br /> <br /> Requires permission: `sanity.{resourceType}.roles.create` <br /> Requires feature: `advancedRolesManagement` <br /> <br /> See Example. It creates a permission to allow a user to read legal documents in project `c7ja4siy` and dataset `production`.
     *
     */
    public static createPermission<ThrowOnError extends boolean = false>(options: Options<CreatePermissionData, ThrowOnError>) {
        return (options?.client ?? client).post<CreatePermissionResponse, CreatePermissionError, ThrowOnError>({
            ...options,
            url: '/vX/access/{resourceType}/{resourceId}/permissions'
        });
    }
    
    /**
     * Get a permission
     * Gets a permission for a resource by name. Requires permission
     * - `sanity.{resourceType}.roles.read`
     *
     */
    public static getPermission<ThrowOnError extends boolean = false>(options: Options<GetPermissionData, ThrowOnError>) {
        return (options?.client ?? client).get<GetPermissionResponse, GetPermissionError, ThrowOnError>({
            ...options,
            url: '/vX/access/{resourceType}/{resourceId}/permissions/{permissionName}'
        });
    }
    
    /**
     * Update a permission
     * Updates a permission for a resource. Requires permission
     * - `sanity.{resourceType}.roles.update`
     * Requires feature:
     * - `advancedRolesManagement`
     *
     */
    public static updatePermission<ThrowOnError extends boolean = false>(options: Options<UpdatePermissionData, ThrowOnError>) {
        return (options?.client ?? client).put<UpdatePermissionResponse, UpdatePermissionError, ThrowOnError>({
            ...options,
            url: '/vX/access/{resourceType}/{resourceId}/permissions/{permissionName}'
        });
    }
    
    /**
     * Delete a permission
     * Deletes a specific permission for a resource. Can only be used with custom permissions. Requires permission
     * - `sanity.{resourceType}.roles.delete`
     * Requires feature:
     * - `advancedRolesManagement`
     *
     */
    public static deletePermission<ThrowOnError extends boolean = false>(options: Options<DeletePermissionData, ThrowOnError>) {
        return (options?.client ?? client).delete<DeletePermissionResponse, DeletePermissionError, ThrowOnError>({
            ...options,
            url: '/vX/access/{resourceType}/{resourceId}/permissions/{permissionName}'
        });
    }
    
    /**
     * Get current user permissions.
     * Gets the available permissions within scope of a resource. These permissions can be applied to roles and are used to determine user/robot access to resources.
     *
     */
    public static getMyPermissions<ThrowOnError extends boolean = false>(options?: Options<GetMyPermissionsData, ThrowOnError>) {
        return (options?.client ?? client).get<GetMyPermissionsResponse, GetMyPermissionsError, ThrowOnError>({
            ...options,
            url: '/vX/access/permissions/me'
        });
    }
    
}

export class Users {
    /**
     * List all users of a resource and their assigned roles.
     * Retrieve a list of all users of a resource along with their assigned roles. When the resourceType is `organization`, this endpoint will return users of projects owned by the organization. Requires permission
     * - `sanity.{resourceType}.members.read`
     *
     */
    public static getUsers<ThrowOnError extends boolean = false>(options: Options<GetUsersData, ThrowOnError>) {
        return (options?.client ?? client).get<GetUsersResponse, GetUsersError, ThrowOnError>({
            ...options,
            url: '/vX/access/{resourceType}/{resourceId}/users'
        });
    }
    
    /**
     * Apply organization default role to all users.
     * Add default role to all resource users. Limited to Organization. Requires permission
     * - `sanity.organization.members.update`
     *
     */
    public static addDefaultRoleToUsers<ThrowOnError extends boolean = false>(options: Options<AddDefaultRoleToUsersData, ThrowOnError>) {
        return (options?.client ?? client).put<AddDefaultRoleToUsersResponse, AddDefaultRoleToUsersError, ThrowOnError>({
            ...options,
            url: '/vX/access/organization/{resourceId}/users/roles/default'
        });
    }
    
    /**
     * Get user and roles.
     * Get the users for a single user of a resource. Requires permission - `sanity.{resourceType}.members.read`
     */
    public static getUser<ThrowOnError extends boolean = false>(options: Options<GetUserData, ThrowOnError>) {
        return (options?.client ?? client).get<GetUserResponse, GetUserError, ThrowOnError>({
            ...options,
            url: '/vX/access/{resourceType}/{resourceId}/users/{sanityUserId}'
        });
    }
    
    /**
     * Remove a user from a resource.
     * This removes all roles. If the resourceType is `organization`, this will also remove the user from all projects owned by the organization. Requires permission
     * - `sanity.{resourceType}.members.delete`
     *
     */
    public static removeUser<ThrowOnError extends boolean = false>(options: Options<RemoveUserData, ThrowOnError>) {
        return (options?.client ?? client).delete<RemoveUserResponse, RemoveUserError, ThrowOnError>({
            ...options,
            url: '/vX/access/{resourceType}/{resourceId}/users/{sanityUserId}'
        });
    }
    
    /**
     * Add a role to a user.
     * Add a role to a user. Requires permission
     * - `sanity.{resourceType}.members.update`
     *
     */
    public static addRoleToUser<ThrowOnError extends boolean = false>(options: Options<AddRoleToUserData, ThrowOnError>) {
        return (options?.client ?? client).put<AddRoleToUserResponse, AddRoleToUserError, ThrowOnError>({
            ...options,
            url: '/vX/access/{resourceType}/{resourceId}/users/{sanityUserId}/roles/{roleName}'
        });
    }
    
    /**
     * Remove a role from a user in a resource.
     * You cannot remove the last role from a user, you must have at least one role assigned to a user. Requires permission
     * - `sanity.{resourceType}.members.update`
     *
     */
    public static removeRoleFromUser<ThrowOnError extends boolean = false>(options: Options<RemoveRoleFromUserData, ThrowOnError>) {
        return (options?.client ?? client).delete<RemoveRoleFromUserResponse, RemoveRoleFromUserError, ThrowOnError>({
            ...options,
            url: '/vX/access/{resourceType}/{resourceId}/users/{sanityUserId}/roles/{roleName}'
        });
    }
    
    /**
     * List permissions for a user
     * Normalized list permission resources for a user across all assigned roles. Requires permissions:
     * - `sanity.{resourceType}.members.read` for resource scoped roles (e.g. project admin)
     *
     */
    public static getuserPermissions<ThrowOnError extends boolean = false>(options: Options<GetuserPermissionsData, ThrowOnError>) {
        return (options?.client ?? client).get<GetuserPermissionsResponse, GetuserPermissionsError, ThrowOnError>({
            ...options,
            url: '/vX/access/{resourceType}/{resourceId}/users/{sanityUserId}/permissions'
        });
    }
    
}

export class Roles {
    /**
     * List roles assignable to a user on this resource.
     * Requires permission
     * - `sanity.{resourceType}.roles.read`
     *
     */
    public static getRoles<ThrowOnError extends boolean = false>(options: Options<GetRolesData, ThrowOnError>) {
        return (options?.client ?? client).get<GetRolesResponse, GetRolesError, ThrowOnError>({
            ...options,
            url: '/vX/access/{resourceType}/{resourceId}/roles'
        });
    }
    
    /**
     * Create a role
     * Requires permission:
     * - `sanity.{resourceType}.roles.create`
     * Requires feature:
     * - `advancedRolesManagement`
     *
     */
    public static createRole<ThrowOnError extends boolean = false>(options: Options<CreateRoleData, ThrowOnError>) {
        return (options?.client ?? client).post<CreateRoleResponse, CreateRoleError, ThrowOnError>({
            ...options,
            url: '/vX/access/{resourceType}/{resourceId}/roles'
        });
    }
    
    /**
     * Get a role
     * Requires permission
     * - `sanity.{resourceType}.roles.read`
     *
     */
    public static getRole<ThrowOnError extends boolean = false>(options: Options<GetRoleData, ThrowOnError>) {
        return (options?.client ?? client).get<GetRoleResponse, GetRoleError, ThrowOnError>({
            ...options,
            url: '/vX/access/{resourceType}/{resourceId}/roles/{roleName}'
        });
    }
    
    /**
     * Update a role
     * Requires permission:
     * - `sanity.{resourceType}.roles.update`
     *
     * Requires feature:
     * - `advancedRolesManagement`
     *
     * Replaces existing object values including permissions.
     *
     */
    public static updateRole<ThrowOnError extends boolean = false>(options: Options<UpdateRoleData, ThrowOnError>) {
        return (options?.client ?? client).put<UpdateRoleResponse, UpdateRoleError, ThrowOnError>({
            ...options,
            url: '/vX/access/{resourceType}/{resourceId}/roles/{roleName}'
        });
    }
    
    /**
     * Delete a role
     * Requires permission:
     * - `sanity.{resourceType}.roles.delete` for resource scoped roles (e.g. project admin)
     *
     * Requires feature:
     * - `advancedRolesManagement`
     *
     * Cannot delete a role that is assigned to a user. The role needs to be removed from users first.
     *
     */
    public static deleteRole<ThrowOnError extends boolean = false>(options: Options<DeleteRoleData, ThrowOnError>) {
        return (options?.client ?? client).delete<DeleteRoleResponse, DeleteRoleError, ThrowOnError>({
            ...options,
            url: '/vX/access/{resourceType}/{resourceId}/roles/{roleName}'
        });
    }
    
}

export class Requests {
    /**
     * List all request for given project/organization
     * Permissions `sanity.{resourceType}.members.read`
     */
    public static getRequests<ThrowOnError extends boolean = false>(options: Options<GetRequestsData, ThrowOnError>) {
        return (options?.client ?? client).get<GetRequestsResponse, GetRequestsError, ThrowOnError>({
            ...options,
            url: '/v2024-07-01/access/{resourceType}/{resourceId}/requests'
        });
    }
    
    /**
     * Create a new Request
     * Creates a new request for the given project/organization. Requires an authenticated user.
     */
    public static createRequest<ThrowOnError extends boolean = false>(options: Options<CreateRequestData, ThrowOnError>) {
        return (options?.client ?? client).post<CreateRequestResponse, CreateRequestError, ThrowOnError>({
            ...options,
            url: '/v2024-07-01/access/{resourceType}/{resourceId}/requests'
        });
    }
    
    /**
     * Accept request
     * Permissions `sanity.{resourceType}.members.invite`
     */
    public static acceptRequest<ThrowOnError extends boolean = false>(options: Options<AcceptRequestData, ThrowOnError>) {
        return (options?.client ?? client).put<AcceptRequestResponse, AcceptRequestError, ThrowOnError>({
            ...options,
            url: '/v2024-07-01/access/{resourceType}/{resourceId}/requests/{requestId}/accept'
        });
    }
    
    /**
     * Decline request
     * Permissions `sanity.{resourceType}.members.invite`
     */
    public static declineRequest<ThrowOnError extends boolean = false>(options: Options<DeclineRequestData, ThrowOnError>) {
        return (options?.client ?? client).put<DeclineRequestResponse, DeclineRequestError, ThrowOnError>({
            ...options,
            url: '/v2024-07-01/access/{resourceType}/{resourceId}/requests/{requestId}/decline'
        });
    }
    
    /**
     * List all request for current user
     * Requires an authenticated user.
     */
    public static getMyRequests<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
        return (options?.client ?? client).get<GetMyRequestsResponse, GetMyRequestsError, ThrowOnError>({
            ...options,
            url: '/v2024-07-01/access/requests/me'
        });
    }
    
}

export class Invites {
    /**
     * Get invites
     * Retrieves a list of invites for the specified resource.
     *
     * Only pending invites are retrieved by default. Use the optional `status`
     * parameter to change the filter behavior. You can select multiple
     * statuses by repeating the parameter.
     *
     * ### Children invites
     *
     * By default, only invites for the specified resource are returned. Use the
     * optional `includeChildren` parameter to include invites for children
     * resources as well. This only applies to `organization` resources.
     *
     * ### Authorization
     *
     * This endpoint requires an authenticated user session with the following
     * permissions:
     * - `sanity.{resourceType}.members.read`
     *
     */
    public static getInvites<ThrowOnError extends boolean = false>(options: Options<GetInvitesData, ThrowOnError>) {
        return (options?.client ?? client).get<GetInvitesResponse, GetInvitesError, ThrowOnError>({
            ...options,
            url: '/vX/access/{resourceType}/{resourceId}/invites'
        });
    }
    
    /**
     * Create invite
     * Creates an invite for the specified resource.
     *
     * The invitee will receive an email with a link to accept the invite.
     *
     * Each invitee can only receive one invite per resource and role.
     * Attempting to create an invite using a non-existent role, or a role that
     * cannot be granted to users will result in a Bad Request error.
     *
     * ### Unavailable resources
     *
     * If the underlying resource is unavailable then a Bad Request error will
     * be returned. A common example of an unavailable resource is a project
     * that is blocked or archived.
     *
     * ### Authorization
     *
     * This endpoint requires an authenticated user session with the following
     * permissions:
     * - `sanity.{resourceType}.members.invite`
     *
     * Additionally, only administrators can invite other administrators.
     *
     */
    public static createInvite<ThrowOnError extends boolean = false>(options: Options<CreateInviteData, ThrowOnError>) {
        return (options?.client ?? client).post<CreateInviteResponse, CreateInviteError, ThrowOnError>({
            ...options,
            url: '/vX/access/{resourceType}/{resourceId}/invites'
        });
    }
    
    /**
     * Revoke invite
     * Revokes an invite.
     *
     * Attempting to revoke an invite that has already been accepted or revoked
     * will result in a Bad Request error.
     *
     * ### Authorization
     *
     * This endpoint requires an authenticated user session with the following
     * permissions:
     * - `sanity.{resourceType}.members.invite`
     *
     */
    public static revokeInvite<ThrowOnError extends boolean = false>(options: Options<RevokeInviteData, ThrowOnError>) {
        return (options?.client ?? client).delete<RevokeInviteResponse, RevokeInviteError, ThrowOnError>({
            ...options,
            url: '/vX/access/{resourceType}/{resourceId}/invites/{inviteId}'
        });
    }
    
    /**
     * Get invite
     * Retrieves an invite using its token.
     *
     * ### Authorization
     *
     * This endpoint does not require authentication.
     *
     */
    public static getInviteByToken<ThrowOnError extends boolean = false>(options: Options<GetInviteByTokenData, ThrowOnError>) {
        return (options?.client ?? client).get<GetInviteByTokenResponse, GetInviteByTokenError, ThrowOnError>({
            ...options,
            url: '/vX/access/{resourceType}/{resourceId}/invites/token/{inviteToken}'
        });
    }
    
    /**
     * Accept invite
     * Accepts an invite using its token.
     *
     * Attempting to accept an invite that is already accepted or revoked will
     * result in a Bad Request error.
     *
     * Once the invite has been accepted, the user will have access to the
     * resource with the role it has been assigned to them as part of the
     * invitation.
     *
     * > **Access is propagated internally and may take a up to a few minutes to
     * > be fully available across all systems.**
     *
     * ### Unavailable resources
     *
     * If the underlying resource is unavailable then a Bad Request error will
     * be returned. A common example of an unavailable resource is a project
     * that is blocked or archived.
     *
     * ### Member quota
     *
     * Some resources have a limit on the number of members. If accepting an
     * invite would go over this limit, then a Payment Required error is
     * returned.
     *
     * ### Authorization
     *
     * This endpoint requires an authenticated user session.
     *
     */
    public static acceptInvite<ThrowOnError extends boolean = false>(options: Options<AcceptInviteData, ThrowOnError>) {
        return (options?.client ?? client).post<AcceptInviteResponse, AcceptInviteError, ThrowOnError>({
            ...options,
            url: '/vX/access/{resourceType}/{resourceId}/invites/token/{inviteToken}/accept'
        });
    }
    
}

export class Robots {
    /**
     * Get robots with access to this resource
     * Retrieves a list of robots that have access to the specified resource.
     *
     * ### Access to children resources
     *
     * By default, this endpoint returns robots that have at least one role on
     * the specified resource. Use the optional `includeChildren` parameter to
     * include robots that have a role on children resources as well. This
     * only applies to `organization` resources.
     *
     * ### Authorization
     *
     * This endpoint requires an authenticated user session with the following
     * permissions:
     * - `sanity.{resourceType}.tokens.read`
     *
     */
    public static getRobots<ThrowOnError extends boolean = false>(options: Options<GetRobotsData, ThrowOnError>) {
        return (options?.client ?? client).get<GetRobotsResponse, GetRobotsError, ThrowOnError>({
            ...options,
            url: '/vX/access/{resourceType}/{resourceId}/robots'
        });
    }
    
    /**
     * Create robot and associated token
     * Creates a robot with the specified role grants and returns its secret
     * token.
     *
     * The API currently only supports organization-scoped robots. This means
     * that `organization` must be provided to the `resourceType` parameter.
     *
     * Only the specified resource and its children resources can be specified
     * in the role grants. The robot will not have access to other resources.
     *
     * ### Secret token
     *
     * The secret token is only returned once and can not be retrieved again.
     * If the token is lost, a new robot must be created. The previous robot
     * should be deleted.
     *
     * ### Authorization
     *
     * This endpoint requires an authenticated user session with the following
     * permissions:
     * - `sanity.{resourceType}.tokens.create`
     *
     */
    public static createRobot<ThrowOnError extends boolean = false>(options: Options<CreateRobotData, ThrowOnError>) {
        return (options?.client ?? client).post<CreateRobotResponse, CreateRobotError, ThrowOnError>({
            ...options,
            url: '/vX/access/{resourceType}/{resourceId}/robots'
        });
    }
    
    /**
     * Get robot metadata
     * Retrieves a robot using its unique identifier.
     *
     * It's not possible to retrieve a robot token.
     *
     * ### Authorization
     *
     * This endpoint requires an authenticated user session with the following
     * permissions:
     * - `sanity.{resourceType}.tokens.read`
     *
     */
    public static getRobot<ThrowOnError extends boolean = false>(options: Options<GetRobotData, ThrowOnError>) {
        return (options?.client ?? client).get<GetRobotResponse, GetRobotError, ThrowOnError>({
            ...options,
            url: '/vX/access/{resourceType}/{resourceId}/robots/{robotId}'
        });
    }
    
    /**
     * Delete robot and associated token
     * Deletes a robot and revokes its token.
     *
     * ### Authorization
     *
     * This endpoint requires an authenticated user session with the following
     * permissions:
     * - `sanity.{resourceType}.tokens.delete`
     *
     */
    public static deleteRobot<ThrowOnError extends boolean = false>(options: Options<DeleteRobotData, ThrowOnError>) {
        return (options?.client ?? client).delete<DeleteRobotResponse, DeleteRobotError, ThrowOnError>({
            ...options,
            url: '/vX/access/{resourceType}/{resourceId}/robots/{robotId}'
        });
    }
    
}
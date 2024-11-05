// This file is auto-generated by @hey-api/openapi-ts

export const PermissionSchema = {
    title: 'Permission',
    type: 'object',
    properties: {
        type: {
            type: 'string',
            enum: ['sanity.document.filter', 'sanity.document.filter.mode', 'sanity.organization', 'sanity.organization.legal', 'sanity.organization.members', 'sanity.organization.projects', 'sanity.organization.roles', 'sanity.organization.sso', 'sanity.project', 'sanity.project.cors', 'sanity.project.datasets', 'sanity.project.graphql', 'sanity.project.members', 'sanity.project.roles', 'sanity.project.tags', 'sanity.project.tokens', 'sanity.project.usage', 'sanity.project.webhooks'],
            description: 'The type of permission.',
            example: 'sanity.project.members'
        },
        name: {
            type: 'string',
            description: 'The name of the permission. This is the unique identifier for the resource.',
            example: 'sanity.project.members.read'
        },
        title: {
            type: 'string',
            description: 'The human-readable title of the permission',
            example: 'Read Project users'
        },
        description: {
            type: 'string',
            description: 'The human-readable description of the permission',
            example: 'Read access to project users'
        },
        resourceType: {
            type: 'string',
            description: 'The resource that the permission applies to.',
            example: 'project'
        },
        resourceId: {
            type: 'string',
            description: 'The resource ID that the permission applies to.',
            example: 'c7ja4siy'
        },
        ownerOrganizationId: {
            type: 'string',
            description: 'The organization ID that the permission applies to. Used for wildcard permissions where the resourceId is `*`.',
            example: 'or0Bc1hcJ'
        },
        params: {
            type: 'object',
            description: "The parameters for the permission. This is a key-value map of the permission's configuration.",
            example: {
                filter: '*[_type == "legal"]'
            }
        }
    },
    required: ['type', 'name', 'title', 'resourceType', 'resourceId']
} as const;

export const RoleSchema = {
    title: 'Role',
    type: 'object',
    properties: {
        name: {
            type: 'string',
            example: 'administrator'
        },
        title: {
            type: 'string',
            example: 'Administrator'
        },
        description: {
            type: 'string',
            example: 'Administrators can manage billing details, legal contacts, organization users and manage project ownership'
        },
        isCustom: {
            type: 'boolean',
            example: false
        },
        resourceType: {
            type: 'string',
            example: 'organization'
        },
        resourceId: {
            type: 'string',
            example: 'or0Bc1hcJ'
        },
        appliesToUsers: {
            type: 'boolean',
            example: true
        },
        appliesToRobots: {
            type: 'boolean',
            example: true
        },
        permissions: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        example: 'sanity.document.filter.mode'
                    },
                    params: {
                        type: 'object',
                        description: "The parameters for the permission. This is a key-value map of the permission's configuration.",
                        example: {
                            dataset: 'development'
                        }
                    }
                },
                required: ['name']
            }
        }
    },
    required: ['name', 'title', 'resourceType', 'resourceId', 'appliesToUsers', 'appliesToRobots']
} as const;

export const MembershipSchema = {
    type: 'object',
    properties: {
        resourceType: {
            type: 'string',
            example: 'project'
        },
        resourceId: {
            type: 'string',
            example: 'c7ja4siy'
        },
        roleNames: {
            type: 'array',
            items: {
                type: 'string'
            },
            example: ['administrator', 'editor']
        }
    },
    required: ['resourceType', 'resourceId', 'roleNames']
} as const;

export const MembershipsSchema = {
    type: 'array',
    items: {
        '$ref': '#/components/schemas/Membership'
    }
} as const;

export const UserSchema = {
    title: 'User',
    type: 'object',
    properties: {
        sanityUserId: {
            type: 'string',
            example: 'gDdcnv42e'
        },
        profile: {
            '$ref': '#/components/schemas/UserProfile'
        },
        memberships: {
            '$ref': '#/components/schemas/Memberships'
        }
    },
    required: ['sanityUserId', 'profile', 'memberships']
} as const;

export const RequestSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
            example: 'request-id'
        },
        status: {
            type: 'string',
            example: 'pending'
        },
        resourceId: {
            type: 'string',
            example: 'project-id'
        },
        resourceType: {
            type: 'string',
            example: 'project'
        },
        createdAt: {
            type: 'string',
            format: 'date-time',
            example: '2024-07-10T12:00:00Z'
        },
        updatedAt: {
            type: 'string',
            format: 'date-time',
            example: '2024-07-10T12:00:00Z'
        },
        updatedByUserId: {
            type: 'string',
            example: 'admin-id'
        },
        requestedByUserId: {
            type: 'string',
            example: 'user-id'
        },
        note: {
            type: 'string',
            example: 'Text describing the reason of the request'
        },
        requestedByUserProfile: {
            '$ref': '#/components/schemas/UserProfile'
        },
        type: {
            '$ref': '#/components/schemas/RequestType'
        },
        requestedRole: {
            type: 'string',
            example: 'editor'
        }
    },
    required: ['id', 'status', 'resourceId', 'resourceType', 'createdAt', 'requestedByUserId']
} as const;

export const ResourceTypeSchema = {
    type: 'string',
    enum: ['organization', 'project'],
    example: 'project',
    description: `Resources are entities that can be managed and accessed through the
Access API.
`
} as const;

export const RobotSchema = {
    type: 'object',
    description: 'A robot is a service account that can be used to authenticate with the API.',
    properties: {
        id: {
            type: 'string',
            description: 'The unique identifier for the robot.',
            readOnly: true
        },
        label: {
            type: 'string',
            description: 'A human-readable label for the robot.'
        },
        createdAt: {
            type: 'string',
            format: 'date-time',
            description: 'The creation date of the robot.',
            readOnly: true
        },
        memberships: {
            '$ref': '#/components/schemas/Memberships'
        }
    },
    required: ['id', 'label', 'createdAt', 'memberships']
} as const;

export const RobotWithTokenSchema = {
    type: 'object',
    allOf: [
        {
            '$ref': '#/components/schemas/Robot'
        }
    ],
    properties: {
        token: {
            type: 'string',
            description: 'The secret token for the robot.',
            readOnly: true
        }
    },
    required: ['token']
} as const;

export const InviteSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        status: {
            '$ref': '#/components/schemas/InviteStatus'
        },
        resourceType: {
            '$ref': '#/components/schemas/ResourceType'
        },
        resourceId: {
            type: 'string'
        },
        role: {
            type: 'string'
        },
        email: {
            type: 'string',
            description: `The email address of the invitee. Only present if the invite is still pending.
`
        },
        inviterType: {
            '$ref': '#/components/schemas/InviterType'
        },
        inviterId: {
            type: 'string',
            description: `The ID of the user or service that created the invite. Only present if the invite was created by a user.
`
        },
        inviteeId: {
            type: 'string',
            description: `The ID of the user that accepted the invite. Only present if the invite has been accepted.
`
        },
        createdAt: {
            type: 'string',
            format: 'date-time'
        },
        updatedAt: {
            type: 'string',
            format: 'date-time'
        }
    },
    required: ['id', 'status', 'resourceType', 'resourceId', 'role', 'inviterType', 'createdAt', 'updatedAt']
} as const;

export const InviteStatusSchema = {
    type: 'string',
    enum: ['pending', 'accepted', 'revoked']
} as const;

export const InviterTypeSchema = {
    type: 'string',
    enum: ['user', 'service']
} as const;

export const UserProfileSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        displayName: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        familyName: {
            type: 'string'
        },
        givenName: {
            type: 'string'
        },
        middleName: {
            type: 'string',
            nullable: true
        },
        imageUrl: {
            type: 'string',
            format: 'uri'
        },
        provider: {
            type: 'string'
        },
        tosAcceptedAt: {
            type: 'string',
            format: 'date-time'
        },
        createdAt: {
            type: 'string',
            format: 'date-time'
        },
        updatedAt: {
            type: 'string',
            format: 'date-time'
        },
        isCurrentUser: {
            type: 'boolean'
        },
        providerId: {
            type: 'string'
        }
    },
    required: ['id', 'displayName', 'email', 'provider', 'createdAt']
} as const;

export const RequestTypeSchema = {
    type: 'string',
    enum: ['access', 'role'],
    example: 'access',
    description: 'The type of request.'
} as const;

export const PaginatedResponseSchema = {
    type: 'object',
    properties: {
        data: {
            type: 'array',
            items: {
                type: 'object'
            }
        },
        nextCursor: {
            type: 'string',
            nullable: true,
            description: 'Cursor to get the next page of results, `null` if there are no more results.'
        }
    },
    required: ['data', 'nextCursor']
} as const;
import { api } from '../base';

const injectedRtkApi = api.injectEndpoints({
    endpoints: (build) => ({
        assistantsControllerGetAssistants: build.query<
            AssistantsControllerGetAssistantsApiResponse,
            AssistantsControllerGetAssistantsApiArg
        >({
            query: (queryArg) => ({
                url: `/api/assistants`,
                params: {
                    offset: queryArg.offset,
                    limit: queryArg.limit,
                    sortOrder: queryArg.sortOrder,
                    sortField: queryArg.sortField,
                    status: queryArg.status,
                },
            }),
        }),
        assistantsControllerCreateAgent: build.mutation<
            AssistantsControllerCreateAgentApiResponse,
            AssistantsControllerCreateAgentApiArg
        >({
            query: (queryArg) => ({
                url: `/api/assistants`,
                method: 'POST',
                body: queryArg.createAssistantDto,
            }),
        }),
        assistantsControllerGetAssistant: build.query<
            AssistantsControllerGetAssistantApiResponse,
            AssistantsControllerGetAssistantApiArg
        >({
            query: (queryArg) => ({ url: `/api/assistants/${queryArg.assistantId}` }),
        }),
        assistantsControllerUpdateAgent: build.mutation<
            AssistantsControllerUpdateAgentApiResponse,
            AssistantsControllerUpdateAgentApiArg
        >({
            query: (queryArg) => ({
                url: `/api/assistants/${queryArg.assistantId}`,
                method: 'PATCH',
                body: queryArg.updateAssistantDto,
            }),
        }),
        assistantsControllerDeleteAgent: build.mutation<
            AssistantsControllerDeleteAgentApiResponse,
            AssistantsControllerDeleteAgentApiArg
        >({
            query: (queryArg) => ({
                url: `/api/assistants/${queryArg.assistantId}`,
                method: 'DELETE',
            }),
        }),
        assistantsControllerVerifyDifyKey: build.mutation<
            AssistantsControllerVerifyDifyKeyApiResponse,
            AssistantsControllerVerifyDifyKeyApiArg
        >({
            query: (queryArg) => ({
                url: `/api/assistants/dify/verify`,
                method: 'POST',
                body: queryArg.verifyDifyKeyDto,
            }),
        }),
    }),
    overrideExisting: false,
});
export { injectedRtkApi as dpm };
export type AssistantsControllerGetAssistantsApiResponse =
    /** status 200 Assistants retrieved successfully */ GetAllAgentsResponse;
export type AssistantsControllerGetAssistantsApiArg = {
    offset: number;
    limit: number;
    sortOrder?: 'asc' | 'desc';
    sortField: string;
    status?: 'PUBLISHED' | 'DELETED' | 'DRAFT';
};
export type AssistantsControllerCreateAgentApiResponse = /** status 201 Assistant created successfully */ Assistant;
export type AssistantsControllerCreateAgentApiArg = {
    createAssistantDto: CreateAssistantDto;
};
export type AssistantsControllerGetAssistantApiResponse = /** status 200 Assistant retrieved successfully */ Assistant;
export type AssistantsControllerGetAssistantApiArg = {
    assistantId: string;
};
export type AssistantsControllerUpdateAgentApiResponse = /** status 200 Assistant updated successfully */ Assistant;
export type AssistantsControllerUpdateAgentApiArg = {
    assistantId: string;
    updateAssistantDto: UpdateAssistantDto;
};
export type AssistantsControllerDeleteAgentApiResponse = /** status 200 Assistant deleted successfully */ Assistant;
export type AssistantsControllerDeleteAgentApiArg = {
    assistantId: string;
};
export type AssistantsControllerVerifyDifyKeyApiResponse =
    /** status 200 Dify application exist */ VerifyDifyKeyResponse;
export type AssistantsControllerVerifyDifyKeyApiArg = {
    verifyDifyKeyDto: VerifyDifyKeyDto;
};
export type Epic = {
    /** Epic id */
    id: string;
    /** Epic name */
    title: string;
    /** Epic description */
    description: string;
    /** If epic has assistants assigned */
    hasAssistants: boolean;
    /** Epic creation time */
    createdAt: number;
    /** Epic update time */
    updatedAt: number;
};
export type Tag = {
    /** Tag id */
    id: string;
    /** Tag name */
    title: string;
    /** Tag description */
    description: string;
    /** Tag color */
    color: string;
    /** Tag creation time */
    createdAt: number;
    /** Tag update time */
    updatedAt: number;
};
export type Assistant = {
    /** Assistant id */
    id: string;
    /** Assistant name */
    name: string;
    /** Assistant description */
    description: string;
    /** Assistant creation time */
    createdAt: number;
    /** Assistant update time */
    updatedAt: number;
    /** Assistant status */
    status: 'PUBLISHED' | 'DELETED' | 'DRAFT';
    /** Assistant instruction */
    instruction: string;
    /** Epic assigned to assistant */
    epic: Epic;
    /** Tags assigned to assistant */
    tags: Tag[];
};
export type GetAllAgentsResponse = {
    /** Assistants list */
    items: Assistant[];
    /** Total count of assistants */
    totalCount: number;
};
export type TokenInvalidException = {
    /** String representation of the error */
    error: string;
    /** Meta information about the error */
    meta: object;
};
export type ApiError = {
    /** String represntation of the error */
    error: string;
    /** Additional metainformation for error handling. e.g validation failed fields */
    meta: object;
};
export type CreateAssistantDto = {
    /** Assistant's title */
    name: string;
    /** Description */
    description: string;
    /** Dify API key */
    difyKey: string;
};
export type UpdateAssistantDto = {
    /** Assistant's title */
    name: string;
    /** Description */
    description: string;
    /** Agent status */
    status: string;
    /** My assistant instruction */
    instruction: string;
    /** Epic ID assigned to assistant */
    epic: string;
    /** Array of Tag IDs assigned to assistant */
    tags: string[];
    /** New dify key */
    difyKey?: string;
};
export type VerifyDifyKeyResponse = {
    /** Is Dify key valid */
    isValid: boolean;
    /** Dify app name */
    name?: string;
    /** Dify app description */
    description?: string;
    /** Dify key tags */
    tags?: any[];
};
export type VerifyDifyKeyDto = {
    /** Dify API key */
    difyKey: string;
};
export const {
    useAssistantsControllerGetAssistantsQuery,
    useLazyAssistantsControllerGetAssistantsQuery,
    useAssistantsControllerCreateAgentMutation,
    useAssistantsControllerGetAssistantQuery,
    useLazyAssistantsControllerGetAssistantQuery,
    useAssistantsControllerUpdateAgentMutation,
    useAssistantsControllerDeleteAgentMutation,
    useAssistantsControllerVerifyDifyKeyMutation,
} = injectedRtkApi;

export declare class SnippetCreateManyInput {
    id?: number | undefined;
    title: string;
    language: string;
    code: string;
    description: string;
    framework?: string | undefined;
    resource?: string | undefined;
    private?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    ownerId?: number | undefined;
}

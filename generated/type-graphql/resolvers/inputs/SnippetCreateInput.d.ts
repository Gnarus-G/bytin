import { UserCreateNestedOneWithoutSnippetsInput } from "../inputs/UserCreateNestedOneWithoutSnippetsInput";
export declare class SnippetCreateInput {
    title: string;
    language: string;
    code: string;
    description: string;
    framework?: string | undefined;
    resource?: string | undefined;
    private?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    owner?: UserCreateNestedOneWithoutSnippetsInput | undefined;
}

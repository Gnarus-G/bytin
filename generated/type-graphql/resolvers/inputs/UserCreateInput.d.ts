import { SnippetCreateNestedManyWithoutOwnerInput } from "../inputs/SnippetCreateNestedManyWithoutOwnerInput";
export declare class UserCreateInput {
    name?: string | undefined;
    email?: string | undefined;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    snippets?: SnippetCreateNestedManyWithoutOwnerInput | undefined;
}

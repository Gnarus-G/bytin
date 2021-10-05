import { SnippetCreateManyOwnerInputEnvelope } from "../inputs/SnippetCreateManyOwnerInputEnvelope";
import { SnippetCreateOrConnectWithoutOwnerInput } from "../inputs/SnippetCreateOrConnectWithoutOwnerInput";
import { SnippetCreateWithoutOwnerInput } from "../inputs/SnippetCreateWithoutOwnerInput";
import { SnippetWhereUniqueInput } from "../inputs/SnippetWhereUniqueInput";
export declare class SnippetCreateNestedManyWithoutOwnerInput {
    create?: SnippetCreateWithoutOwnerInput[] | undefined;
    connectOrCreate?: SnippetCreateOrConnectWithoutOwnerInput[] | undefined;
    createMany?: SnippetCreateManyOwnerInputEnvelope | undefined;
    connect?: SnippetWhereUniqueInput[] | undefined;
}

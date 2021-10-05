import { SnippetCreateManyOwnerInputEnvelope } from "../inputs/SnippetCreateManyOwnerInputEnvelope";
import { SnippetCreateOrConnectWithoutOwnerInput } from "../inputs/SnippetCreateOrConnectWithoutOwnerInput";
import { SnippetCreateWithoutOwnerInput } from "../inputs/SnippetCreateWithoutOwnerInput";
import { SnippetScalarWhereInput } from "../inputs/SnippetScalarWhereInput";
import { SnippetUpdateManyWithWhereWithoutOwnerInput } from "../inputs/SnippetUpdateManyWithWhereWithoutOwnerInput";
import { SnippetUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/SnippetUpdateWithWhereUniqueWithoutOwnerInput";
import { SnippetUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/SnippetUpsertWithWhereUniqueWithoutOwnerInput";
import { SnippetWhereUniqueInput } from "../inputs/SnippetWhereUniqueInput";
export declare class SnippetUpdateManyWithoutOwnerInput {
    create?: SnippetCreateWithoutOwnerInput[] | undefined;
    connectOrCreate?: SnippetCreateOrConnectWithoutOwnerInput[] | undefined;
    upsert?: SnippetUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;
    createMany?: SnippetCreateManyOwnerInputEnvelope | undefined;
    connect?: SnippetWhereUniqueInput[] | undefined;
    set?: SnippetWhereUniqueInput[] | undefined;
    disconnect?: SnippetWhereUniqueInput[] | undefined;
    delete?: SnippetWhereUniqueInput[] | undefined;
    update?: SnippetUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;
    updateMany?: SnippetUpdateManyWithWhereWithoutOwnerInput[] | undefined;
    deleteMany?: SnippetScalarWhereInput[] | undefined;
}

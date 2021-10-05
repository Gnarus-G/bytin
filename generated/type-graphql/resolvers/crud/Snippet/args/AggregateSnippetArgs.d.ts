import { SnippetOrderByWithRelationInput } from "../../../inputs/SnippetOrderByWithRelationInput";
import { SnippetWhereInput } from "../../../inputs/SnippetWhereInput";
import { SnippetWhereUniqueInput } from "../../../inputs/SnippetWhereUniqueInput";
export declare class AggregateSnippetArgs {
    where?: SnippetWhereInput | undefined;
    orderBy?: SnippetOrderByWithRelationInput[] | undefined;
    cursor?: SnippetWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}

import { SnippetOrderByWithAggregationInput } from "../../../inputs/SnippetOrderByWithAggregationInput";
import { SnippetScalarWhereWithAggregatesInput } from "../../../inputs/SnippetScalarWhereWithAggregatesInput";
import { SnippetWhereInput } from "../../../inputs/SnippetWhereInput";
export declare class GroupBySnippetArgs {
    where?: SnippetWhereInput | undefined;
    orderBy?: SnippetOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "title" | "language" | "code" | "description" | "framework" | "resource" | "private" | "createdAt" | "updatedAt" | "ownerId">;
    having?: SnippetScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}

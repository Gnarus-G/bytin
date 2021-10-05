import { SnippetOrderByWithRelationInput } from "../../../inputs/SnippetOrderByWithRelationInput";
import { SnippetWhereInput } from "../../../inputs/SnippetWhereInput";
import { SnippetWhereUniqueInput } from "../../../inputs/SnippetWhereUniqueInput";
export declare class FindFirstSnippetArgs {
    where?: SnippetWhereInput | undefined;
    orderBy?: SnippetOrderByWithRelationInput[] | undefined;
    cursor?: SnippetWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "language" | "code" | "description" | "framework" | "resource" | "private" | "createdAt" | "updatedAt" | "ownerId"> | undefined;
}

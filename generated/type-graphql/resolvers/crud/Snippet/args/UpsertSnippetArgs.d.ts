import { SnippetCreateInput } from "../../../inputs/SnippetCreateInput";
import { SnippetUpdateInput } from "../../../inputs/SnippetUpdateInput";
import { SnippetWhereUniqueInput } from "../../../inputs/SnippetWhereUniqueInput";
export declare class UpsertSnippetArgs {
    where: SnippetWhereUniqueInput;
    create: SnippetCreateInput;
    update: SnippetUpdateInput;
}

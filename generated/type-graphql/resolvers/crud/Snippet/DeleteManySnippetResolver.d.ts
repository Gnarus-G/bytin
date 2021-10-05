import { GraphQLResolveInfo } from "graphql";
import { DeleteManySnippetArgs } from "./args/DeleteManySnippetArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySnippetResolver {
    deleteManySnippet(ctx: any, info: GraphQLResolveInfo, args: DeleteManySnippetArgs): Promise<AffectedRowsOutput>;
}

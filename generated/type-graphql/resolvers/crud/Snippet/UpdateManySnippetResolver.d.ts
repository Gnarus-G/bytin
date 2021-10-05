import { GraphQLResolveInfo } from "graphql";
import { UpdateManySnippetArgs } from "./args/UpdateManySnippetArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySnippetResolver {
    updateManySnippet(ctx: any, info: GraphQLResolveInfo, args: UpdateManySnippetArgs): Promise<AffectedRowsOutput>;
}

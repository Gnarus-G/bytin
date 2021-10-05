import { GraphQLResolveInfo } from "graphql";
import { CreateManySnippetArgs } from "./args/CreateManySnippetArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySnippetResolver {
    createManySnippet(ctx: any, info: GraphQLResolveInfo, args: CreateManySnippetArgs): Promise<AffectedRowsOutput>;
}

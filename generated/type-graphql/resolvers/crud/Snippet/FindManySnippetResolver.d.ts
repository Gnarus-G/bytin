import { GraphQLResolveInfo } from "graphql";
import { FindManySnippetArgs } from "./args/FindManySnippetArgs";
import { Snippet } from "../../../models/Snippet";
export declare class FindManySnippetResolver {
    snippets(ctx: any, info: GraphQLResolveInfo, args: FindManySnippetArgs): Promise<Snippet[]>;
}

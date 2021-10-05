import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSnippetArgs } from "./args/FindUniqueSnippetArgs";
import { Snippet } from "../../../models/Snippet";
export declare class FindUniqueSnippetResolver {
    snippet(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSnippetArgs): Promise<Snippet | null>;
}

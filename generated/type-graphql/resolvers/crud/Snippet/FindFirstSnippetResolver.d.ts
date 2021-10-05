import { GraphQLResolveInfo } from "graphql";
import { FindFirstSnippetArgs } from "./args/FindFirstSnippetArgs";
import { Snippet } from "../../../models/Snippet";
export declare class FindFirstSnippetResolver {
    findFirstSnippet(ctx: any, info: GraphQLResolveInfo, args: FindFirstSnippetArgs): Promise<Snippet | null>;
}

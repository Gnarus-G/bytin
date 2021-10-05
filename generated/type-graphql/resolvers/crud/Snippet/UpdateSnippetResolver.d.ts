import { GraphQLResolveInfo } from "graphql";
import { UpdateSnippetArgs } from "./args/UpdateSnippetArgs";
import { Snippet } from "../../../models/Snippet";
export declare class UpdateSnippetResolver {
    updateSnippet(ctx: any, info: GraphQLResolveInfo, args: UpdateSnippetArgs): Promise<Snippet | null>;
}

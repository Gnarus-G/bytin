import { GraphQLResolveInfo } from "graphql";
import { DeleteSnippetArgs } from "./args/DeleteSnippetArgs";
import { Snippet } from "../../../models/Snippet";
export declare class DeleteSnippetResolver {
    deleteSnippet(ctx: any, info: GraphQLResolveInfo, args: DeleteSnippetArgs): Promise<Snippet | null>;
}

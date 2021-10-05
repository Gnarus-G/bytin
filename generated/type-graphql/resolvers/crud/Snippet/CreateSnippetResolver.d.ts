import { GraphQLResolveInfo } from "graphql";
import { CreateSnippetArgs } from "./args/CreateSnippetArgs";
import { Snippet } from "../../../models/Snippet";
export declare class CreateSnippetResolver {
    createSnippet(ctx: any, info: GraphQLResolveInfo, args: CreateSnippetArgs): Promise<Snippet>;
}

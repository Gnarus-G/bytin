import { GraphQLResolveInfo } from "graphql";
import { UpsertSnippetArgs } from "./args/UpsertSnippetArgs";
import { Snippet } from "../../../models/Snippet";
export declare class UpsertSnippetResolver {
    upsertSnippet(ctx: any, info: GraphQLResolveInfo, args: UpsertSnippetArgs): Promise<Snippet>;
}

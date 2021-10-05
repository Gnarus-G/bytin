import { GraphQLResolveInfo } from "graphql";
import { GroupBySnippetArgs } from "./args/GroupBySnippetArgs";
import { SnippetGroupBy } from "../../outputs/SnippetGroupBy";
export declare class GroupBySnippetResolver {
    groupBySnippet(ctx: any, info: GraphQLResolveInfo, args: GroupBySnippetArgs): Promise<SnippetGroupBy[]>;
}

import { GraphQLResolveInfo } from "graphql";
import { AggregateSnippetArgs } from "./args/AggregateSnippetArgs";
import { AggregateSnippet } from "../../outputs/AggregateSnippet";
export declare class AggregateSnippetResolver {
    aggregateSnippet(ctx: any, info: GraphQLResolveInfo, args: AggregateSnippetArgs): Promise<AggregateSnippet>;
}

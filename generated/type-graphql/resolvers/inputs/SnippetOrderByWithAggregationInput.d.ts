import { SnippetAvgOrderByAggregateInput } from "../inputs/SnippetAvgOrderByAggregateInput";
import { SnippetCountOrderByAggregateInput } from "../inputs/SnippetCountOrderByAggregateInput";
import { SnippetMaxOrderByAggregateInput } from "../inputs/SnippetMaxOrderByAggregateInput";
import { SnippetMinOrderByAggregateInput } from "../inputs/SnippetMinOrderByAggregateInput";
import { SnippetSumOrderByAggregateInput } from "../inputs/SnippetSumOrderByAggregateInput";
export declare class SnippetOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    language?: "asc" | "desc" | undefined;
    code?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    framework?: "asc" | "desc" | undefined;
    resource?: "asc" | "desc" | undefined;
    private?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    ownerId?: "asc" | "desc" | undefined;
    _count?: SnippetCountOrderByAggregateInput | undefined;
    _avg?: SnippetAvgOrderByAggregateInput | undefined;
    _max?: SnippetMaxOrderByAggregateInput | undefined;
    _min?: SnippetMinOrderByAggregateInput | undefined;
    _sum?: SnippetSumOrderByAggregateInput | undefined;
}

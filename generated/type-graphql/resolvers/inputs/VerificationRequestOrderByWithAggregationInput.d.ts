import { VerificationRequestAvgOrderByAggregateInput } from "../inputs/VerificationRequestAvgOrderByAggregateInput";
import { VerificationRequestCountOrderByAggregateInput } from "../inputs/VerificationRequestCountOrderByAggregateInput";
import { VerificationRequestMaxOrderByAggregateInput } from "../inputs/VerificationRequestMaxOrderByAggregateInput";
import { VerificationRequestMinOrderByAggregateInput } from "../inputs/VerificationRequestMinOrderByAggregateInput";
import { VerificationRequestSumOrderByAggregateInput } from "../inputs/VerificationRequestSumOrderByAggregateInput";
export declare class VerificationRequestOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    identifier?: "asc" | "desc" | undefined;
    token?: "asc" | "desc" | undefined;
    expires?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: VerificationRequestCountOrderByAggregateInput | undefined;
    _avg?: VerificationRequestAvgOrderByAggregateInput | undefined;
    _max?: VerificationRequestMaxOrderByAggregateInput | undefined;
    _min?: VerificationRequestMinOrderByAggregateInput | undefined;
    _sum?: VerificationRequestSumOrderByAggregateInput | undefined;
}

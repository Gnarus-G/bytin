import { AccountAvgOrderByAggregateInput } from "../inputs/AccountAvgOrderByAggregateInput";
import { AccountCountOrderByAggregateInput } from "../inputs/AccountCountOrderByAggregateInput";
import { AccountMaxOrderByAggregateInput } from "../inputs/AccountMaxOrderByAggregateInput";
import { AccountMinOrderByAggregateInput } from "../inputs/AccountMinOrderByAggregateInput";
import { AccountSumOrderByAggregateInput } from "../inputs/AccountSumOrderByAggregateInput";
export declare class AccountOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    compoundId?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    providerType?: "asc" | "desc" | undefined;
    providerId?: "asc" | "desc" | undefined;
    providerAccountId?: "asc" | "desc" | undefined;
    refreshToken?: "asc" | "desc" | undefined;
    accessToken?: "asc" | "desc" | undefined;
    accessTokenExpires?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: AccountCountOrderByAggregateInput | undefined;
    _avg?: AccountAvgOrderByAggregateInput | undefined;
    _max?: AccountMaxOrderByAggregateInput | undefined;
    _min?: AccountMinOrderByAggregateInput | undefined;
    _sum?: AccountSumOrderByAggregateInput | undefined;
}

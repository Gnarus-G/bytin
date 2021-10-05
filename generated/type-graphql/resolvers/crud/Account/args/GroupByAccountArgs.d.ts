import { AccountOrderByWithAggregationInput } from "../../../inputs/AccountOrderByWithAggregationInput";
import { AccountScalarWhereWithAggregatesInput } from "../../../inputs/AccountScalarWhereWithAggregatesInput";
import { AccountWhereInput } from "../../../inputs/AccountWhereInput";
export declare class GroupByAccountArgs {
    where?: AccountWhereInput | undefined;
    orderBy?: AccountOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "compoundId" | "userId" | "providerType" | "providerId" | "providerAccountId" | "refreshToken" | "accessToken" | "accessTokenExpires" | "createdAt" | "updatedAt">;
    having?: AccountScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}

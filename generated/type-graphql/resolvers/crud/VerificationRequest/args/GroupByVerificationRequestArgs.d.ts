import { VerificationRequestOrderByWithAggregationInput } from "../../../inputs/VerificationRequestOrderByWithAggregationInput";
import { VerificationRequestScalarWhereWithAggregatesInput } from "../../../inputs/VerificationRequestScalarWhereWithAggregatesInput";
import { VerificationRequestWhereInput } from "../../../inputs/VerificationRequestWhereInput";
export declare class GroupByVerificationRequestArgs {
    where?: VerificationRequestWhereInput | undefined;
    orderBy?: VerificationRequestOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "identifier" | "token" | "expires" | "createdAt" | "updatedAt">;
    having?: VerificationRequestScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}

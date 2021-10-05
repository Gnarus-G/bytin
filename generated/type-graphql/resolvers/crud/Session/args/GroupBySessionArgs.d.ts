import { SessionOrderByWithAggregationInput } from "../../../inputs/SessionOrderByWithAggregationInput";
import { SessionScalarWhereWithAggregatesInput } from "../../../inputs/SessionScalarWhereWithAggregatesInput";
import { SessionWhereInput } from "../../../inputs/SessionWhereInput";
export declare class GroupBySessionArgs {
    where?: SessionWhereInput | undefined;
    orderBy?: SessionOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "userId" | "expires" | "sessionToken" | "accessToken" | "createdAt" | "updatedAt">;
    having?: SessionScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}

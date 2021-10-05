import { VerificationRequestOrderByWithRelationInput } from "../../../inputs/VerificationRequestOrderByWithRelationInput";
import { VerificationRequestWhereInput } from "../../../inputs/VerificationRequestWhereInput";
import { VerificationRequestWhereUniqueInput } from "../../../inputs/VerificationRequestWhereUniqueInput";
export declare class AggregateVerificationRequestArgs {
    where?: VerificationRequestWhereInput | undefined;
    orderBy?: VerificationRequestOrderByWithRelationInput[] | undefined;
    cursor?: VerificationRequestWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}

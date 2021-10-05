import { VerificationRequestAvgAggregate } from "../outputs/VerificationRequestAvgAggregate";
import { VerificationRequestCountAggregate } from "../outputs/VerificationRequestCountAggregate";
import { VerificationRequestMaxAggregate } from "../outputs/VerificationRequestMaxAggregate";
import { VerificationRequestMinAggregate } from "../outputs/VerificationRequestMinAggregate";
import { VerificationRequestSumAggregate } from "../outputs/VerificationRequestSumAggregate";
export declare class VerificationRequestGroupBy {
    id: number;
    identifier: string;
    token: string;
    expires: Date;
    createdAt: Date;
    updatedAt: Date;
    _count: VerificationRequestCountAggregate | null;
    _avg: VerificationRequestAvgAggregate | null;
    _sum: VerificationRequestSumAggregate | null;
    _min: VerificationRequestMinAggregate | null;
    _max: VerificationRequestMaxAggregate | null;
}

import { AccountAvgAggregate } from "../outputs/AccountAvgAggregate";
import { AccountCountAggregate } from "../outputs/AccountCountAggregate";
import { AccountMaxAggregate } from "../outputs/AccountMaxAggregate";
import { AccountMinAggregate } from "../outputs/AccountMinAggregate";
import { AccountSumAggregate } from "../outputs/AccountSumAggregate";
export declare class AccountGroupBy {
    id: number;
    compoundId: string;
    userId: number;
    providerType: string;
    providerId: string;
    providerAccountId: string;
    refreshToken: string | null;
    accessToken: string | null;
    accessTokenExpires: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: AccountCountAggregate | null;
    _avg: AccountAvgAggregate | null;
    _sum: AccountSumAggregate | null;
    _min: AccountMinAggregate | null;
    _max: AccountMaxAggregate | null;
}

import { SnippetAvgAggregate } from "../outputs/SnippetAvgAggregate";
import { SnippetCountAggregate } from "../outputs/SnippetCountAggregate";
import { SnippetMaxAggregate } from "../outputs/SnippetMaxAggregate";
import { SnippetMinAggregate } from "../outputs/SnippetMinAggregate";
import { SnippetSumAggregate } from "../outputs/SnippetSumAggregate";
export declare class SnippetGroupBy {
    id: number;
    title: string;
    language: string;
    code: string;
    description: string;
    framework: string | null;
    resource: string | null;
    private: boolean;
    createdAt: Date;
    updatedAt: Date;
    ownerId: number | null;
    _count: SnippetCountAggregate | null;
    _avg: SnippetAvgAggregate | null;
    _sum: SnippetSumAggregate | null;
    _min: SnippetMinAggregate | null;
    _max: SnippetMaxAggregate | null;
}

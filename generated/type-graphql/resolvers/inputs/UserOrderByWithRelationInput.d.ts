import { SnippetOrderByRelationAggregateInput } from "../inputs/SnippetOrderByRelationAggregateInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    emailVerified?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    snippets?: SnippetOrderByRelationAggregateInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}

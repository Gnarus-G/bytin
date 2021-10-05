import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class SnippetOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    language?: "asc" | "desc" | undefined;
    code?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    framework?: "asc" | "desc" | undefined;
    resource?: "asc" | "desc" | undefined;
    private?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    owner?: UserOrderByWithRelationInput | undefined;
    ownerId?: "asc" | "desc" | undefined;
}

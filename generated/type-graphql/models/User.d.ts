import { Snippet } from "../models/Snippet";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: number;
    name?: string | null;
    email?: string | null;
    emailVerified?: Date | null;
    image?: string | null;
    snippets?: Snippet[];
    createdAt: Date;
    updatedAt: Date;
    _count?: UserCount | null;
}

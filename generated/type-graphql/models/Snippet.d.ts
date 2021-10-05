import { User } from "../models/User";
export declare class Snippet {
    id: number;
    title: string;
    language: string;
    code: string;
    description: string;
    framework?: string | null;
    resource?: string | null;
    private: boolean;
    createdAt: Date;
    updatedAt: Date;
    owner?: User | null;
    ownerId?: number | null;
}

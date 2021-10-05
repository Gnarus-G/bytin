import { Snippet } from "../../../models/Snippet";
import { User } from "../../../models/User";
export declare class SnippetRelationsResolver {
    owner(snippet: Snippet, ctx: any): Promise<User | null>;
}

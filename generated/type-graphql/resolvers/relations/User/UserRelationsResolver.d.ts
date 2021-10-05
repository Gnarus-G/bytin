import { Snippet } from "../../../models/Snippet";
import { User } from "../../../models/User";
import { UserSnippetsArgs } from "./args/UserSnippetsArgs";
export declare class UserRelationsResolver {
    snippets(user: User, ctx: any, args: UserSnippetsArgs): Promise<Snippet[]>;
}

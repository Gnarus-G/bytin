import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class SessionWhereInput {
    AND?: SessionWhereInput[] | undefined;
    OR?: SessionWhereInput[] | undefined;
    NOT?: SessionWhereInput[] | undefined;
    id?: IntFilter | undefined;
    userId?: IntFilter | undefined;
    expires?: DateTimeFilter | undefined;
    sessionToken?: StringFilter | undefined;
    accessToken?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}

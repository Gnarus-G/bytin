import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class SessionScalarWhereWithAggregatesInput {
    AND?: SessionScalarWhereWithAggregatesInput[] | undefined;
    OR?: SessionScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SessionScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    userId?: IntWithAggregatesFilter | undefined;
    expires?: DateTimeWithAggregatesFilter | undefined;
    sessionToken?: StringWithAggregatesFilter | undefined;
    accessToken?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}

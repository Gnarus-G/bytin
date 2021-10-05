import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class SnippetScalarWhereWithAggregatesInput {
    AND?: SnippetScalarWhereWithAggregatesInput[] | undefined;
    OR?: SnippetScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SnippetScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    language?: StringWithAggregatesFilter | undefined;
    code?: StringWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    framework?: StringNullableWithAggregatesFilter | undefined;
    resource?: StringNullableWithAggregatesFilter | undefined;
    private?: BoolWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    ownerId?: IntNullableWithAggregatesFilter | undefined;
}

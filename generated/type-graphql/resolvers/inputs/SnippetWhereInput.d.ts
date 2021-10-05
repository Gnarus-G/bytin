import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class SnippetWhereInput {
    AND?: SnippetWhereInput[] | undefined;
    OR?: SnippetWhereInput[] | undefined;
    NOT?: SnippetWhereInput[] | undefined;
    id?: IntFilter | undefined;
    title?: StringFilter | undefined;
    language?: StringFilter | undefined;
    code?: StringFilter | undefined;
    description?: StringFilter | undefined;
    framework?: StringNullableFilter | undefined;
    resource?: StringNullableFilter | undefined;
    private?: BoolFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    owner?: UserRelationFilter | undefined;
    ownerId?: IntNullableFilter | undefined;
}

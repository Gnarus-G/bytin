import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class AccountWhereInput {
    AND?: AccountWhereInput[] | undefined;
    OR?: AccountWhereInput[] | undefined;
    NOT?: AccountWhereInput[] | undefined;
    id?: IntFilter | undefined;
    compoundId?: StringFilter | undefined;
    userId?: IntFilter | undefined;
    providerType?: StringFilter | undefined;
    providerId?: StringFilter | undefined;
    providerAccountId?: StringFilter | undefined;
    refreshToken?: StringNullableFilter | undefined;
    accessToken?: StringNullableFilter | undefined;
    accessTokenExpires?: DateTimeNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}

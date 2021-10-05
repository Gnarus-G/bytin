import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class VerificationRequestWhereInput {
    AND?: VerificationRequestWhereInput[] | undefined;
    OR?: VerificationRequestWhereInput[] | undefined;
    NOT?: VerificationRequestWhereInput[] | undefined;
    id?: IntFilter | undefined;
    identifier?: StringFilter | undefined;
    token?: StringFilter | undefined;
    expires?: DateTimeFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}

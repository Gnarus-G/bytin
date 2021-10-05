import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class AccountUpdateManyMutationInput {
    compoundId?: StringFieldUpdateOperationsInput | undefined;
    userId?: IntFieldUpdateOperationsInput | undefined;
    providerType?: StringFieldUpdateOperationsInput | undefined;
    providerId?: StringFieldUpdateOperationsInput | undefined;
    providerAccountId?: StringFieldUpdateOperationsInput | undefined;
    refreshToken?: NullableStringFieldUpdateOperationsInput | undefined;
    accessToken?: NullableStringFieldUpdateOperationsInput | undefined;
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}

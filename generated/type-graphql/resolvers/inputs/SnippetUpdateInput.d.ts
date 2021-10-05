import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutSnippetsInput } from "../inputs/UserUpdateOneWithoutSnippetsInput";
export declare class SnippetUpdateInput {
    title?: StringFieldUpdateOperationsInput | undefined;
    language?: StringFieldUpdateOperationsInput | undefined;
    code?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    framework?: NullableStringFieldUpdateOperationsInput | undefined;
    resource?: NullableStringFieldUpdateOperationsInput | undefined;
    private?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    owner?: UserUpdateOneWithoutSnippetsInput | undefined;
}

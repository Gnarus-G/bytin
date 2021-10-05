import { UserCreateOrConnectWithoutSnippetsInput } from "../inputs/UserCreateOrConnectWithoutSnippetsInput";
import { UserCreateWithoutSnippetsInput } from "../inputs/UserCreateWithoutSnippetsInput";
import { UserUpdateWithoutSnippetsInput } from "../inputs/UserUpdateWithoutSnippetsInput";
import { UserUpsertWithoutSnippetsInput } from "../inputs/UserUpsertWithoutSnippetsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutSnippetsInput {
    create?: UserCreateWithoutSnippetsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutSnippetsInput | undefined;
    upsert?: UserUpsertWithoutSnippetsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: UserUpdateWithoutSnippetsInput | undefined;
}

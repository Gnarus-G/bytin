import { UserCreateOrConnectWithoutSnippetsInput } from "../inputs/UserCreateOrConnectWithoutSnippetsInput";
import { UserCreateWithoutSnippetsInput } from "../inputs/UserCreateWithoutSnippetsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutSnippetsInput {
    create?: UserCreateWithoutSnippetsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutSnippetsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}

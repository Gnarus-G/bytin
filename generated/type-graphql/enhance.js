"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyArgsTypesEnhanceMap = exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const crudResolvers = __importStar(require("./resolvers/crud/resolvers-crud.index"));
const actionResolvers = __importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = __importStar(require("./resolvers/relations/resolvers.index"));
const models = __importStar(require("./models"));
const outputTypes = __importStar(require("./resolvers/outputs"));
const inputTypes = __importStar(require("./resolvers/inputs"));
const argsTypes = __importStar(require("./resolvers/crud/args.index"));
const crudResolversMap = {
    Account: crudResolvers.AccountCrudResolver,
    Session: crudResolvers.SessionCrudResolver,
    User: crudResolvers.UserCrudResolver,
    VerificationRequest: crudResolvers.VerificationRequestCrudResolver,
    Snippet: crudResolvers.SnippetCrudResolver
};
const relationResolversMap = {
    User: relationResolvers.UserRelationsResolver,
    Snippet: relationResolvers.SnippetRelationsResolver
};
const actionResolversMap = {
    Account: {
        account: actionResolvers.FindUniqueAccountResolver,
        findFirstAccount: actionResolvers.FindFirstAccountResolver,
        accounts: actionResolvers.FindManyAccountResolver,
        createAccount: actionResolvers.CreateAccountResolver,
        createManyAccount: actionResolvers.CreateManyAccountResolver,
        deleteAccount: actionResolvers.DeleteAccountResolver,
        updateAccount: actionResolvers.UpdateAccountResolver,
        deleteManyAccount: actionResolvers.DeleteManyAccountResolver,
        updateManyAccount: actionResolvers.UpdateManyAccountResolver,
        upsertAccount: actionResolvers.UpsertAccountResolver,
        aggregateAccount: actionResolvers.AggregateAccountResolver,
        groupByAccount: actionResolvers.GroupByAccountResolver
    },
    Session: {
        session: actionResolvers.FindUniqueSessionResolver,
        findFirstSession: actionResolvers.FindFirstSessionResolver,
        sessions: actionResolvers.FindManySessionResolver,
        createSession: actionResolvers.CreateSessionResolver,
        createManySession: actionResolvers.CreateManySessionResolver,
        deleteSession: actionResolvers.DeleteSessionResolver,
        updateSession: actionResolvers.UpdateSessionResolver,
        deleteManySession: actionResolvers.DeleteManySessionResolver,
        updateManySession: actionResolvers.UpdateManySessionResolver,
        upsertSession: actionResolvers.UpsertSessionResolver,
        aggregateSession: actionResolvers.AggregateSessionResolver,
        groupBySession: actionResolvers.GroupBySessionResolver
    },
    User: {
        user: actionResolvers.FindUniqueUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        users: actionResolvers.FindManyUserResolver,
        createUser: actionResolvers.CreateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        deleteUser: actionResolvers.DeleteUserResolver,
        updateUser: actionResolvers.UpdateUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        upsertUser: actionResolvers.UpsertUserResolver,
        aggregateUser: actionResolvers.AggregateUserResolver,
        groupByUser: actionResolvers.GroupByUserResolver
    },
    VerificationRequest: {
        verificationRequest: actionResolvers.FindUniqueVerificationRequestResolver,
        findFirstVerificationRequest: actionResolvers.FindFirstVerificationRequestResolver,
        verificationRequests: actionResolvers.FindManyVerificationRequestResolver,
        createVerificationRequest: actionResolvers.CreateVerificationRequestResolver,
        createManyVerificationRequest: actionResolvers.CreateManyVerificationRequestResolver,
        deleteVerificationRequest: actionResolvers.DeleteVerificationRequestResolver,
        updateVerificationRequest: actionResolvers.UpdateVerificationRequestResolver,
        deleteManyVerificationRequest: actionResolvers.DeleteManyVerificationRequestResolver,
        updateManyVerificationRequest: actionResolvers.UpdateManyVerificationRequestResolver,
        upsertVerificationRequest: actionResolvers.UpsertVerificationRequestResolver,
        aggregateVerificationRequest: actionResolvers.AggregateVerificationRequestResolver,
        groupByVerificationRequest: actionResolvers.GroupByVerificationRequestResolver
    },
    Snippet: {
        snippet: actionResolvers.FindUniqueSnippetResolver,
        findFirstSnippet: actionResolvers.FindFirstSnippetResolver,
        snippets: actionResolvers.FindManySnippetResolver,
        createSnippet: actionResolvers.CreateSnippetResolver,
        createManySnippet: actionResolvers.CreateManySnippetResolver,
        deleteSnippet: actionResolvers.DeleteSnippetResolver,
        updateSnippet: actionResolvers.UpdateSnippetResolver,
        deleteManySnippet: actionResolvers.DeleteManySnippetResolver,
        updateManySnippet: actionResolvers.UpdateManySnippetResolver,
        upsertSnippet: actionResolvers.UpsertSnippetResolver,
        aggregateSnippet: actionResolvers.AggregateSnippetResolver,
        groupBySnippet: actionResolvers.GroupBySnippetResolver
    }
};
const resolversInfo = {
    Account: ["account", "findFirstAccount", "accounts", "createAccount", "createManyAccount", "deleteAccount", "updateAccount", "deleteManyAccount", "updateManyAccount", "upsertAccount", "aggregateAccount", "groupByAccount"],
    Session: ["session", "findFirstSession", "sessions", "createSession", "createManySession", "deleteSession", "updateSession", "deleteManySession", "updateManySession", "upsertSession", "aggregateSession", "groupBySession"],
    User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
    VerificationRequest: ["verificationRequest", "findFirstVerificationRequest", "verificationRequests", "createVerificationRequest", "createManyVerificationRequest", "deleteVerificationRequest", "updateVerificationRequest", "deleteManyVerificationRequest", "updateManyVerificationRequest", "upsertVerificationRequest", "aggregateVerificationRequest", "groupByVerificationRequest"],
    Snippet: ["snippet", "findFirstSnippet", "snippets", "createSnippet", "createManySnippet", "deleteSnippet", "updateSnippet", "deleteManySnippet", "updateManySnippet", "upsertSnippet", "aggregateSnippet", "groupBySnippet"]
};
const relationResolversInfo = {
    User: ["snippets"],
    Snippet: ["owner"]
};
const modelsInfo = {
    Account: ["id", "compoundId", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    Session: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    User: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt"],
    VerificationRequest: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    Snippet: ["id", "title", "language", "code", "description", "framework", "resource", "private", "createdAt", "updatedAt", "ownerId"]
};
const inputsInfo = {
    AccountWhereInput: ["AND", "OR", "NOT", "id", "compoundId", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    AccountOrderByWithRelationInput: ["id", "compoundId", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    AccountWhereUniqueInput: ["id", "compoundId"],
    AccountOrderByWithAggregationInput: ["id", "compoundId", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
    AccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "compoundId", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    SessionWhereInput: ["AND", "OR", "NOT", "id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    SessionOrderByWithRelationInput: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    SessionWhereUniqueInput: ["id", "sessionToken", "accessToken"],
    SessionOrderByWithAggregationInput: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
    SessionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image", "snippets", "createdAt", "updatedAt"],
    UserOrderByWithRelationInput: ["id", "name", "email", "emailVerified", "image", "snippets", "createdAt", "updatedAt"],
    UserWhereUniqueInput: ["id", "email"],
    UserOrderByWithAggregationInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt"],
    VerificationRequestWhereInput: ["AND", "OR", "NOT", "id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    VerificationRequestOrderByWithRelationInput: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    VerificationRequestWhereUniqueInput: ["id", "token"],
    VerificationRequestOrderByWithAggregationInput: ["id", "identifier", "token", "expires", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
    VerificationRequestScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    SnippetWhereInput: ["AND", "OR", "NOT", "id", "title", "language", "code", "description", "framework", "resource", "private", "createdAt", "updatedAt", "owner", "ownerId"],
    SnippetOrderByWithRelationInput: ["id", "title", "language", "code", "description", "framework", "resource", "private", "createdAt", "updatedAt", "owner", "ownerId"],
    SnippetWhereUniqueInput: ["id"],
    SnippetOrderByWithAggregationInput: ["id", "title", "language", "code", "description", "framework", "resource", "private", "createdAt", "updatedAt", "ownerId", "_count", "_avg", "_max", "_min", "_sum"],
    SnippetScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "language", "code", "description", "framework", "resource", "private", "createdAt", "updatedAt", "ownerId"],
    AccountCreateInput: ["compoundId", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    AccountUpdateInput: ["compoundId", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    AccountCreateManyInput: ["id", "compoundId", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    AccountUpdateManyMutationInput: ["compoundId", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    SessionCreateInput: ["userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    SessionUpdateInput: ["userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    SessionCreateManyInput: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    SessionUpdateManyMutationInput: ["userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    UserCreateInput: ["name", "email", "emailVerified", "image", "createdAt", "updatedAt", "snippets"],
    UserUpdateInput: ["name", "email", "emailVerified", "image", "createdAt", "updatedAt", "snippets"],
    UserCreateManyInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt"],
    UserUpdateManyMutationInput: ["name", "email", "emailVerified", "image", "createdAt", "updatedAt"],
    VerificationRequestCreateInput: ["identifier", "token", "expires", "createdAt", "updatedAt"],
    VerificationRequestUpdateInput: ["identifier", "token", "expires", "createdAt", "updatedAt"],
    VerificationRequestCreateManyInput: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    VerificationRequestUpdateManyMutationInput: ["identifier", "token", "expires", "createdAt", "updatedAt"],
    SnippetCreateInput: ["title", "language", "code", "description", "framework", "resource", "private", "createdAt", "updatedAt", "owner"],
    SnippetUpdateInput: ["title", "language", "code", "description", "framework", "resource", "private", "createdAt", "updatedAt", "owner"],
    SnippetCreateManyInput: ["id", "title", "language", "code", "description", "framework", "resource", "private", "createdAt", "updatedAt", "ownerId"],
    SnippetUpdateManyMutationInput: ["title", "language", "code", "description", "framework", "resource", "private", "createdAt", "updatedAt"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    AccountCountOrderByAggregateInput: ["id", "compoundId", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    AccountAvgOrderByAggregateInput: ["id", "userId"],
    AccountMaxOrderByAggregateInput: ["id", "compoundId", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    AccountMinOrderByAggregateInput: ["id", "compoundId", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    AccountSumOrderByAggregateInput: ["id", "userId"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    SessionCountOrderByAggregateInput: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    SessionAvgOrderByAggregateInput: ["id", "userId"],
    SessionMaxOrderByAggregateInput: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    SessionMinOrderByAggregateInput: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    SessionSumOrderByAggregateInput: ["id", "userId"],
    SnippetListRelationFilter: ["every", "some", "none"],
    SnippetOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt"],
    UserAvgOrderByAggregateInput: ["id"],
    UserMaxOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt"],
    UserMinOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt"],
    UserSumOrderByAggregateInput: ["id"],
    VerificationRequestCountOrderByAggregateInput: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    VerificationRequestAvgOrderByAggregateInput: ["id"],
    VerificationRequestMaxOrderByAggregateInput: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    VerificationRequestMinOrderByAggregateInput: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    VerificationRequestSumOrderByAggregateInput: ["id"],
    BoolFilter: ["equals", "not"],
    UserRelationFilter: ["is", "isNot"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    SnippetCountOrderByAggregateInput: ["id", "title", "language", "code", "description", "framework", "resource", "private", "createdAt", "updatedAt", "ownerId"],
    SnippetAvgOrderByAggregateInput: ["id", "ownerId"],
    SnippetMaxOrderByAggregateInput: ["id", "title", "language", "code", "description", "framework", "resource", "private", "createdAt", "updatedAt", "ownerId"],
    SnippetMinOrderByAggregateInput: ["id", "title", "language", "code", "description", "framework", "resource", "private", "createdAt", "updatedAt", "ownerId"],
    SnippetSumOrderByAggregateInput: ["id", "ownerId"],
    BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringFieldUpdateOperationsInput: ["set"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    SnippetCreateNestedManyWithoutOwnerInput: ["create", "connectOrCreate", "createMany", "connect"],
    SnippetUpdateManyWithoutOwnerInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    UserCreateNestedOneWithoutSnippetsInput: ["create", "connectOrCreate", "connect"],
    BoolFieldUpdateOperationsInput: ["set"],
    UserUpdateOneWithoutSnippetsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedBoolFilter: ["equals", "not"],
    NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    SnippetCreateWithoutOwnerInput: ["title", "language", "code", "description", "framework", "resource", "private", "createdAt", "updatedAt"],
    SnippetCreateOrConnectWithoutOwnerInput: ["where", "create"],
    SnippetCreateManyOwnerInputEnvelope: ["data", "skipDuplicates"],
    SnippetUpsertWithWhereUniqueWithoutOwnerInput: ["where", "update", "create"],
    SnippetUpdateWithWhereUniqueWithoutOwnerInput: ["where", "data"],
    SnippetUpdateManyWithWhereWithoutOwnerInput: ["where", "data"],
    SnippetScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "language", "code", "description", "framework", "resource", "private", "createdAt", "updatedAt", "ownerId"],
    UserCreateWithoutSnippetsInput: ["name", "email", "emailVerified", "image", "createdAt", "updatedAt"],
    UserCreateOrConnectWithoutSnippetsInput: ["where", "create"],
    UserUpsertWithoutSnippetsInput: ["update", "create"],
    UserUpdateWithoutSnippetsInput: ["name", "email", "emailVerified", "image", "createdAt", "updatedAt"],
    SnippetCreateManyOwnerInput: ["id", "title", "language", "code", "description", "framework", "resource", "private", "createdAt", "updatedAt"],
    SnippetUpdateWithoutOwnerInput: ["title", "language", "code", "description", "framework", "resource", "private", "createdAt", "updatedAt"]
};
const outputsInfo = {
    AggregateAccount: ["_count", "_avg", "_sum", "_min", "_max"],
    AccountGroupBy: ["id", "compoundId", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateSession: ["_count", "_avg", "_sum", "_min", "_max"],
    SessionGroupBy: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
    UserGroupBy: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateVerificationRequest: ["_count", "_avg", "_sum", "_min", "_max"],
    VerificationRequestGroupBy: ["id", "identifier", "token", "expires", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateSnippet: ["_count", "_avg", "_sum", "_min", "_max"],
    SnippetGroupBy: ["id", "title", "language", "code", "description", "framework", "resource", "private", "createdAt", "updatedAt", "ownerId", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    AccountCountAggregate: ["id", "compoundId", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt", "_all"],
    AccountAvgAggregate: ["id", "userId"],
    AccountSumAggregate: ["id", "userId"],
    AccountMinAggregate: ["id", "compoundId", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    AccountMaxAggregate: ["id", "compoundId", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    SessionCountAggregate: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt", "_all"],
    SessionAvgAggregate: ["id", "userId"],
    SessionSumAggregate: ["id", "userId"],
    SessionMinAggregate: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    SessionMaxAggregate: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    UserCount: ["snippets"],
    UserCountAggregate: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "_all"],
    UserAvgAggregate: ["id"],
    UserSumAggregate: ["id"],
    UserMinAggregate: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt"],
    UserMaxAggregate: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt"],
    VerificationRequestCountAggregate: ["id", "identifier", "token", "expires", "createdAt", "updatedAt", "_all"],
    VerificationRequestAvgAggregate: ["id"],
    VerificationRequestSumAggregate: ["id"],
    VerificationRequestMinAggregate: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    VerificationRequestMaxAggregate: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    SnippetCountAggregate: ["id", "title", "language", "code", "description", "framework", "resource", "private", "createdAt", "updatedAt", "ownerId", "_all"],
    SnippetAvgAggregate: ["id", "ownerId"],
    SnippetSumAggregate: ["id", "ownerId"],
    SnippetMinAggregate: ["id", "title", "language", "code", "description", "framework", "resource", "private", "createdAt", "updatedAt", "ownerId"],
    SnippetMaxAggregate: ["id", "title", "language", "code", "description", "framework", "resource", "private", "createdAt", "updatedAt", "ownerId"]
};
const argsInfo = {
    FindUniqueAccountArgs: ["where"],
    FindFirstAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateAccountArgs: ["data"],
    CreateManyAccountArgs: ["data", "skipDuplicates"],
    DeleteAccountArgs: ["where"],
    UpdateAccountArgs: ["data", "where"],
    DeleteManyAccountArgs: ["where"],
    UpdateManyAccountArgs: ["data", "where"],
    UpsertAccountArgs: ["where", "create", "update"],
    AggregateAccountArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByAccountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueSessionArgs: ["where"],
    FindFirstSessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManySessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateSessionArgs: ["data"],
    CreateManySessionArgs: ["data", "skipDuplicates"],
    DeleteSessionArgs: ["where"],
    UpdateSessionArgs: ["data", "where"],
    DeleteManySessionArgs: ["where"],
    UpdateManySessionArgs: ["data", "where"],
    UpsertSessionArgs: ["where", "create", "update"],
    AggregateSessionArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupBySessionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateUserArgs: ["data"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    DeleteUserArgs: ["where"],
    UpdateUserArgs: ["data", "where"],
    DeleteManyUserArgs: ["where"],
    UpdateManyUserArgs: ["data", "where"],
    UpsertUserArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueVerificationRequestArgs: ["where"],
    FindFirstVerificationRequestArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyVerificationRequestArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateVerificationRequestArgs: ["data"],
    CreateManyVerificationRequestArgs: ["data", "skipDuplicates"],
    DeleteVerificationRequestArgs: ["where"],
    UpdateVerificationRequestArgs: ["data", "where"],
    DeleteManyVerificationRequestArgs: ["where"],
    UpdateManyVerificationRequestArgs: ["data", "where"],
    UpsertVerificationRequestArgs: ["where", "create", "update"],
    AggregateVerificationRequestArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByVerificationRequestArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueSnippetArgs: ["where"],
    FindFirstSnippetArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManySnippetArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateSnippetArgs: ["data"],
    CreateManySnippetArgs: ["data", "skipDuplicates"],
    DeleteSnippetArgs: ["where"],
    UpdateSnippetArgs: ["data", "where"],
    DeleteManySnippetArgs: ["where"],
    UpdateManySnippetArgs: ["data", "where"],
    UpsertSnippetArgs: ["where", "create", "update"],
    AggregateSnippetArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupBySnippetArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = resolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                for (const allActionsDecorator of allActionsDecorators) {
                    allActionsDecorator(crudTarget, resolverActionName, Object.getOwnPropertyDescriptor(crudTarget, resolverActionName));
                    allActionsDecorator(actionTarget, resolverActionName, Object.getOwnPropertyDescriptor(actionTarget, resolverActionName));
                }
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            for (const decorator of decorators) {
                decorator(crudTarget, resolverActionName, Object.getOwnPropertyDescriptor(crudTarget, resolverActionName));
                decorator(actionTarget, resolverActionName, Object.getOwnPropertyDescriptor(actionTarget, resolverActionName));
            }
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                for (const allActionsDecorator of allActionsDecorators) {
                    allActionsDecorator(relationResolverTarget, relationResolverActionName, Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName));
                }
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            for (const decorator of decorators) {
                decorator(relationResolverTarget, relationResolverActionName, Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName));
            }
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        for (const decorator of enhanceConfig.class) {
            decorator(typeClass);
        }
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                for (const allFieldsDecorator of allFieldsDecorators) {
                    allFieldsDecorator(typePrototype, typeFieldName);
                }
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            for (const fieldDecorator of fieldDecorators) {
                fieldDecorator(typePrototype, typeFieldName);
            }
        }
    }
}
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;

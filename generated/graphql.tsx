import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Account = {
  __typename?: 'Account';
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExpires?: Maybe<Scalars['DateTime']>;
  compoundId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  providerAccountId: Scalars['String'];
  providerId: Scalars['String'];
  providerType: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Int'];
};

export type AccountAvgAggregate = {
  __typename?: 'AccountAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type AccountAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type AccountCountAggregate = {
  __typename?: 'AccountCountAggregate';
  _all: Scalars['Int'];
  accessToken: Scalars['Int'];
  accessTokenExpires: Scalars['Int'];
  compoundId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  providerAccountId: Scalars['Int'];
  providerId: Scalars['Int'];
  providerType: Scalars['Int'];
  refreshToken: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type AccountCountOrderByAggregateInput = {
  accessToken?: Maybe<SortOrder>;
  accessTokenExpires?: Maybe<SortOrder>;
  compoundId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  providerAccountId?: Maybe<SortOrder>;
  providerId?: Maybe<SortOrder>;
  providerType?: Maybe<SortOrder>;
  refreshToken?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type AccountCreateInput = {
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExpires?: Maybe<Scalars['DateTime']>;
  compoundId: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  providerAccountId: Scalars['String'];
  providerId: Scalars['String'];
  providerType: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type AccountCreateManyInput = {
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExpires?: Maybe<Scalars['DateTime']>;
  compoundId: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  providerAccountId: Scalars['String'];
  providerId: Scalars['String'];
  providerType: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type AccountGroupBy = {
  __typename?: 'AccountGroupBy';
  _avg?: Maybe<AccountAvgAggregate>;
  _count?: Maybe<AccountCountAggregate>;
  _max?: Maybe<AccountMaxAggregate>;
  _min?: Maybe<AccountMinAggregate>;
  _sum?: Maybe<AccountSumAggregate>;
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExpires?: Maybe<Scalars['DateTime']>;
  compoundId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  providerAccountId: Scalars['String'];
  providerId: Scalars['String'];
  providerType: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Int'];
};

export type AccountMaxAggregate = {
  __typename?: 'AccountMaxAggregate';
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExpires?: Maybe<Scalars['DateTime']>;
  compoundId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  providerAccountId?: Maybe<Scalars['String']>;
  providerId?: Maybe<Scalars['String']>;
  providerType?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type AccountMaxOrderByAggregateInput = {
  accessToken?: Maybe<SortOrder>;
  accessTokenExpires?: Maybe<SortOrder>;
  compoundId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  providerAccountId?: Maybe<SortOrder>;
  providerId?: Maybe<SortOrder>;
  providerType?: Maybe<SortOrder>;
  refreshToken?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type AccountMinAggregate = {
  __typename?: 'AccountMinAggregate';
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExpires?: Maybe<Scalars['DateTime']>;
  compoundId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  providerAccountId?: Maybe<Scalars['String']>;
  providerId?: Maybe<Scalars['String']>;
  providerType?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type AccountMinOrderByAggregateInput = {
  accessToken?: Maybe<SortOrder>;
  accessTokenExpires?: Maybe<SortOrder>;
  compoundId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  providerAccountId?: Maybe<SortOrder>;
  providerId?: Maybe<SortOrder>;
  providerType?: Maybe<SortOrder>;
  refreshToken?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type AccountOrderByWithAggregationInput = {
  _avg?: Maybe<AccountAvgOrderByAggregateInput>;
  _count?: Maybe<AccountCountOrderByAggregateInput>;
  _max?: Maybe<AccountMaxOrderByAggregateInput>;
  _min?: Maybe<AccountMinOrderByAggregateInput>;
  _sum?: Maybe<AccountSumOrderByAggregateInput>;
  accessToken?: Maybe<SortOrder>;
  accessTokenExpires?: Maybe<SortOrder>;
  compoundId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  providerAccountId?: Maybe<SortOrder>;
  providerId?: Maybe<SortOrder>;
  providerType?: Maybe<SortOrder>;
  refreshToken?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type AccountOrderByWithRelationInput = {
  accessToken?: Maybe<SortOrder>;
  accessTokenExpires?: Maybe<SortOrder>;
  compoundId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  providerAccountId?: Maybe<SortOrder>;
  providerId?: Maybe<SortOrder>;
  providerType?: Maybe<SortOrder>;
  refreshToken?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export enum AccountScalarFieldEnum {
  AccessToken = 'accessToken',
  AccessTokenExpires = 'accessTokenExpires',
  CompoundId = 'compoundId',
  CreatedAt = 'createdAt',
  Id = 'id',
  ProviderAccountId = 'providerAccountId',
  ProviderId = 'providerId',
  ProviderType = 'providerType',
  RefreshToken = 'refreshToken',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type AccountScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<AccountScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<AccountScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<AccountScalarWhereWithAggregatesInput>>;
  accessToken?: Maybe<StringNullableWithAggregatesFilter>;
  accessTokenExpires?: Maybe<DateTimeNullableWithAggregatesFilter>;
  compoundId?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  providerAccountId?: Maybe<StringWithAggregatesFilter>;
  providerId?: Maybe<StringWithAggregatesFilter>;
  providerType?: Maybe<StringWithAggregatesFilter>;
  refreshToken?: Maybe<StringNullableWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  userId?: Maybe<IntWithAggregatesFilter>;
};

export type AccountSumAggregate = {
  __typename?: 'AccountSumAggregate';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type AccountSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type AccountUpdateInput = {
  accessToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  accessTokenExpires?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  compoundId?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  providerAccountId?: Maybe<StringFieldUpdateOperationsInput>;
  providerId?: Maybe<StringFieldUpdateOperationsInput>;
  providerType?: Maybe<StringFieldUpdateOperationsInput>;
  refreshToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  userId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type AccountUpdateManyMutationInput = {
  accessToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  accessTokenExpires?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  compoundId?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  providerAccountId?: Maybe<StringFieldUpdateOperationsInput>;
  providerId?: Maybe<StringFieldUpdateOperationsInput>;
  providerType?: Maybe<StringFieldUpdateOperationsInput>;
  refreshToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  userId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type AccountWhereInput = {
  AND?: Maybe<Array<AccountWhereInput>>;
  NOT?: Maybe<Array<AccountWhereInput>>;
  OR?: Maybe<Array<AccountWhereInput>>;
  accessToken?: Maybe<StringNullableFilter>;
  accessTokenExpires?: Maybe<DateTimeNullableFilter>;
  compoundId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  providerAccountId?: Maybe<StringFilter>;
  providerId?: Maybe<StringFilter>;
  providerType?: Maybe<StringFilter>;
  refreshToken?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<IntFilter>;
};

export type AccountWhereUniqueInput = {
  compoundId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateAccount = {
  __typename?: 'AggregateAccount';
  _avg?: Maybe<AccountAvgAggregate>;
  _count?: Maybe<AccountCountAggregate>;
  _max?: Maybe<AccountMaxAggregate>;
  _min?: Maybe<AccountMinAggregate>;
  _sum?: Maybe<AccountSumAggregate>;
};

export type AggregateSession = {
  __typename?: 'AggregateSession';
  _avg?: Maybe<SessionAvgAggregate>;
  _count?: Maybe<SessionCountAggregate>;
  _max?: Maybe<SessionMaxAggregate>;
  _min?: Maybe<SessionMinAggregate>;
  _sum?: Maybe<SessionSumAggregate>;
};

export type AggregateSnippet = {
  __typename?: 'AggregateSnippet';
  _avg?: Maybe<SnippetAvgAggregate>;
  _count?: Maybe<SnippetCountAggregate>;
  _max?: Maybe<SnippetMaxAggregate>;
  _min?: Maybe<SnippetMinAggregate>;
  _sum?: Maybe<SnippetSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type AggregateVerificationRequest = {
  __typename?: 'AggregateVerificationRequest';
  _avg?: Maybe<VerificationRequestAvgAggregate>;
  _count?: Maybe<VerificationRequestCountAggregate>;
  _max?: Maybe<VerificationRequestMaxAggregate>;
  _min?: Maybe<VerificationRequestMinAggregate>;
  _sum?: Maybe<VerificationRequestSumAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedBoolFilter>;
  _min?: Maybe<NestedBoolFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedDateTimeNullableFilter>;
  _min?: Maybe<NestedDateTimeNullableFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedIntNullableFilter>;
  _sum?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: Account;
  createManyAccount: AffectedRowsOutput;
  createManySession: AffectedRowsOutput;
  createManySnippet: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyVerificationRequest: AffectedRowsOutput;
  createSession: Session;
  createSnippet: Snippet;
  createUser: User;
  createVerificationRequest: VerificationRequest;
  deleteAccount?: Maybe<Account>;
  deleteManyAccount: AffectedRowsOutput;
  deleteManySession: AffectedRowsOutput;
  deleteManySnippet: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyVerificationRequest: AffectedRowsOutput;
  deleteSession?: Maybe<Session>;
  deleteSnippet?: Maybe<Snippet>;
  deleteUser?: Maybe<User>;
  deleteVerificationRequest?: Maybe<VerificationRequest>;
  updateAccount?: Maybe<Account>;
  updateManyAccount: AffectedRowsOutput;
  updateManySession: AffectedRowsOutput;
  updateManySnippet: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyVerificationRequest: AffectedRowsOutput;
  updateSession?: Maybe<Session>;
  updateSnippet?: Maybe<Snippet>;
  updateUser?: Maybe<User>;
  updateVerificationRequest?: Maybe<VerificationRequest>;
  upsertAccount: Account;
  upsertSession: Session;
  upsertSnippet: Snippet;
  upsertUser: User;
  upsertVerificationRequest: VerificationRequest;
};


export type MutationCreateAccountArgs = {
  data: AccountCreateInput;
};


export type MutationCreateManyAccountArgs = {
  data: Array<AccountCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateManySessionArgs = {
  data: Array<SessionCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateManySnippetArgs = {
  data: Array<SnippetCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateManyVerificationRequestArgs = {
  data: Array<VerificationRequestCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateSessionArgs = {
  data: SessionCreateInput;
};


export type MutationCreateSnippetArgs = {
  data: SnippetCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateVerificationRequestArgs = {
  data: VerificationRequestCreateInput;
};


export type MutationDeleteAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type MutationDeleteManyAccountArgs = {
  where?: Maybe<AccountWhereInput>;
};


export type MutationDeleteManySessionArgs = {
  where?: Maybe<SessionWhereInput>;
};


export type MutationDeleteManySnippetArgs = {
  where?: Maybe<SnippetWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationDeleteManyVerificationRequestArgs = {
  where?: Maybe<VerificationRequestWhereInput>;
};


export type MutationDeleteSessionArgs = {
  where: SessionWhereUniqueInput;
};


export type MutationDeleteSnippetArgs = {
  where: SnippetWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteVerificationRequestArgs = {
  where: VerificationRequestWhereUniqueInput;
};


export type MutationUpdateAccountArgs = {
  data: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};


export type MutationUpdateManyAccountArgs = {
  data: AccountUpdateManyMutationInput;
  where?: Maybe<AccountWhereInput>;
};


export type MutationUpdateManySessionArgs = {
  data: SessionUpdateManyMutationInput;
  where?: Maybe<SessionWhereInput>;
};


export type MutationUpdateManySnippetArgs = {
  data: SnippetUpdateManyMutationInput;
  where?: Maybe<SnippetWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateManyVerificationRequestArgs = {
  data: VerificationRequestUpdateManyMutationInput;
  where?: Maybe<VerificationRequestWhereInput>;
};


export type MutationUpdateSessionArgs = {
  data: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


export type MutationUpdateSnippetArgs = {
  data: SnippetUpdateInput;
  where: SnippetWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateVerificationRequestArgs = {
  data: VerificationRequestUpdateInput;
  where: VerificationRequestWhereUniqueInput;
};


export type MutationUpsertAccountArgs = {
  create: AccountCreateInput;
  update: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};


export type MutationUpsertSessionArgs = {
  create: SessionCreateInput;
  update: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


export type MutationUpsertSnippetArgs = {
  create: SnippetCreateInput;
  update: SnippetUpdateInput;
  where: SnippetWhereUniqueInput;
};


export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertVerificationRequestArgs = {
  create: VerificationRequestCreateInput;
  update: VerificationRequestUpdateInput;
  where: VerificationRequestWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedBoolFilter>;
  _min?: Maybe<NestedBoolFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedDateTimeNullableFilter>;
  _min?: Maybe<NestedDateTimeNullableFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedIntNullableFilter>;
  _sum?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  accounts: Array<Account>;
  aggregateAccount: AggregateAccount;
  aggregateSession: AggregateSession;
  aggregateSnippet: AggregateSnippet;
  aggregateUser: AggregateUser;
  aggregateVerificationRequest: AggregateVerificationRequest;
  findFirstAccount?: Maybe<Account>;
  findFirstSession?: Maybe<Session>;
  findFirstSnippet?: Maybe<Snippet>;
  findFirstUser?: Maybe<User>;
  findFirstVerificationRequest?: Maybe<VerificationRequest>;
  groupByAccount: Array<AccountGroupBy>;
  groupBySession: Array<SessionGroupBy>;
  groupBySnippet: Array<SnippetGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByVerificationRequest: Array<VerificationRequestGroupBy>;
  session?: Maybe<Session>;
  sessions: Array<Session>;
  snippet?: Maybe<Snippet>;
  snippets: Array<Snippet>;
  user?: Maybe<User>;
  users: Array<User>;
  verificationRequest?: Maybe<VerificationRequest>;
  verificationRequests: Array<VerificationRequest>;
};


export type QueryAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type QueryAccountsArgs = {
  cursor?: Maybe<AccountWhereUniqueInput>;
  distinct?: Maybe<Array<AccountScalarFieldEnum>>;
  orderBy?: Maybe<Array<AccountOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AccountWhereInput>;
};


export type QueryAggregateAccountArgs = {
  cursor?: Maybe<AccountWhereUniqueInput>;
  orderBy?: Maybe<Array<AccountOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AccountWhereInput>;
};


export type QueryAggregateSessionArgs = {
  cursor?: Maybe<SessionWhereUniqueInput>;
  orderBy?: Maybe<Array<SessionOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SessionWhereInput>;
};


export type QueryAggregateSnippetArgs = {
  cursor?: Maybe<SnippetWhereUniqueInput>;
  orderBy?: Maybe<Array<SnippetOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SnippetWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  orderBy?: Maybe<Array<UserOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryAggregateVerificationRequestArgs = {
  cursor?: Maybe<VerificationRequestWhereUniqueInput>;
  orderBy?: Maybe<Array<VerificationRequestOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<VerificationRequestWhereInput>;
};


export type QueryFindFirstAccountArgs = {
  cursor?: Maybe<AccountWhereUniqueInput>;
  distinct?: Maybe<Array<AccountScalarFieldEnum>>;
  orderBy?: Maybe<Array<AccountOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AccountWhereInput>;
};


export type QueryFindFirstSessionArgs = {
  cursor?: Maybe<SessionWhereUniqueInput>;
  distinct?: Maybe<Array<SessionScalarFieldEnum>>;
  orderBy?: Maybe<Array<SessionOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SessionWhereInput>;
};


export type QueryFindFirstSnippetArgs = {
  cursor?: Maybe<SnippetWhereUniqueInput>;
  distinct?: Maybe<Array<SnippetScalarFieldEnum>>;
  orderBy?: Maybe<Array<SnippetOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SnippetWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindFirstVerificationRequestArgs = {
  cursor?: Maybe<VerificationRequestWhereUniqueInput>;
  distinct?: Maybe<Array<VerificationRequestScalarFieldEnum>>;
  orderBy?: Maybe<Array<VerificationRequestOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<VerificationRequestWhereInput>;
};


export type QueryGroupByAccountArgs = {
  by: Array<AccountScalarFieldEnum>;
  having?: Maybe<AccountScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<AccountOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AccountWhereInput>;
};


export type QueryGroupBySessionArgs = {
  by: Array<SessionScalarFieldEnum>;
  having?: Maybe<SessionScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<SessionOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SessionWhereInput>;
};


export type QueryGroupBySnippetArgs = {
  by: Array<SnippetScalarFieldEnum>;
  having?: Maybe<SnippetScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<SnippetOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SnippetWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: Maybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<UserOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryGroupByVerificationRequestArgs = {
  by: Array<VerificationRequestScalarFieldEnum>;
  having?: Maybe<VerificationRequestScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<VerificationRequestOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<VerificationRequestWhereInput>;
};


export type QuerySessionArgs = {
  where: SessionWhereUniqueInput;
};


export type QuerySessionsArgs = {
  cursor?: Maybe<SessionWhereUniqueInput>;
  distinct?: Maybe<Array<SessionScalarFieldEnum>>;
  orderBy?: Maybe<Array<SessionOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SessionWhereInput>;
};


export type QuerySnippetArgs = {
  where: SnippetWhereUniqueInput;
};


export type QuerySnippetsArgs = {
  cursor?: Maybe<SnippetWhereUniqueInput>;
  distinct?: Maybe<Array<SnippetScalarFieldEnum>>;
  orderBy?: Maybe<Array<SnippetOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SnippetWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryVerificationRequestArgs = {
  where: VerificationRequestWhereUniqueInput;
};


export type QueryVerificationRequestsArgs = {
  cursor?: Maybe<VerificationRequestWhereUniqueInput>;
  distinct?: Maybe<Array<VerificationRequestScalarFieldEnum>>;
  orderBy?: Maybe<Array<VerificationRequestOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<VerificationRequestWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Session = {
  __typename?: 'Session';
  accessToken: Scalars['String'];
  createdAt: Scalars['DateTime'];
  expires: Scalars['DateTime'];
  id: Scalars['Int'];
  sessionToken: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Int'];
};

export type SessionAvgAggregate = {
  __typename?: 'SessionAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type SessionAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type SessionCountAggregate = {
  __typename?: 'SessionCountAggregate';
  _all: Scalars['Int'];
  accessToken: Scalars['Int'];
  createdAt: Scalars['Int'];
  expires: Scalars['Int'];
  id: Scalars['Int'];
  sessionToken: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type SessionCountOrderByAggregateInput = {
  accessToken?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  expires?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  sessionToken?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type SessionCreateInput = {
  accessToken: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  expires: Scalars['DateTime'];
  sessionToken: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type SessionCreateManyInput = {
  accessToken: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  expires: Scalars['DateTime'];
  id?: Maybe<Scalars['Int']>;
  sessionToken: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type SessionGroupBy = {
  __typename?: 'SessionGroupBy';
  _avg?: Maybe<SessionAvgAggregate>;
  _count?: Maybe<SessionCountAggregate>;
  _max?: Maybe<SessionMaxAggregate>;
  _min?: Maybe<SessionMinAggregate>;
  _sum?: Maybe<SessionSumAggregate>;
  accessToken: Scalars['String'];
  createdAt: Scalars['DateTime'];
  expires: Scalars['DateTime'];
  id: Scalars['Int'];
  sessionToken: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Int'];
};

export type SessionMaxAggregate = {
  __typename?: 'SessionMaxAggregate';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  expires?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  sessionToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type SessionMaxOrderByAggregateInput = {
  accessToken?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  expires?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  sessionToken?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type SessionMinAggregate = {
  __typename?: 'SessionMinAggregate';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  expires?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  sessionToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type SessionMinOrderByAggregateInput = {
  accessToken?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  expires?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  sessionToken?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type SessionOrderByWithAggregationInput = {
  _avg?: Maybe<SessionAvgOrderByAggregateInput>;
  _count?: Maybe<SessionCountOrderByAggregateInput>;
  _max?: Maybe<SessionMaxOrderByAggregateInput>;
  _min?: Maybe<SessionMinOrderByAggregateInput>;
  _sum?: Maybe<SessionSumOrderByAggregateInput>;
  accessToken?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  expires?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  sessionToken?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type SessionOrderByWithRelationInput = {
  accessToken?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  expires?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  sessionToken?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export enum SessionScalarFieldEnum {
  AccessToken = 'accessToken',
  CreatedAt = 'createdAt',
  Expires = 'expires',
  Id = 'id',
  SessionToken = 'sessionToken',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type SessionScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<SessionScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<SessionScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<SessionScalarWhereWithAggregatesInput>>;
  accessToken?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  expires?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  sessionToken?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  userId?: Maybe<IntWithAggregatesFilter>;
};

export type SessionSumAggregate = {
  __typename?: 'SessionSumAggregate';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type SessionSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type SessionUpdateInput = {
  accessToken?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  sessionToken?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  userId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type SessionUpdateManyMutationInput = {
  accessToken?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  sessionToken?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  userId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type SessionWhereInput = {
  AND?: Maybe<Array<SessionWhereInput>>;
  NOT?: Maybe<Array<SessionWhereInput>>;
  OR?: Maybe<Array<SessionWhereInput>>;
  accessToken?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  expires?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  sessionToken?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<IntFilter>;
};

export type SessionWhereUniqueInput = {
  accessToken?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  sessionToken?: Maybe<Scalars['String']>;
};

export type Snippet = {
  __typename?: 'Snippet';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  framework?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  language: Scalars['String'];
  owner?: Maybe<User>;
  ownerId?: Maybe<Scalars['Int']>;
  private: Scalars['Boolean'];
  resource?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SnippetAvgAggregate = {
  __typename?: 'SnippetAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  ownerId?: Maybe<Scalars['Float']>;
};

export type SnippetAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
};

export type SnippetCountAggregate = {
  __typename?: 'SnippetCountAggregate';
  _all: Scalars['Int'];
  code: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  framework: Scalars['Int'];
  id: Scalars['Int'];
  language: Scalars['Int'];
  ownerId: Scalars['Int'];
  private: Scalars['Int'];
  resource: Scalars['Int'];
  title: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type SnippetCountOrderByAggregateInput = {
  code?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  framework?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  language?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
  private?: Maybe<SortOrder>;
  resource?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type SnippetCreateInput = {
  code: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  framework?: Maybe<Scalars['String']>;
  language: Scalars['String'];
  owner?: Maybe<UserCreateNestedOneWithoutSnippetsInput>;
  private?: Maybe<Scalars['Boolean']>;
  resource?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SnippetCreateManyInput = {
  code: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  framework?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  language: Scalars['String'];
  ownerId?: Maybe<Scalars['Int']>;
  private?: Maybe<Scalars['Boolean']>;
  resource?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SnippetCreateManyOwnerInput = {
  code: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  framework?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  language: Scalars['String'];
  private?: Maybe<Scalars['Boolean']>;
  resource?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SnippetCreateManyOwnerInputEnvelope = {
  data: Array<SnippetCreateManyOwnerInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type SnippetCreateNestedManyWithoutOwnerInput = {
  connect?: Maybe<Array<SnippetWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SnippetCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<SnippetCreateWithoutOwnerInput>>;
  createMany?: Maybe<SnippetCreateManyOwnerInputEnvelope>;
};

export type SnippetCreateOrConnectWithoutOwnerInput = {
  create: SnippetCreateWithoutOwnerInput;
  where: SnippetWhereUniqueInput;
};

export type SnippetCreateWithoutOwnerInput = {
  code: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  framework?: Maybe<Scalars['String']>;
  language: Scalars['String'];
  private?: Maybe<Scalars['Boolean']>;
  resource?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SnippetGroupBy = {
  __typename?: 'SnippetGroupBy';
  _avg?: Maybe<SnippetAvgAggregate>;
  _count?: Maybe<SnippetCountAggregate>;
  _max?: Maybe<SnippetMaxAggregate>;
  _min?: Maybe<SnippetMinAggregate>;
  _sum?: Maybe<SnippetSumAggregate>;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  framework?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  language: Scalars['String'];
  ownerId?: Maybe<Scalars['Int']>;
  private: Scalars['Boolean'];
  resource?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SnippetListRelationFilter = {
  every?: Maybe<SnippetWhereInput>;
  none?: Maybe<SnippetWhereInput>;
  some?: Maybe<SnippetWhereInput>;
};

export type SnippetMaxAggregate = {
  __typename?: 'SnippetMaxAggregate';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  framework?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['Int']>;
  private?: Maybe<Scalars['Boolean']>;
  resource?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SnippetMaxOrderByAggregateInput = {
  code?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  framework?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  language?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
  private?: Maybe<SortOrder>;
  resource?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type SnippetMinAggregate = {
  __typename?: 'SnippetMinAggregate';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  framework?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['Int']>;
  private?: Maybe<Scalars['Boolean']>;
  resource?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SnippetMinOrderByAggregateInput = {
  code?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  framework?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  language?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
  private?: Maybe<SortOrder>;
  resource?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type SnippetOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type SnippetOrderByWithAggregationInput = {
  _avg?: Maybe<SnippetAvgOrderByAggregateInput>;
  _count?: Maybe<SnippetCountOrderByAggregateInput>;
  _max?: Maybe<SnippetMaxOrderByAggregateInput>;
  _min?: Maybe<SnippetMinOrderByAggregateInput>;
  _sum?: Maybe<SnippetSumOrderByAggregateInput>;
  code?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  framework?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  language?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
  private?: Maybe<SortOrder>;
  resource?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type SnippetOrderByWithRelationInput = {
  code?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  framework?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  language?: Maybe<SortOrder>;
  owner?: Maybe<UserOrderByWithRelationInput>;
  ownerId?: Maybe<SortOrder>;
  private?: Maybe<SortOrder>;
  resource?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum SnippetScalarFieldEnum {
  Code = 'code',
  CreatedAt = 'createdAt',
  Description = 'description',
  Framework = 'framework',
  Id = 'id',
  Language = 'language',
  OwnerId = 'ownerId',
  Private = 'private',
  Resource = 'resource',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type SnippetScalarWhereInput = {
  AND?: Maybe<Array<SnippetScalarWhereInput>>;
  NOT?: Maybe<Array<SnippetScalarWhereInput>>;
  OR?: Maybe<Array<SnippetScalarWhereInput>>;
  code?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringFilter>;
  framework?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  language?: Maybe<StringFilter>;
  ownerId?: Maybe<IntNullableFilter>;
  private?: Maybe<BoolFilter>;
  resource?: Maybe<StringNullableFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type SnippetScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<SnippetScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<SnippetScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<SnippetScalarWhereWithAggregatesInput>>;
  code?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  description?: Maybe<StringWithAggregatesFilter>;
  framework?: Maybe<StringNullableWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  language?: Maybe<StringWithAggregatesFilter>;
  ownerId?: Maybe<IntNullableWithAggregatesFilter>;
  private?: Maybe<BoolWithAggregatesFilter>;
  resource?: Maybe<StringNullableWithAggregatesFilter>;
  title?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type SnippetSumAggregate = {
  __typename?: 'SnippetSumAggregate';
  id?: Maybe<Scalars['Int']>;
  ownerId?: Maybe<Scalars['Int']>;
};

export type SnippetSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
};

export type SnippetUpdateInput = {
  code?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  framework?: Maybe<NullableStringFieldUpdateOperationsInput>;
  language?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutSnippetsInput>;
  private?: Maybe<BoolFieldUpdateOperationsInput>;
  resource?: Maybe<NullableStringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SnippetUpdateManyMutationInput = {
  code?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  framework?: Maybe<NullableStringFieldUpdateOperationsInput>;
  language?: Maybe<StringFieldUpdateOperationsInput>;
  private?: Maybe<BoolFieldUpdateOperationsInput>;
  resource?: Maybe<NullableStringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SnippetUpdateManyWithWhereWithoutOwnerInput = {
  data: SnippetUpdateManyMutationInput;
  where: SnippetScalarWhereInput;
};

export type SnippetUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<SnippetWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SnippetCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<SnippetCreateWithoutOwnerInput>>;
  createMany?: Maybe<SnippetCreateManyOwnerInputEnvelope>;
  delete?: Maybe<Array<SnippetWhereUniqueInput>>;
  deleteMany?: Maybe<Array<SnippetScalarWhereInput>>;
  disconnect?: Maybe<Array<SnippetWhereUniqueInput>>;
  set?: Maybe<Array<SnippetWhereUniqueInput>>;
  update?: Maybe<Array<SnippetUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<SnippetUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: Maybe<Array<SnippetUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type SnippetUpdateWithWhereUniqueWithoutOwnerInput = {
  data: SnippetUpdateWithoutOwnerInput;
  where: SnippetWhereUniqueInput;
};

export type SnippetUpdateWithoutOwnerInput = {
  code?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  framework?: Maybe<NullableStringFieldUpdateOperationsInput>;
  language?: Maybe<StringFieldUpdateOperationsInput>;
  private?: Maybe<BoolFieldUpdateOperationsInput>;
  resource?: Maybe<NullableStringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SnippetUpsertWithWhereUniqueWithoutOwnerInput = {
  create: SnippetCreateWithoutOwnerInput;
  update: SnippetUpdateWithoutOwnerInput;
  where: SnippetWhereUniqueInput;
};

export type SnippetWhereInput = {
  AND?: Maybe<Array<SnippetWhereInput>>;
  NOT?: Maybe<Array<SnippetWhereInput>>;
  OR?: Maybe<Array<SnippetWhereInput>>;
  code?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringFilter>;
  framework?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  language?: Maybe<StringFilter>;
  owner?: Maybe<UserRelationFilter>;
  ownerId?: Maybe<IntNullableFilter>;
  private?: Maybe<BoolFilter>;
  resource?: Maybe<StringNullableFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type SnippetWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  snippets: Array<Snippet>;
  updatedAt: Scalars['DateTime'];
};


export type UserSnippetsArgs = {
  cursor?: Maybe<SnippetWhereUniqueInput>;
  distinct?: Maybe<Array<SnippetScalarFieldEnum>>;
  orderBy?: Maybe<Array<SnippetOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SnippetWhereInput>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type UserCount = {
  __typename?: 'UserCount';
  snippets: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  emailVerified: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  emailVerified?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type UserCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  snippets?: Maybe<SnippetCreateNestedManyWithoutOwnerInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateNestedOneWithoutSnippetsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutSnippetsInput>;
  create?: Maybe<UserCreateWithoutSnippetsInput>;
};

export type UserCreateOrConnectWithoutSnippetsInput = {
  create: UserCreateWithoutSnippetsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutSnippetsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  emailVerified?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  emailVerified?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: Maybe<UserAvgOrderByAggregateInput>;
  _count?: Maybe<UserCountOrderByAggregateInput>;
  _max?: Maybe<UserMaxOrderByAggregateInput>;
  _min?: Maybe<UserMinOrderByAggregateInput>;
  _sum?: Maybe<UserSumOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  emailVerified?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  emailVerified?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  snippets?: Maybe<SnippetOrderByRelationAggregateInput>;
  updatedAt?: Maybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  EmailVerified = 'emailVerified',
  Id = 'id',
  Image = 'image',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  email?: Maybe<StringNullableWithAggregatesFilter>;
  emailVerified?: Maybe<DateTimeNullableWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  image?: Maybe<StringNullableWithAggregatesFilter>;
  name?: Maybe<StringNullableWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type UserSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type UserUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  snippets?: Maybe<SnippetUpdateManyWithoutOwnerInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateOneWithoutSnippetsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutSnippetsInput>;
  create?: Maybe<UserCreateWithoutSnippetsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutSnippetsInput>;
  upsert?: Maybe<UserUpsertWithoutSnippetsInput>;
};

export type UserUpdateWithoutSnippetsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutSnippetsInput = {
  create: UserCreateWithoutSnippetsInput;
  update: UserUpdateWithoutSnippetsInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringNullableFilter>;
  emailVerified?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<IntFilter>;
  image?: Maybe<StringNullableFilter>;
  name?: Maybe<StringNullableFilter>;
  snippets?: Maybe<SnippetListRelationFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type VerificationRequest = {
  __typename?: 'VerificationRequest';
  createdAt: Scalars['DateTime'];
  expires: Scalars['DateTime'];
  id: Scalars['Int'];
  identifier: Scalars['String'];
  token: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type VerificationRequestAvgAggregate = {
  __typename?: 'VerificationRequestAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type VerificationRequestAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type VerificationRequestCountAggregate = {
  __typename?: 'VerificationRequestCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  expires: Scalars['Int'];
  id: Scalars['Int'];
  identifier: Scalars['Int'];
  token: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type VerificationRequestCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  expires?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  identifier?: Maybe<SortOrder>;
  token?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type VerificationRequestCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  expires: Scalars['DateTime'];
  identifier: Scalars['String'];
  token: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type VerificationRequestCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  expires: Scalars['DateTime'];
  id?: Maybe<Scalars['Int']>;
  identifier: Scalars['String'];
  token: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type VerificationRequestGroupBy = {
  __typename?: 'VerificationRequestGroupBy';
  _avg?: Maybe<VerificationRequestAvgAggregate>;
  _count?: Maybe<VerificationRequestCountAggregate>;
  _max?: Maybe<VerificationRequestMaxAggregate>;
  _min?: Maybe<VerificationRequestMinAggregate>;
  _sum?: Maybe<VerificationRequestSumAggregate>;
  createdAt: Scalars['DateTime'];
  expires: Scalars['DateTime'];
  id: Scalars['Int'];
  identifier: Scalars['String'];
  token: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type VerificationRequestMaxAggregate = {
  __typename?: 'VerificationRequestMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  expires?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type VerificationRequestMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  expires?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  identifier?: Maybe<SortOrder>;
  token?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type VerificationRequestMinAggregate = {
  __typename?: 'VerificationRequestMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  expires?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type VerificationRequestMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  expires?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  identifier?: Maybe<SortOrder>;
  token?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type VerificationRequestOrderByWithAggregationInput = {
  _avg?: Maybe<VerificationRequestAvgOrderByAggregateInput>;
  _count?: Maybe<VerificationRequestCountOrderByAggregateInput>;
  _max?: Maybe<VerificationRequestMaxOrderByAggregateInput>;
  _min?: Maybe<VerificationRequestMinOrderByAggregateInput>;
  _sum?: Maybe<VerificationRequestSumOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  expires?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  identifier?: Maybe<SortOrder>;
  token?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type VerificationRequestOrderByWithRelationInput = {
  createdAt?: Maybe<SortOrder>;
  expires?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  identifier?: Maybe<SortOrder>;
  token?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum VerificationRequestScalarFieldEnum {
  CreatedAt = 'createdAt',
  Expires = 'expires',
  Id = 'id',
  Identifier = 'identifier',
  Token = 'token',
  UpdatedAt = 'updatedAt'
}

export type VerificationRequestScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<VerificationRequestScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<VerificationRequestScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<VerificationRequestScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  expires?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  identifier?: Maybe<StringWithAggregatesFilter>;
  token?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type VerificationRequestSumAggregate = {
  __typename?: 'VerificationRequestSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type VerificationRequestSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type VerificationRequestUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  identifier?: Maybe<StringFieldUpdateOperationsInput>;
  token?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type VerificationRequestUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  identifier?: Maybe<StringFieldUpdateOperationsInput>;
  token?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type VerificationRequestWhereInput = {
  AND?: Maybe<Array<VerificationRequestWhereInput>>;
  NOT?: Maybe<Array<VerificationRequestWhereInput>>;
  OR?: Maybe<Array<VerificationRequestWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  expires?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  identifier?: Maybe<StringFilter>;
  token?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type VerificationRequestWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
};

export type CreateSnippetMutationVariables = Exact<{
  data: SnippetCreateInput;
}>;


export type CreateSnippetMutation = { __typename?: 'Mutation', createSnippet: { __typename?: 'Snippet', id: number } };

export type PublicSnippetsQueryVariables = Exact<{ [key: string]: never; }>;


export type PublicSnippetsQuery = { __typename?: 'Query', snippets: Array<{ __typename?: 'Snippet', id: number, title: string, description: string, code: string, language: string, framework?: Maybe<string>, resource?: Maybe<string>, owner?: Maybe<{ __typename?: 'User', name?: Maybe<string> }> }> };

export type SnippetFragment = { __typename?: 'Snippet', id: number, title: string, description: string, code: string, language: string, framework?: Maybe<string>, resource?: Maybe<string>, owner?: Maybe<{ __typename?: 'User', name?: Maybe<string> }> };

export const SnippetFragmentDoc = gql`
    fragment Snippet on Snippet {
  id
  title
  description
  code
  language
  framework
  resource
  owner {
    name
  }
}
    `;
export const CreateSnippetDocument = gql`
    mutation CreateSnippet($data: SnippetCreateInput!) {
  createSnippet(data: $data) {
    id
  }
}
    `;

export function useCreateSnippetMutation() {
  return Urql.useMutation<CreateSnippetMutation, CreateSnippetMutationVariables>(CreateSnippetDocument);
};
export const PublicSnippetsDocument = gql`
    query PublicSnippets {
  snippets(where: {private: {not: {equals: true}}}) {
    ...Snippet
  }
}
    ${SnippetFragmentDoc}`;

export function usePublicSnippetsQuery(options: Omit<Urql.UseQueryArgs<PublicSnippetsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PublicSnippetsQuery>({ query: PublicSnippetsDocument, ...options });
};
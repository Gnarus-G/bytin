export declare class AccountCreateManyInput {
    id?: number | undefined;
    compoundId: string;
    userId: number;
    providerType: string;
    providerId: string;
    providerAccountId: string;
    refreshToken?: string | undefined;
    accessToken?: string | undefined;
    accessTokenExpires?: Date | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}

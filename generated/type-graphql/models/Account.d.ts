export declare class Account {
    id: number;
    compoundId: string;
    userId: number;
    providerType: string;
    providerId: string;
    providerAccountId: string;
    refreshToken?: string | null;
    accessToken?: string | null;
    accessTokenExpires?: Date | null;
    createdAt: Date;
    updatedAt: Date;
}

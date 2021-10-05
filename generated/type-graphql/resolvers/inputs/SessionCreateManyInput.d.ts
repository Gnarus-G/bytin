export declare class SessionCreateManyInput {
    id?: number | undefined;
    userId: number;
    expires: Date;
    sessionToken: string;
    accessToken: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}

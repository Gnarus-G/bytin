type FieldErrors<T extends object = {}> = T & {
    [key: string | keyof T]: string;
};

type ValidationErrorMap<T, K extends keyof T> = {
    [key in K]?: string[];
};

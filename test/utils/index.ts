import fetch from "isomorphic-unfetch";
import { mocked } from "ts-jest/utils";

export function mockFetchWith(body: string | {}, status: number = 200) {
    mocked(fetch).mockImplementation((): Promise<any> => {
        return Promise.resolve<{ [key in keyof Response]?: any }>({
            status,
            headers: new Headers({
                "Content-Type": typeof body === "string" ? "text/plain" : "application/json"
            }),
            text() {
                return Promise.resolve(body.toString());
            },
            json() {
                return Promise.resolve(body);
            }
        });
    });
}
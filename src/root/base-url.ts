export class BaseUrl {
    static readonly baseUrl: string = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";
}

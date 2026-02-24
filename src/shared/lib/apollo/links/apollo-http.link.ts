import { GRAPHQL_SERVER_URL } from "@/src/shared/config/api.config";
import { HttpLink } from "@apollo/client";

export const httpLink = new HttpLink({
    uri: GRAPHQL_SERVER_URL,
    credentials: 'include',
    fetchOptions: {
        next: {
            revalidate: 60,
        }
    }
})
import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { httpLink } from "./links/apollo-http.link";
import { IS_CLIENT } from "../../constants/app.constants";

// Клиентский Apollo Client
export const clientApolloClient = new ApolloClient({
    ssrMode: IS_CLIENT, // Макс нихуя не понимает что делает, додумываем за него
    link: ApolloLink.from([httpLink]),
    cache: new InMemoryCache(),
    devtools: {
        enabled: true,
    },
});

export const simpleApolloClient = new ApolloClient({
    link: ApolloLink.from([httpLink]),
    cache: new InMemoryCache(),
    devtools: {
        enabled: true,
    },
});

// Серверный Apollo Client
export const serverApolloClient = new ApolloClient({
    ssrMode: true,
    link: ApolloLink.from([httpLink]),
    cache: new InMemoryCache(),
    devtools: {
        enabled: true,
    },
});

export function getApolloClient() {
    // return IS_CLIENT ? clientApolloClient : serverApolloClient;
    return clientApolloClient;
}
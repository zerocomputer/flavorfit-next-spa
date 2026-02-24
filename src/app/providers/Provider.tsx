'use client'

import { getApolloClient } from "@/src/shared/lib/apollo/apollo-client";
import { ApolloProvider } from "@apollo/client/react";
import { ReactNode } from "react";

export function Provider({ children }: { children: ReactNode }) {
    const apolloClient = getApolloClient();

    return <ApolloProvider client={apolloClient}>
        {children}
    </ApolloProvider>
}
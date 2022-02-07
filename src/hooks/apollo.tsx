import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useState } from "react";

export const useApollo = () => {
  const [client, setClient] = useState<any>(null);

  if (!client) {
    const apolloClient = new ApolloClient({
      cache: new InMemoryCache(),
      uri: "http://localhost:8080/graphql",
      //   headers: {
      //     Authorization: user.signInUserSession.idToken.jwtToken,
      //   },
    });
    setClient(apolloClient);
  }

  return { client };
};

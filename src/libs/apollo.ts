import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/clgv5076u0gz101tf87p27uha/master',
  cache: new InMemoryCache(),
})

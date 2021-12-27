import { GraphQLClient } from 'graphql-request'  
const endpoint = process.env.REACT_APP_GQL_URL || "http://127.0.0.1:8000/graphql/"
const client = new GraphQLClient(endpoint)

export default client;
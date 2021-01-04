import { GraphQLClient } from 'graphql-hooks'

const api = new GraphQLClient({
  url: 'http://localhost:4000/graphql' //process.env.GRAPHQL_API
})

export default api

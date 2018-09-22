import Koa from 'koa'
import apolloServerKoa from 'apollo-server-koa'
import typeDefs from './types.mjs'
import resolvers from './resolvers.mjs'

const PORT = process.env.PORT || '3001'

const app = new Koa()
const server = new apolloServerKoa.ApolloServer({ typeDefs, resolvers })

server.applyMiddleware({ app })

app.listen(PORT, error => {
  if (error) throw error
  // eslint-disable-next-line no-console
  console.info(`Serving http://localhost:${PORT} for ${process.env.NODE_ENV}.`)
})

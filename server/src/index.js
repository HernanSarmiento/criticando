const { ApolloServer } = require('@apollo/server');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { GraphQLError } = require('graphql');
const { mongoConnect } = require('./db/db')
const PORT = 4000;

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers');
const schema = makeExecutableSchema({ typeDefs, resolvers })

async function inciarServidor() {
    const server = new ApolloServer({ schema })
    const { url } = await startStandaloneServer(server);
    console.log(`Server running at ${url}`)
}
inciarServidor()
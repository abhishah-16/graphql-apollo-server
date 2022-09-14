const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./schemas/typedef')
const { resolvers } = require('./schemas/resolver')
const server = new ApolloServer({ typeDefs, resolvers })

server.listen(5000).then(({ url }) => {
    console.log(`SERVER IS RUNNING AT ${url} :)`);
})
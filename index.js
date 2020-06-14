const { ApolloServer } = require("apollo-server");
const typeDefs = require("./db/schema");
const resolvers = require("./db/resolver");

//Servidor

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    const miContext = "hola";

    return miContext;
  },
});

//Arrancar servidor

server.listen().then(({ url }) => {
  console.log(`Servidor listo en la URL ${url}`);
});

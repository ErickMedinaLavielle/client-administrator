const { ApolloServer } = require("apollo-server");
const typeDefs = require("./db/schema");
const resolvers = require("./db/resolvers");
<<<<<<< HEAD
const conectarDB = require("./config/db");

//Conectar a la base de datos

conectarDB();
=======
>>>>>>> b23b2a894d060328a11d9ec2bdcad5e0de5704d8

//Servidor

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//Arrancar servidor

server.listen().then(({ url }) => {
  console.log(`Servidor listo en la URL ${url}`);
});

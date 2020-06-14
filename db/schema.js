const { gql } = require("apollo-server");

//Schema

const typeDefs = gql`
  type Query {
    obtenerCliente: String
  }
`;

module.exports = typeDefs;

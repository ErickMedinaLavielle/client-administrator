const { gql } = require("apollo-server");

//Schema

const typeDefs = gql`
<<<<<<< HEAD
  type Usuario {
    id: ID
    nombre: String
    apellido: String
    email: String
    creado: String
  }

  type Token {
    token: String
  }

  input UsuarioInput {
    nombre: String!
    apellido: String!
    email: String!
    password: String!
  }

  input AutenticarInput {
    email: String!
    password: String!
  }

  type Query {
    obtenerCliente: String
  }

  type Mutation {
    nuevoUsuario(input: UsuarioInput): Usuario
    autenticarUsuario(input: AutenticarInput): Token
=======
  type Query {
    obtenerCliente: String
>>>>>>> b23b2a894d060328a11d9ec2bdcad5e0de5704d8
  }
`;

module.exports = typeDefs;

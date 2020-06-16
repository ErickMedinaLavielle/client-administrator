<<<<<<< HEAD
const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "variables.env" });

const crearToken = (usuario, secreta, expiresIn) => {
  //console.log(usuario);
  const { id, email, nombre, apellido } = usuario;
  return jwt.sign({ id, email, nombre, apellido }, secreta, { expiresIn });
};

=======
>>>>>>> b23b2a894d060328a11d9ec2bdcad5e0de5704d8
//Resolvers

const resolvers = {
  Query: {
    obtenerCliente: () => {
<<<<<<< HEAD
      "Clientes";
    },
  },

  Mutation: {
    nuevoUsuario: async (_, { input }) => {
      const { email, password } = input;
      console.log(input);

      //revisar si el usuario esta registrado
      const existeUsuario = await Usuario.findOne({ email });
      if (existeUsuario) {
        throw new Error("El usuario ya esta registrado");
      }

      //Hashear password
      const salt = await bcryptjs.genSalt(10);
      input.password = await bcryptjs.hash(password, salt);

      //Guardar en BD
      try {
        const usuario = new Usuario(input);
        usuario.save();
        return usuario;
      } catch (error) {
        console.log(error);
      }
    },
    autenticarUsuario: async (_, { input }) => {
      const { email, password } = input;

      // si el usuario existe

      const existeUsuario = await Usuario.findOne({ email });
      if (!existeUsuario) {
        throw new Error("El usuario no existe");
      }

      //Revisar si el pasword es correcto

      const passwordCorrecto = await bcryptjs.compare(
        password,
        existeUsuario.password
      );

      if (!passwordCorrecto) {
        throw new Error("El password es incorrecto");
      }

      //Crear token

      return {
        token: crearToken(existeUsuario, process.env.SECRETA, "24h"),
      };
=======
      "Cliente";
>>>>>>> b23b2a894d060328a11d9ec2bdcad5e0de5704d8
    },
  },
};

module.exports = resolvers;

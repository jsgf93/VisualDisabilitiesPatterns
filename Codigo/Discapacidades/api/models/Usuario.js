/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    nombreUsuario: {
      type: 'string',
      required: true
    },
    apellidoUsuario: {
      type: 'string',
      required: true
    },
    cedulaUsuario: {
      type: 'string',
      required: true
    },
    tipoUsuario: {
      type: 'string',
      required: true
    },
    idCurso: {
        collection: "Curso"
    }
  }
};


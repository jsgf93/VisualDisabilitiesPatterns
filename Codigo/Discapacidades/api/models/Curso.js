/**
 * Curso.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    nombreCurso: {
      type: 'string',
      required: true
    },
    respuestasCurso: {
      type: 'array',
      required: true
    },
    usuarios: {
      collection: "Usuario",
      via: "idCurso"
    }
  }
};


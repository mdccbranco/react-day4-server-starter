// models/project-model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: String,
  email: String,
  indicator: [String],
  answers: [Boolean],
  empresa: {
    atuacao: String,
    cargo: String,
    carteiraAssinada: String,
    escolaridade: String,
    escolaridadeOutro: String,
    faturamento: String,
    idade: String,
    porte: String,
    ramo: String,
    ramoOutro: String,
  }
}, { timestamps: true });

const Project = mongoose.model('Answers', projectSchema);

module.exports = Project;

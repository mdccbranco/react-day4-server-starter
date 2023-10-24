// models/project-model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  email: String,
  indicator: [String],
  answers: [Boolean]
}, { timestamps: true });

const Project = mongoose.model('Answers', projectSchema);

module.exports = Project;

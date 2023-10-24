// routes/project-routes.js
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Project = require('../models/project-model');

// POST route => to create a new project
router.post('/projects', (req, res, next) => {
  const { email, indicator, answers } = req.body;

  Project.create({
    email,
    indicator,
    answers: answers.map(answer => !!answer)
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET route => to get all the projects
router.get('/projects', (req, res, next) => {
  Project.find()
    .then(allTheProjects => {
      res.json(allTheProjects);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;

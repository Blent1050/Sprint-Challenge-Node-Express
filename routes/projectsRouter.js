const express = require('express');

const Projects = require('../data/helpers/projectModel');

const router = express.Router();
router.use(express.json());

router.get('/', async (req, res) => {
  try {
    const projects = await Projects.get();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving Projects' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const project = await Projects.get(req.params.id);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving Project', error: error });
  }
});

router.post('/', async (req, res) => {
  try {
    const project = await Projects.insert(req.body);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error posting Project', error: error });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updateProject = await Projects.update(req.params.id, req.body);
    if (updateProject) {
      res.status(200).json({ message: 'Updated the post!', newPost: req.body });
    } else {
      res.status(404).json({ Message: 'The user could not be found!' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updated Project', error: error });
  }
});

module.exports = router;

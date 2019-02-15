const express = require('express');

const Action = require('../data/helpers/actionModel');

const router = express.Router();

// Middleware
router.use(express.json());

// <----ROUTES---->

//GET
router.get('/', async (req, res) => {
  try {
    const actions = await Action.get();
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving actions', error: error });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const action = await Action.get(req.params.id);
    res.status(200).json(action);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving actions', error: error });
  }
});

//POST
router.post('/', async (req, res) => {
  try {
    const action = await Action.insert(req.body);
    res.status(200).json(action);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving actions', error: error });
  }
});

router.post('/', async (req, res) => {
  try {
    const action = await Action.insert(req.body);
    res.status(200).json(action);
  } catch (error) {
    res.status(500).json({ message: 'Error posting Project', error: error });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updateAction = await Action.update(req.params.id, req.body);
    if (updateAction) {
      res
        .status(200)
        .json({ message: 'Updated the post!', newAction: req.body });
    } else {
      res.status(404).json({ Message: 'The user could not be found!' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updated Project', error: error });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteAction = await Action.remove(req.params.id);
    if (deleteAction > 0) {
      res.status(200).json({ message: 'The Action has been deleted' });
    } else {
      res.status(404).json({ message: 'The Action could not be found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error Action Project', error: error });
  }
});

module.exports = router;

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

module.exports = router;

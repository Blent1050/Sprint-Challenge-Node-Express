const express = require('express');
const server = express();

//Routers
const actionRouter = require('./routes/actionRouter');
const projectsRouter = require('./routes/projectsRouter');

//Middleware
server.use(express.json());

//Routes
server.use('/actions', actionRouter);
server.use('/projects', projectsRouter);

server.get('/', (req, res, next) => {
  res.send('Landing Page');
});

module.exports = server;

const express = require('express');
const server = express();
const cors = require('cors');

//Routers
const actionRouter = require('./routes/actionRouter');
const projectsRouter = require('./routes/projectsRouter');

//Middleware
server.use(express.json());
server.use(cors());

server.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
//Routes
server.use('/actions', actionRouter);
server.use('/projects', projectsRouter);

server.get('/', (req, res, next) => {
  res.send('Landing Page');
});

module.exports = server;

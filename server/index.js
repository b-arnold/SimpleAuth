const express = require('express'); // Parses response + routing
const http = require('http'); // handle http requests
const bodyParser = require('body-parser'); // parser for incoming http requests
const morgan = require('morgan'); // logging framework for incoming requests
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

// using nodemon to watch and restart server if files are updated

// DB Setup
mongoose.connect('mongodb://localhost:auth/auth', { useNewUrlParser: true, useCreateIndex: true });

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on:", port);

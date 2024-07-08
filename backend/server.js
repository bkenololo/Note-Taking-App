// load env variables
if (process.env.NODE_ENV != 'production'){
    require('dotenv').config();
}
 
// import dependencies
const express = require('express');
const connectToDb = require('./config/connectToDb');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const notesController = require('./controllers/notesController');
const usersController = require('./controllers/usersController');
const requireAuth = require('./middleware/requireAuth');

// create an express app
const app = express();

// configure express app
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: true,
    credentials: true,
}));

// connect database
connectToDb();

// routing
app.post('/signup', usersController.signUp);
app.post('/login', usersController.logIn);
app.get('/logout', usersController.logOut);
app.get('/check-auth', requireAuth, usersController.checkAuth);

app.get('/notes', requireAuth, notesController.fetchNotes)
app.get('/notes/:id', requireAuth, notesController.fetchANote)
app.post('/notes', requireAuth, notesController.createNote);
app.put('/notes/:id', requireAuth, notesController.updateNote);
app.delete('/notes/:id', requireAuth, notesController.deleteNote);

// start our server
app.listen(process.env.PORT);
const express = require('express');
const app = express();
// const {path} = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);


mongoose.set('useCreateIndex', true);
const mongoURL = 'mongodb+srv://new-user-1983:pgjbcpgjbc@cluster0.7tfau.mongodb.net/AngularFinalProject?retryWrites=true&w=majority';
app.set('port', process.env.PORT || 8080);
require('dotenv').config();

const {authRout} = require('./controllers/authController');
const {friendsRout} = require('./controllers/userController');
const {gamesRout} = require('./controllers/gamesController');

const {authMiddleware} = require('./middlewares/authMiddleware');

const {AppCustomError} = require('./utils/errorsUtil');
const {asyncAwaitWrapper} = require('./utils/asyncAwaitWrapper');

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.static('assets'));

app.get('/', asyncAwaitWrapper( async (req, res) => {
  res.sendFile('node_js_hw_3/index.html', {'root': '../'});
}));

app.use('/api/auth', authRout);

app.use(authMiddleware);
app.use('/api/games', gamesRout);
app.use('/api/friends', friendsRout);


app.use((req, res, next) => {
  res.status(404).json({message: 'Not found'});
});

app.use((err, req, res, next) => {
  if (err instanceof AppCustomError) {
    return res.status(err.status).json({message: err.message});
  }
  res.status(500).json({message: err.message});
});


const startServer = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(app.get('port'));
  } catch (err) {
    console.log(`Error on server startup: ${err.message}`);
  }
};
startServer();

/* eslint-disable prettier/prettier */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3001;
app.use(cors());



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
mongoose
  .connect(
    'mongodb+srv://eyandilutherking2003:V91QdSDFoMfDg3SB@cluster0.74z102p.mongodb.net/',
  )
  .then(() => {
    console.log('Connected to DB');
  })
  .catch(err => {
    console.log('Error connecting to MongoDb', err);
  });



const TODO = require('./models/todo');

app.post('/add-to-do', (req, res) => {
    console.log('reached');
  const {id, title} = req.body;
const data = {id, title};
console.log(id, title);
  // create a new User object
  const newToDO = new TODO({id, title});

  console.log(newToDO);
  res.status(200).json({message: 'To Do Added successfully', data});
//   // save the user to the database
//   newUser
//     .save()
    //  .then(() => {
    //   res.status(200).json({message: 'User registered successfully'});
    // })
    // .catch(err => {
    //   console.log('Error registering user', err);
    //   res.status(500).json({message: 'Error registering the user!'});
    // });
});

app.post('/deleteMessages', async (req, res) => {
  try {
    const {messages} = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({message: 'invalid req body!'});
    }

    await Message.deleteMany({_id: {$in: messages}});

    res.json({message: 'Message deleted successfully'});
  } catch (error) {
    console.log(error);
    res.status(500).json({error: 'Internal Server'});
  }
});

app.get('/friends/:userId', (req, res) => {
  try {
    const {userId} = req.params;

    User.findById(userId)
      .populate('friends')
      .then(user => {
        if (!user) {
          return res.status(404).json({message: 'User not found'});
        }

        const friendIds = user.friends.map(friend => friend._id);

        res.status(200).json(friendIds);
      });
  } catch (error) {
    console.log('error', error);
    res.status(500).json({message: 'internal server error'});
  }
});

app.listen(port, () => {
    console.log('Server running on port 3001');
  });
// IMPORTS AT THE TOP
const express = require('express');

const Users = require('./users/model');

// INSTANCE OF EXPRESS APP
const server = express();

// GLOBAL MIDDLEWARE
server.use(express.json());

// ENDPOINTS

// GET ALL USERS
server.get('/api/users', async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json({
      message: 'All users successfully retrieved',
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: 'The users information could not be retrieved',
      error: error,
    });
  }
});

// GET USER BY ID
server.get('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findById(id);
    if (!user) {
      res.status(404).json({
        message: 'The user with the specified ID does not exist',
      });
    } else {
      res.status(200).json({
        message: 'User successfully retrieved',
        data: user,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'The users information could not be retrieved',
      error: error,
    });
  }
});

// POST NEW USER
server.post('/api/users', async (req, res) => {
  try {
    const { name, bio } = req.body;
    if (!name || !bio) {
      res.status(400).json({
        message: 'Please provide name and bio for the user',
      });
    } else {
      const newUser = await Users.insert({ name, bio });
      console.log(newUser);
      res.status(201).json({
        message: 'User successfully created',
        data: newUser,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'There was an error while saving the user to the database',
      error: error,
    });
  }
});

// DELETE USER BY ID
server.delete('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await Users.remove(id);
    if (!deletedUser) {
      res.status(404).json({
        message: 'The user with the specified ID does not exist',
      });
    } else {
      res.status(200).json({
        message: 'User succesfully deleted',
        data: deletedUser,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'The user could not be removed',
      error: error,
    });
  }
});

// EDIT A USER
server.put('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, bio } = req.body;

    if (!name || !bio) {
      res.status(400).json({
        message: 'Please provide name and bio for the user',
      });
    } else {
      const updatedUser = await Users.update(id, { name, bio });
      if (!updatedUser) {
        res.status(404).json({
          message: 'The user with the specified ID does not exist',
        });
      } else {
        req.status(200).json({
          message: 'Used successfully updated',
          data: updatedUser,
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      message: 'The user information could not be modified',
      error: error,
    });
  }
});

module.exports = server;

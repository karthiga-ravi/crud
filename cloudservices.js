DROPBOX 

USER.JS

import React, { useState, useEffect } from 'react';

const User = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ id: '', name: '', email: '' });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const loadDropboxSDK = () => {
      const script = document.createElement('script');
      script.src = "https://www.dropbox.com/static/api/2/dropins.js";
      script.id = "dropboxjs";
      script.setAttribute('data-app-key', '5nxjig72tz1e54k'); // Replace with your Dropbox app key
      script.onload = () => console.log('Dropbox SDK loaded successfully');
      document.body.appendChild(script);
    };

    loadDropboxSDK();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
      setEditing(false);
    } else {
      setUsers([...users, { ...user, id: Date.now().toString() }]);
    }
    setUser({ id: '', name: '', email: '' });
  };

  const handleEdit = (userToEdit) => {
    setUser(userToEdit);
    setEditing(true);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const openDropboxChooser = () => {
    if (!window.Dropbox) {
      console.error("Dropbox SDK is not loaded.");
      return;
    }

    window.Dropbox.choose({
      success: function (files) {
        console.log("Files chosen: ", files);
        // Here you can add logic to do something with the chosen files
      },
      linkType: "preview", // or "direct"
      multiselect: true, // allow multiple file selection
      extensions: ['.pdf', '.doc', '.docx'], // restrict file types
    });
  };

  return (
    <div>
      <h2>User Management</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <button type="submit">{editing ? 'Update' : 'Add'} User</button>
      </form>

      <button onClick={openDropboxChooser}>Upload File to Dropbox</button>

      <h3>User List</h3>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} - {u.email}
            <button onClick={() => handleEdit(u)}>Edit</button>
            <button onClick={() => handleDelete(u.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;


APP.JS 

import React from 'react';
import User from './User';



const App = () => {
  return (
    <div className="App">
      <h1>Simple CRUD Application</h1>
      <User/>

    </div>
  );
};

export default App;

APP.CSS
/* src/App.css */

.App {
  text-align: center;
  margin: 20px;
}

form {
  margin-bottom: 20px;
}

input {
  margin: 5px;
  padding: 8px;
}

button {
  margin-left: 5px;
  padding: 8px 12px;
}

ul {
  list-style-type: none;
  padding: 0;
}


AUTH 0:

LOGIN 
LOGOUT
PROFILE
INDEX 

TAKE CODE FROM WEBSITE

USER.JS

// src/UserManagement.js

import React, { useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ id: '', name: '', email: '' });
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
      setEditing(false);
    } else {
      setUsers([...users, { ...user, id: Date.now().toString() }]);
    }
    setUser({ id: '', name: '', email: '' });
  };

  const handleEdit = (userToEdit) => {
    setUser(userToEdit);
    setEditing(true);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div>
      <h2>User Management</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <button type="submit">{editing ? 'Update' : 'Add'} User</button>
      </form>

      <h3>User List</h3>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} - {u.email}
            <button onClick={() => handleEdit(u)}>Edit</button>
            <button onClick={() => handleDelete(u.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;

APP.JS

import React from 'react';
import Login from './login';
import User from './User';
import Logout from './logout';
import Profile from './profile';


const App = () => {
  return (
    <div className="App">
      <h1>Simple CRUD Application</h1>
      <Login/>
      <Profile/>
      <User/>
      <Logout/>

    </div>
  );
};

export default App;


FIREBASE:

APP.JS

// src/UserManagement.js

import React, { useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ id: '', name: '', email: '' });
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
      setEditing(false);
    } else {
      setUsers([...users, { ...user, id: Date.now().toString() }]);
    }
    setUser({ id: '', name: '', email: '' });
  };

  const handleEdit = (userToEdit) => {
    setUser(userToEdit);
    setEditing(true);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div>
      <h2>User Management</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <button type="submit">{editing ? 'Update' : 'Add'} User</button>
      </form>

      <h3>User List</h3>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} - {u.email}
            <button onClick={() => handleEdit(u)}>Edit</button>
            <button onClick={() => handleDelete(u.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;



MONGODB:

SERVER.JS 



mkdir
cd
npm init -y
npm install express mongoose cors
node server.js


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Replace <db_password> with your actual password
const dbURI = 'mongodb+srv://srimathi:srimathi@cluster0.ondoz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model('User', userSchema);

// CRUD routes
app.post('/users', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



API CREATION

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data (in-memory storage for simplicity)
let users = [];

// Basic GET route
app.get('/', (req, res) => {
  res.send('Welcome to the Simple API!');
});

// GET route to fetch all users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST route to add a new user
app.post('/users', (req, res) => {
  const { name } = req.body;

  // Simple validation
  if (!name) {
    return res.status(400).json({ message: 'Name required' });
  }

  // Create a new user object
  const newUser = { id: users.length + 1, name};
  
  // Add the user to the in-memory array
  users.push(newUser);
  
  // Return the newly created user
  res.status(201).json(newUser);
});

// DELETE route to delete a user by ID
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  users.splice(id+1, 1);
  res.json({ message: 'User deleted' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

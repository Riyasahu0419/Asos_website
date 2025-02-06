const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const UsersModel = require("./models/User"); // Ensure this path is correct

const app = express();

// CORS settings
const corsOptions = {
  origin: ['https://asos-website-client.vercel.app/', 'http://localhost:5173'], // Allow both your deployed app and localhost
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  credentials: true,
};

// Enable CORS
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Allow preflight requests from any route

// Body parsing middleware
app.use(express.json());

// Database connection
mongoose.connect("mongodb+srv://RiyaSahu:Riya%40123@cluster0.ohieplv.mongodb.net/Asos_website")
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err));

// Default route
app.get('/', (req, res) => {
  res.json("Welcome to ASOS Fashion Store");
});

// API route for user login
app.post('/api/login', async (req, res) => {
  const { Email, Password } = req.body;

  try {
    const user = await UsersModel.findOne({ email: Email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.Password !== Password) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    return res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// API route for user registration
app.post('/api/register', async (req, res) => {
  const { name, email, Password } = req.body;

  try {
    const user = await UsersModel.create({ name, email, Password });
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(400).json({ error: 'Error registering user', details: error });
  }
});


// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();  // Load environment variables
const app = express();

// Enable CORS for all origins
app.use(cors());  // This allows requests from any domain

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
app.get('/', (req, res) => {
  res.send('API is running');
});

const authRoutes = require('./routes/auth');  // Import the routes
app.use('/api/auth', authRoutes);  // Use the routes for authentication

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

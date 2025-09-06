const express = require('express');
const studentRoutes = require('./routes/student');
const adminRoutes = require('./routes/admin');
const app = express();
const cors = require('cors');
const port = 3001;

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Use student routes - all routes will be prefixed with /student
app.use(cors({ origin: "http://localhost:3002", credentials: true }));
app.use(express.json());
app.use('/student', studentRoutes);
app.use('/admin', adminRoutes);
app.listen(port, () => {    
  console.log(`Server running at http://localhost:${port}`);
});
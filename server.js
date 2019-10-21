const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Call the connection to the database
connectDB();

/* ==== GET ==== */

// Define Routes - meaning when type /api/users - will take us to the users page
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/incomes', require('./routes/api/incomes'));
app.use('/api/expenses', require('./routes/api/expenses'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

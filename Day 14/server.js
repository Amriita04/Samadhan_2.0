const express = require('express');
const authRoutes = require('./routes/auth');
const app = express();

app.use(express.json());
app.use('/api', authRoutes);

app.listen(6000, () => console.log('Server running on port 6000'));

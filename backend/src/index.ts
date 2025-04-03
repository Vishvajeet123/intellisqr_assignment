const express = require('express');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors'); 
const dotenv = require('dotenv'); 

dotenv.config(); 


const app = express();
app.use(cors()); 
app.use(express.json());

app.use('/api/auth', authRoutes);

app.use(errorHandler); 

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
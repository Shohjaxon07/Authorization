const mongoose = require('mongoose');
const connectDB = async () => {
    const connecting = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    })
    .then(() => {
        console.log('Connected to MongoDB Atlas');
        // Start executing your code here
      })
      .catch((error) => {
        console.error('Error connecting to MongoDB Atlas:', error);
        // Handle the error here or throw it to be caught at a higher level
        // throw error;
      });
}

module.exports = connectDB


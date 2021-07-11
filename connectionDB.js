const mongoose = require("mongoose");
const uri =
  "mongodb+srv://tempUser:tempUser123@cluster-charlie-foxtrot.vb0yi.mongodb.net/fitnessTracker?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log('Connected to Atlas DB');
};

module.exports = connectDB;

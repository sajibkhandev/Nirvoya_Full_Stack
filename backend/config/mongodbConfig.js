const mongoose = require('mongoose');

const mongodbConfig=()=>{

    mongoose.connect(`mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.ur9bur3.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => console.log('Connected!'));

}
// mongodb+srv://ajib562341:tdOz1tOZFvBqXCQE@cluster0.ur9bur3.mongodb.net/nrivoya?retryWrites=true&w=majority&appName=Cluster0
module.exports=mongodbConfig
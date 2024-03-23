const mongoose = require('mongoose');

const mongodbConfig=()=>{

    mongoose.connect(`mongodb+srv://sajib562341:tdOz1tOZFvBqXCQE@cluster0.ur9bur3.mongodb.net/nrivoya?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => console.log('Connected!'));

}
module.exports=mongodbConfig
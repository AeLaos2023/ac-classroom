const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.set('strictQuery', true);
             
async function connectDB(params) {
  const uri =
    "mongodb+srv://action_ed:11223344.Ae@cluster0.1yivf2q.mongodb.net/ae_classroom?retryWrites=true&w=majority";
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Connect DB successfully");
    })
    .catch((err) => {
      console.log("Connect DB error: ", err);
    });
}

module.exports = {
  connectDB,
};

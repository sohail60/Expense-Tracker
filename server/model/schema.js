import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const transactionSchema= new mongoose.Schema({
  userId: String,
  title:String,
  amount:String,
  date:Date,
  description:String,
  type:String
})

const ContactSchema= new mongoose.Schema({
  userId: String,
  id:String,
  name:String,
  email:String,
  message:String,
  time:Date,
})

const User = new mongoose.model("User", userSchema);
const Transaction = new mongoose.model("Transaction", transactionSchema);
const Contact = new mongoose.model("Contact", ContactSchema);

export { User, Transaction, Contact };
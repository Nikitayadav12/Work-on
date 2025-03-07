const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
const MONGODB_URL = "mongodb://<username>:<password>@cluster0-shard-00-00.wkusx.mongodb.net:27017,cluster0-shard-00-01.wkusx.mongodb.net:27017,cluster0-shard-00-02.wkusx.mongodb.net:27017/?ssl=true&replicaSet=atlas-xyz-shard-0&authSource=admin";

const connectDB = async () => {
    await mongoose.connect(MONGODB_URL);
    console.log("mongodb is connected")
};
connectDB();


const userSchema = new mongoose.Schema({
    name: String,
    age: String,

});

const User = mongoose.model('User', userSchema);
app.post("/add-user", async (req, res) => {
    const { name, age } = req.body;
    const newUser = new User({ name, age });
    await newUser.save();
    res.json({ newUser });
});
app.delete("/delete-user/:id" , async(req,res)=>{
    const{id}=req.body;
    const deleteData = await User.findByIdAndDelete(id);
    res.json("user is deleted");
});
app.get("/get-data", (req, res) => {
    res.send("node is runing on server")
});
app.listen(2000, () => {
    console.log("server is running")
});

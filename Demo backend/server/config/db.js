const mongoose = require("mongoose")


// mongoose.connect("mongodb://localhost:27017/project-1").then(()=>{
mongoose.connect("mongodb://127.0.0.1/unitapbackend")
.then(()=>{
console.log("Database Connected");
})
.catch((err)=>{
    console.log("Error in db", err);
})
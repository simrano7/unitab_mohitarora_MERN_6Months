const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1/backendproject2")
.then(()=>{
    console.log("Database Connected");
    })
    .catch((err)=>{
        console.log("Error in db", err)
    })

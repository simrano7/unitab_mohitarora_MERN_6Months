const express = require("express")

const app = express()

const PORT = 5000
app.use(express.urlencoded({extended:false}))
const routes = require('./server/routes/apiRoutes')
app.use('/api',routes)
const db = require("./server/config/db")

app.get('/',(req,res)=>{
    res.json({
        status:200,
        success:true,
        message:"api hit "
    })
})

app.listen(PORT, (err => {
    if (err) {
        console.log("error in server", err);
    }
    else {
        console.log("server is running",PORT);

    }
}))

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const contactRoutes = require("./routes/contact");


// Middleware
app.use(express.json());
app.use(cors());
app.use("/api/contact", contactRoutes);


//database connection
const MONGO_URL="mongodb://127.0.0.1:27017/Veersa";


//db connection


async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("connected to DB");
    } catch (err) {
        console.log(err);
    }
}
main();
// main();

//test route
app.get("/",(req,res)=>{
    res.send("hi i am root");
});





//error handling
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong" } = err;

    res.status(statusCode).json({
        message: message
    });
});

//server
app.listen(8080, ()=> {
    console.log("server is listening ")
});

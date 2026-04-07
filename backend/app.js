require("dotenv").config();
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
const MONGO_URL = process.env.MONGO_URL;


//db connection


async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("connected to DB");
    } catch (err) {
        console.error("DB connection error:", err.message);
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
    success: false,
    message: message
});
});

//server
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

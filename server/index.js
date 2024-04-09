const express = require('express');
const cors = require("cors")
const mongoose = require("mongoose")

require('dotenv').config();

const router = require("./routes/index")
const app = express();

app.use(express.json())
app.use(cors())
app.use("/api",router)
const port = process.env.PORT || 8000;


async function getConnect(){
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Database is Connected")
}

getConnect()

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
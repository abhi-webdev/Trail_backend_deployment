// import express from "express"
const express = require("express")
const dotenv = require("dotenv")
const app = express()
const PORT = process.env.PORT ?? 8000;

app.get("/", (req, res) => {
    res.send("Hello");
})

app.listen(PORT, () => {
    console.log(`Server is listen on ${PORT}`);

})



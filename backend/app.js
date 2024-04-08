import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { test } from "./controllers/user.controllers.js";
dotenv.config()

mongoose.connect(process.env.url_db)
.then(() => {
    console.log('conexion exitosa')
})
.catch((err) => {
    console.log('conexion fallida')
})

//API
const app = express()
app.use(cors())
app.listen(4000, () => {
    console.log('La API esta corriendo')
})

test()
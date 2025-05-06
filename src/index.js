import dotenv from "dotenv"
import connectDB from "./db/index.js"
import express from "express"
import { app } from "./app.js"

dotenv.config({
  path: "./env",
})

connectDB()
  .then(() => {
    app.on("error",error)=>{
      console.log("ERR",error);
      throw error
    }
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on : ${process.env.PORT}`)
    })
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err)
  })

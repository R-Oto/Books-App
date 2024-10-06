import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import bookRouter from './routes/bookRouter.js';

const app = express()

app.use(express.json())
app.use(cors())
app.use("/api/books", bookRouter)

const PORT = 5000;

mongoose.connect("mongodb+srv://robusinesscommercial:otocoder@cluster0.alm3m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Conn")
    app.listen(PORT)
})
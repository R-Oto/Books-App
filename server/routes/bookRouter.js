import express from 'express'
import { createBook, readBook, updateBook, deleteBook } from '../controllers/bookController.js';
const bookRouter = express.Router()

bookRouter.get("/", readBook)
bookRouter.post("/", createBook)
bookRouter.put("/:id", updateBook)
bookRouter.delete("/:id", deleteBook)

export default bookRouter;
import Book from "../models/bookModel.js";

export const createBook = async (req, res) => {
    const { title, desc } = req.body;

    if (!title || !desc) {
        return res.status(400).json({ error: "Title and description are required." });
    }

    try {
        const book = await Book.create({ title, desc });
        return res.status(201).json({ message: "Book created", book });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const readBook = async (req, res) => {
    try {
        const books = await Book.find(); 
        return res.status(200).json({ books });
    } catch (error) {
        return res.status(500).json({ error: error.message }); 
    }
}

export const updateBook = async (req, res) => {
    const id = req.params.id;
    const updateData = req.body; 

    try {
        const result = await Book.updateOne({ _id: id });

        if (result.modifiedCount === 0) {
            return res.status(404).json({ message: "Book not found or no changes made." });
        }

        return res.status(200).json({ message: "Book updated successfully." });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const deleteBook = async (req, res) => {
    const id = req.params.id;

    try {
        const result = await Book.deleteOne({ _id: id });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Book not found." });
        }

        return res.status(200).json({ message: "Book deleted successfully." });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

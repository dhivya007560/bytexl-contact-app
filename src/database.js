require("dotenv").config();

const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI);

async function main() {
    try {
        await client.connect();

        console.log("MongoDB Atlas connected successfully");

        const db = client.db("library");
        const books = db.collection("books");

        // Insert a new book
        const newBook = {
            bookId: "B001",
            title: "The Alchemist",
            author: "Paulo Coelho",
            category: "Fiction",
            price: 350,
            availableCopies: 10
        };

        const result = await books.insertOne(newBook);

        console.log("Book inserted successfully");
        console.log("Inserted ID:", result.insertedId);

        // Update available copies using bookId
        const updateResult = await books.updateOne(
            { bookId: "B001" },
            { $set: { availableCopies: 8 } }
        );

        console.log("Available copies updated successfully");
        console.log("Modified documents:", updateResult.modifiedCount);

    } catch (error) {
        console.error("Error:", error);
    } finally {
        await client.close();
    }
}

main();
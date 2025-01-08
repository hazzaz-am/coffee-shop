import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";

// env connect
dotenv.config();
const PORT = process.env.PORT || 5000;
const username = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;

// app create
const app = express();

// middlewares
app.use([cors(), morgan("dev"), express.json()]);

// app health check
app.get("/", (req, res) => {
	res.send({
		message: "OK",
	});
});

// database configuration
const uri =
	`mongodb+srv://${username}:${password}@cluster0.yc5i8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

async function run() {
	try {
		// Connect the client to the server	(optional starting in v4.7)
		await client.connect();

		// Get the database and collection on which to run the operation
		const database = client.db("coffeeDB");
		const coffeeCollection = database.collection("coffeeCollection");

		// get all coffees
		app.get("/coffees", async (_req, res) => {
			const result = await coffeeCollection.find().toArray();
      console.log(result);
			res.status(200).send(result);
		});

    // get single coffee details
    
		// Send a ping to confirm a successful connection
		await client.db("admin").command({ ping: 1 });
		console.log(
			"Pinged your deployment. You successfully connected to MongoDB!"
		);
	} finally {
		// Ensures that the client will close when you finish/error
		// await client.close();
	}
}
run().catch(console.dir);

// listening port
app.listen(PORT, () => {
	console.log(`app is listening on PORT: ${PORT}`);
});

import "dotenv/config";
import mongoose from "mongoose";
import { DadJoke } from "../db/schema.js";

await mongoose.connect(process.env.MONGODB_URI);
console.log("Connected to the database.");

await DadJoke.deleteMany({});

const dadJokes = [
  { text: "What do you call a fake noodle? An impasta!" },
  { text: "Why did the coffee file a police report? It got mugged." },
  { text: "How does a penguin build its house? Igloos it together." },
  { text: "Dad, did you get a haircut? No, I got them all cut!" },
  { text: "I would avoid the sushi if I was you. It’s a little fishy." },
  { text: "How do you organize a space party? You planet." },
  { text: "Why don't skeletons fight each other? They don't have the guts." },
  { text: "What do you call cheese that isn't yours? Nacho cheese." },
  { text: "Why couldn't the bicycle stand up by itself? It was two-tired." },
  { text: "What do you call a bear with no teeth? A gummy bear." },
  { text: "Why did the scarecrow win an award? Because he was outstanding in his field." },
  { text: "How do you make a tissue dance? You put a little boogie in it." },
  { text: "Why don't some couples go to the gym? Because some relationships don't work out." },
  { text: "What do you call a fish wearing a bowtie? Sofishticated." },
  { text: "Why did the math book look sad? Because it had too many problems." },
  { text: "What do you call a factory that makes good products? A satisfactory." }
];

const response = await DadJoke.insertMany(dadJokes);
console.log(`Inserted ${response.length} dad jokes into the database.`);

await mongoose.disconnect();
console.log("Disconnected from the database.");

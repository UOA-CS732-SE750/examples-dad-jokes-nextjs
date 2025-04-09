"use server";

import { DadJoke } from "@/lib/db/schema";
import connectToDatabase from "@/lib/db/connection-utils";
import { revalidatePath } from "next/cache";

/**
 * Retrieves a random joke from the database
 * @returns a random joke from the database
 */
export async function retrieveRandomJoke() {
  await connectToDatabase();
  const jokes = await DadJoke.aggregate([{ $sample: { size: 1 } }]);
  if (jokes.length === 0) return null;
  const joke = jokes[0];
  return { ...joke, _id: joke._id.toString() }; // Convert ObjectId to string
}

/**
 * Retrieves all jokes from the database
 *
 * @returns all jokes from the database
 */
export async function retrieveAllJokes() {
  await connectToDatabase();
  const allJokes = await DadJoke.find({});
  return allJokes.map((joke) => ({ ...joke.toObject(), _id: joke._id.toString() }));
}

/**
 * Create a new joke
 *
 * @param {any} prevState holds the previous state of the action. Not really used here.
 * @param {FormData} formData the submitted form data, containing the new joke's text in the "joke" field.
 */
export async function createJoke(prevState, formData) {
  const text = formData.get("joke");

  // Validate the joke text; return an error message if invalid.
  if (!text || typeof text !== "string" || text.trim() === "") {
    return { errorMessage: "Invalid joke text" };
  }

  await connectToDatabase();

  const newJoke = new DadJoke({ text });
  await newJoke.save();

  revalidatePath("/admin");
}

/**
 * Deletes a joke from the database
 *
 * @param {string} jokeId the id of the joke to delete
 */
export async function deleteJoke(jokeId) {
  await connectToDatabase();
  await DadJoke.findByIdAndDelete(jokeId);

  revalidatePath("/admin");
}

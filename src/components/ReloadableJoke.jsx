"use client";

import { useState } from "react";
import { retrieveRandomJoke } from "@/lib/actions/jokes-actions";
import styles from "./ReloadableJoke.module.css";

export default function ReloadableJoke({ initialJoke }) {
  const [joke, setJoke] = useState(initialJoke);

  async function handleFetchJoke() {
    const newJoke = await retrieveRandomJoke();
    setJoke(newJoke);
  }

  if (!joke) {
    return <p className={styles.error}>No joke found 😢</p>;
  }

  return (
    <>
      <p className={styles.joke}>{joke.text}</p>
      <button onClick={handleFetchJoke}>Tell me another!</button>
    </>
  );
}

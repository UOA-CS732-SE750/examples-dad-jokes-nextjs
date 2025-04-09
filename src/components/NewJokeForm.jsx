"use client";

import styles from "./NewJokeForm.module.css";
import { useActionState } from "react";
import { createJoke } from "@/lib/actions/jokes-actions";

export default function NewJokeForm() {
  const [state, formAction, pending] = useActionState(createJoke, { errorMeesage: null });

  return (
    <>
      <form className={styles.form} action={formAction}>
        <input type="text" name="joke" />
        <button disabled={pending} type="submit">
          Add joke
        </button>
      </form>

      {state?.errorMessage && <p className={styles.error}>{state.errorMessage}</p>}
    </>
  );
}

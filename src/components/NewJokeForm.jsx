import styles from "./NewJokeForm.module.css";

export default function NewJokeForm() {
  return (
    <>
      <form className={styles.form}>
        <input type="text" name="joke" />
        <button type="submit">Add joke</button>
      </form>

      <p className={styles.error}>Error messages go here.</p>
    </>
  );
}

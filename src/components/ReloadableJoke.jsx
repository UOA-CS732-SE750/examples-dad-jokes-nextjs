import styles from "./ReloadableJoke.module.css";

export default function ReloadableJoke({ initialJoke }) {

  return (
    <>
      <p className={styles.joke}>{initialJoke.text}</p>
      <button>Tell me another!</button>
    </>
  );
}

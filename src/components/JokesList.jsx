import styles from "./JokesList.module.css";

export default function JokesList({ jokes }) {
  return (
    <ul className={styles.jokeslist}>
      {jokes.map((joke) => (
        <li key={joke._id}>
          <span>{joke.text}</span>
          <button>Delete</button>
        </li>
      ))}
    </ul>
  );
}

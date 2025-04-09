import ReloadableJoke from "@/components/ReloadableJoke";
import styles from "./page.module.css";

export default function HomePage() {
  const joke = {
    _id: "1",
    text: "Why did the scarecrow win an award? Because he was outstanding in his field!"
  };

  return (
    <div>
      <h1>Daily Dad Joke</h1>
      <main className={styles.main}>
        <ReloadableJoke initialJoke={joke} />
      </main>
    </div>
  );
}

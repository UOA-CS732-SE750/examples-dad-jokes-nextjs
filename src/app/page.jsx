import ReloadableJoke from "@/components/ReloadableJoke";
import styles from "./page.module.css";
import { retrieveRandomJoke } from "@/lib/actions/jokes-actions";

export default async function HomePage() {
  const initialJoke = await retrieveRandomJoke();

  return (
    <div>
      <h1>Daily Dad Joke</h1>
      <main className={styles.main}>
        <ReloadableJoke initialJoke={initialJoke} />
      </main>
    </div>
  );
}

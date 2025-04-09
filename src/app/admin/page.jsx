import { retrieveAllJokes } from "@/lib/actions/jokes-actions";
import JokesList from "@/components/JokesList";
import NewJokeForm from "@/components/NewJokeForm";

export default async function AdminPage() {
  const jokes = await retrieveAllJokes();

  return (
    <div>
      <h1>Admin Page</h1>

      <h2>All jokes</h2>
      <JokesList jokes={jokes} />

      <h2>Add joke</h2>
      <NewJokeForm />
    </div>
  );
}

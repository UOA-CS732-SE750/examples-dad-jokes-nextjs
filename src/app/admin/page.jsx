import JokesList from "@/components/JokesList";
import NewJokeForm from "@/components/NewJokeForm";

export default function AdminPage() {
  const jokes = [
    {
      _id: "1",
      text: "Why did the chicken cross the road? To get to the other side!"
    },
    {
      _id: "2",
      text: "Why don't scientists trust atoms? Because they make up everything!"
    },
    {
      _id: "3",
      text: "Why did the scarecrow win an award? Because he was outstanding in his field!"
    }
  ];

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

import styles from "./NavBar.module.css";
import ActiveLink from "./ActiveLink";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <ActiveLink href="/">Daily Joke</ActiveLink>
        </li>
        <li>
          <ActiveLink href="/admin">Admin</ActiveLink>
        </li>
      </ul>
    </nav>
  );
}

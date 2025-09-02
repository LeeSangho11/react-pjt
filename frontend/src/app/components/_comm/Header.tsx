import styles from "@/app/styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>My App</h1>
      <nav className={styles.nav}>
        <a href="/">Home</a>
        <a href="/form">Form</a>
      </nav>
    </header>
  );
}

import Dashboard from "./dashboard/page";
import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
       <Dashboard />
       <h1>JOSHUA FIRST DASHBOARD</h1>
      </div>
    </main>
  );
}

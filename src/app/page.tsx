import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "../../shared/src/shared/Button";


export default function Home() {
  return (
    <main className={styles.main}>
      <h1>SSR APP</h1>
      <Button label="Demo button" primary={true} size="xxxx" />
    </main>
  );
}

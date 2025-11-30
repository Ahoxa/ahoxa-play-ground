import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import * as styles from "../../styles/routes/demo/start.api-request.css";

function getNames() {
  return fetch("/demo/api/names").then(
    (res) => res.json() as Promise<string[]>
  );
}

export const Route = createFileRoute("/demo/start/api-request")({
  component: Home,
});

function Home() {
  const [names, setNames] = useState<Array<string>>([]);

  useEffect(() => {
    getNames().then(setNames);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Start API Request Demo - Names List</h1>
        <ul className={styles.list}>
          {names.map((name) => (
            <li key={name} className={styles.listItem}>
              <span className={styles.nameText}>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

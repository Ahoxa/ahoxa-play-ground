import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useState } from "react";
import * as styles from "../../styles/demo/start.server-funcs.css";

const getCurrentServerTime = createServerFn({
  method: "GET",
}).handler(async () => await new Date().toISOString());

export const Route = createFileRoute("/demo/start/server-funcs")({
  component: Home,
  loader: async () => await getCurrentServerTime(),
});

function Home() {
  const originalTime = Route.useLoaderData();
  const [time, setTime] = useState(originalTime);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Start Server Functions - Server Time</h1>
        <div className={styles.content}>
          <div className={styles.timeText}>Starting Time: {originalTime}</div>
          <div className={styles.timeText}>Current Time: {time}</div>
          <button
            className={styles.button}
            onClick={async () => setTime(await getCurrentServerTime())}
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}

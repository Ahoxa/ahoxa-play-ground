import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { getPunkSongs } from "@/data/demo.punk-songs";
import * as styles from "../../styles/demo/start.ssr.spa-mode.css";

export const Route = createFileRoute("/demo/start/ssr/spa-mode")({
  ssr: false,
  component: RouteComponent,
});

function RouteComponent() {
  const [punkSongs, setPunkSongs] = useState<
    Awaited<ReturnType<typeof getPunkSongs>>[number][]
  >([]);

  useEffect(() => {
    getPunkSongs().then(setPunkSongs);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>SPA Mode - Punk Songs</h1>
        <ul className={styles.list}>
          {punkSongs.map((song) => (
            <li key={song.id} className={styles.listItem}>
              <span className={styles.songName}>{song.name}</span>
              <span className={styles.artistName}> - {song.artist}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

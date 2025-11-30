import { createFileRoute } from "@tanstack/react-router";
import { getPunkSongs } from "@/data/demo.punk-songs";
import * as styles from "../../styles/routes/demo/start.ssr.full-ssr.css";

export const Route = createFileRoute("/demo/start/ssr/full-ssr")({
  component: RouteComponent,
  loader: async () => await getPunkSongs(),
});

function RouteComponent() {
  const punkSongs = Route.useLoaderData();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Full SSR - Punk Songs</h1>
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

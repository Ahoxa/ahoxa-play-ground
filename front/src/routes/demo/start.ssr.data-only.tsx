import { createFileRoute } from "@tanstack/react-router";
import { getPunkSongs } from "@/data/demo.punk-songs";
import * as styles from "../../styles/routes/demo/start.ssr.data-only.css";

export const Route = createFileRoute("/demo/start/ssr/data-only")({
  ssr: "data-only",
  component: RouteComponent,
  loader: async () => await getPunkSongs(),
});

function RouteComponent() {
  const punkSongs = Route.useLoaderData();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Data Only SSR - Punk Songs</h1>
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

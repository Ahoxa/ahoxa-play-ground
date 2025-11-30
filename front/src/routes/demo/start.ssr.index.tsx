import { createFileRoute, Link } from "@tanstack/react-router";
import * as styles from "../../styles/routes/demo/start.ssr.index.css";

export const Route = createFileRoute("/demo/start/ssr/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>SSR Demos</h1>
        <div className={styles.linkContainer}>
          <Link to="/demo/start/ssr/spa-mode" className={styles.linkSpa}>
            SPA Mode
          </Link>
          <Link to="/demo/start/ssr/full-ssr" className={styles.linkFullSsr}>
            Full SSR
          </Link>
          <Link to="/demo/start/ssr/data-only" className={styles.linkDataOnly}>
            Data Only
          </Link>
        </div>
      </div>
    </div>
  );
}

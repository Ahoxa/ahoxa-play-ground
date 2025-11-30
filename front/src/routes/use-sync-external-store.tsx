import { createFileRoute } from "@tanstack/react-router";
import { useSyncExternalStore } from "react";
import * as styles from "@/styles/demos.css";

export const Route = createFileRoute("/use-sync-external-store")({
  component: SyncExternalStoreDemo,
});

// ネットワーク状態を監視するストア
const networkStore = {
  subscribe(callback: () => void) {
    window.addEventListener("online", callback);
    window.addEventListener("offline", callback);
    return () => {
      window.removeEventListener("online", callback);
      window.removeEventListener("offline", callback);
    };
  },
  getSnapshot() {
    return navigator.onLine;
  },
};

// ウィンドウサイズを監視するストア
const resizeStore = {
  subscribe(callback: () => void) {
    window.addEventListener("resize", callback);
    return () => window.removeEventListener("resize", callback);
  },
  getSnapshot() {
    return window.innerWidth;
  },
};

function useIsOnline() {
  return useSyncExternalStore(networkStore.subscribe, networkStore.getSnapshot);
}

function useWindowWidth() {
  return useSyncExternalStore(resizeStore.subscribe, resizeStore.getSnapshot);
}

function SyncExternalStoreDemo() {
  const isOnline = useIsOnline();
  const width = useWindowWidth();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>useSyncExternalStore Demo</h1>
      <p className={styles.description}>
        useSyncExternalStoreは、React外部のストア（ブラウザAPI、Redux、Zustandなど）を
        ティアリング（表示の不整合）なしに購読するためのフックです。
      </p>

      <div className={styles.grid}>
        <div
          className={`${styles.statusCard} ${isOnline ? styles.statusCardOnline : styles.statusCardOffline}`}
        >
          <h2 className={styles.cardTitle}>ネットワーク状態</h2>
          <div className={styles.flexCenterGap2}>
            <div
              className={`${styles.statusIndicator} ${isOnline ? styles.statusIndicatorOnline : styles.statusIndicatorOffline}`}
            ></div>
            <span className={styles.textLg}>
              {isOnline ? "オンライン" : "オフライン"}
            </span>
          </div>
          <p className={`${styles.textSmGray600} ${styles.mt2}`}>
            開発者ツールのNetworkタブでオフラインに切り替えてみてください。
          </p>
        </div>

        <div className={styles.windowWidthCard}>
          <h2 className={styles.cardTitle}>ウィンドウ幅</h2>
          <div className={styles.windowWidthText}>{width}px</div>
          <p className={`${styles.textSmGray600} ${styles.mt2}`}>
            ウィンドウサイズを変更すると即座に反映されます。
          </p>
        </div>
      </div>
    </div>
  );
}

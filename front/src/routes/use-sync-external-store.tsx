import { createFileRoute } from "@tanstack/react-router";
import { useSyncExternalStore } from "react";
import * as commonStyles from "@/styles/demos.css";
import * as pageStyles from "@/styles/use-sync-external-store.css";

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
    <div className={commonStyles.container}>
      <h1 className={commonStyles.title}>useSyncExternalStore Demo</h1>
      <p className={commonStyles.description}>
        useSyncExternalStoreは、React外部のストア（ブラウザAPI、Redux、Zustandなど）を
        ティアリング（表示の不整合）なしに購読するためのフックです。
      </p>

      <div className={commonStyles.grid}>
        <div
          className={`${pageStyles.statusCard} ${isOnline ? pageStyles.statusCardOnline : pageStyles.statusCardOffline}`}
        >
          <h2 className={commonStyles.cardTitle}>ネットワーク状態</h2>
          <div className={pageStyles.flexCenterGap2}>
            <div
              className={`${pageStyles.statusIndicator} ${isOnline ? pageStyles.statusIndicatorOnline : pageStyles.statusIndicatorOffline}`}
            ></div>
            <span className={pageStyles.textLg}>
              {isOnline ? "オンライン" : "オフライン"}
            </span>
          </div>
          <p className={`${pageStyles.textSmGray600} ${pageStyles.mt2}`}>
            開発者ツールのNetworkタブでオフラインに切り替えてみてください。
          </p>
        </div>

        <div className={pageStyles.windowWidthCard}>
          <h2 className={commonStyles.cardTitle}>ウィンドウ幅</h2>
          <div className={pageStyles.windowWidthText}>{width}px</div>
          <p className={`${pageStyles.textSmGray600} ${pageStyles.mt2}`}>
            ウィンドウサイズを変更すると即座に反映されます。
          </p>
        </div>
      </div>
    </div>
  );
}

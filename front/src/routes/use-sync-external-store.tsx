import { createFileRoute } from "@tanstack/react-router";
import { useSyncExternalStore } from "react";

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
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">useSyncExternalStore Demo</h1>
      <p className="mb-6">
        useSyncExternalStoreは、React外部のストア（ブラウザAPI、Redux、Zustandなど）を
        ティアリング（表示の不整合）なしに購読するためのフックです。
      </p>

      <div className="grid gap-6">
        <div
          className={`p-6 rounded-lg border-2 ${isOnline ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"}`}
        >
          <h2 className="text-xl font-bold mb-2">ネットワーク状態</h2>
          <div className="flex items-center gap-2">
            <div
              className={`w-4 h-4 rounded-full ${isOnline ? "bg-green-500" : "bg-red-500"}`}
            ></div>
            <span className="text-lg">
              {isOnline ? "オンライン" : "オフライン"}
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            開発者ツールのNetworkタブでオフラインに切り替えてみてください。
          </p>
        </div>

        <div className="p-6 rounded-lg border border-blue-200 bg-blue-50">
          <h2 className="text-xl font-bold mb-2">ウィンドウ幅</h2>
          <div className="text-4xl font-mono text-blue-600">{width}px</div>
          <p className="text-sm text-gray-600 mt-2">
            ウィンドウサイズを変更すると即座に反映されます。
          </p>
        </div>
      </div>
    </div>
  );
}

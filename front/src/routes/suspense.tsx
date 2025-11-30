import { createFileRoute } from "@tanstack/react-router";
import { Suspense, useState, use } from "react";
import * as styles from "@/styles/demos.css";

export const Route = createFileRoute("/suspense")({
  component: SuspenseDemo,
});

// データ取得をシミュレートする関数
// React 19の 'use' APIに対応するため、Promiseを返す
const fetchData = (delay: number) => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`データ取得完了 (${delay}ms)`);
    }, delay);
  });
};

// Promiseをキャッシュするための簡易的な仕組み
const promiseCache = new Map<string, Promise<string>>();

function getCachedData(key: string, delay: number) {
  if (!promiseCache.has(key)) {
    promiseCache.set(key, fetchData(delay));
  }
  return promiseCache.get(key)!;
}

function DataComponent({ delay }: { delay: number }) {
  // React 19の 'use' フックでPromiseを解決
  const data = use(getCachedData(`data-${delay}`, delay));
  return <div className={styles.dataComponent}>{data}</div>;
}

function SuspenseDemo() {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Suspense Demo</h1>
      <p className={styles.description}>
        Suspenseを使うと、コンポーネントの準備（データ取得など）ができあがるまで、
        代替のUI（ローディング表示）を見せることができます。
      </p>

      <button
        onClick={() => setShow((prev) => !prev)}
        className={`${styles.button} ${styles.mb6}`}
      >
        {show ? "リセット" : "データを読み込む"}
      </button>

      {show && (
        <div className={styles.stack}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>コンポーネント 1 (1秒遅延)</h3>
            <Suspense
              fallback={<div className={styles.fallback}>読み込み中...</div>}
            >
              <DataComponent delay={1000} />
            </Suspense>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>コンポーネント 2 (3秒遅延)</h3>
            <Suspense
              fallback={<div className={styles.fallback}>読み込み中...</div>}
            >
              <DataComponent delay={3000} />
            </Suspense>
          </div>
        </div>
      )}
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Suspense, use, useState } from "react";
import * as commonStyles from "@/styles/demos.css";
import * as pageStyles from "@/styles/suspense.css";

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
  return promiseCache.get(key) as Promise<string>;
}

function DataComponent({ delay }: { delay: number }) {
  // React 19の 'use' フックでPromiseを解決
  const data = use(getCachedData(`data-${delay}`, delay));
  return <div className={pageStyles.dataComponent}>{data}</div>;
}

function SuspenseDemo() {
  const [show, setShow] = useState(false);

  return (
    <div className={commonStyles.container}>
      <h1 className={commonStyles.title}>Suspense Demo</h1>
      <p className={commonStyles.description}>
        Suspenseを使うと、コンポーネントの準備（データ取得など）ができあがるまで、
        代替のUI（ローディング表示）を見せることができます。
      </p>

      <button
        type="button"
        onClick={() => setShow((prev) => !prev)}
        className={`${commonStyles.button} ${pageStyles.mb6}`}
      >
        {show ? "リセット" : "データを読み込む"}
      </button>

      {show && (
        <div className={pageStyles.stack}>
          <div className={commonStyles.card}>
            <h3 className={commonStyles.cardTitle}>
              コンポーネント 1 (1秒遅延)
            </h3>
            <Suspense
              fallback={
                <div className={pageStyles.fallback}>読み込み中...</div>
              }
            >
              <DataComponent delay={1000} />
            </Suspense>
          </div>

          <div className={commonStyles.card}>
            <h3 className={commonStyles.cardTitle}>
              コンポーネント 2 (3秒遅延)
            </h3>
            <Suspense
              fallback={
                <div className={pageStyles.fallback}>読み込み中...</div>
              }
            >
              <DataComponent delay={3000} />
            </Suspense>
          </div>
        </div>
      )}
    </div>
  );
}

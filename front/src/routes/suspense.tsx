import { createFileRoute } from "@tanstack/react-router";
import { Suspense, useState, use } from "react";

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
  return (
    <div className="p-4 border rounded bg-green-50 text-green-800">{data}</div>
  );
}

function SuspenseDemo() {
  const [show, setShow] = useState(false);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Suspense Demo</h1>
      <p className="mb-4">
        Suspenseを使うと、コンポーネントの準備（データ取得など）ができあがるまで、
        代替のUI（ローディング表示）を見せることができます。
      </p>

      <button
        onClick={() => setShow((prev) => !prev)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-6"
      >
        {show ? "リセット" : "データを読み込む"}
      </button>

      {show && (
        <div className="space-y-4">
          <div className="border p-4 rounded">
            <h3 className="font-bold mb-2">コンポーネント 1 (1秒遅延)</h3>
            <Suspense
              fallback={
                <div className="p-4 bg-gray-100 animate-pulse">
                  読み込み中...
                </div>
              }
            >
              <DataComponent delay={1000} />
            </Suspense>
          </div>

          <div className="border p-4 rounded">
            <h3 className="font-bold mb-2">コンポーネント 2 (3秒遅延)</h3>
            <Suspense
              fallback={
                <div className="p-4 bg-gray-100 animate-pulse">
                  読み込み中...
                </div>
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

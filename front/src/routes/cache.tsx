import { createFileRoute } from "@tanstack/react-router";
import { useState, Suspense } from "react";
// @ts-ignore
import { cache } from "react";

export const Route = createFileRoute("/cache")({
  component: CacheDemo,
});

// 通常の関数: 呼び出すたびに実行される
const getRandomNormal = () => {
  console.log("getRandomNormal called");
  return Math.random();
};

// キャッシュされた関数: 同じ入力なら結果を再利用（Server ComponentsでのRequestスコープ）
// クライアントサイドでの動作は環境によるが、React 19では実験的に使用可能
const getRandomCached = cache(() => {
  console.log("getRandomCached called");
  return Math.random();
});

function RandomValue({
  type,
  getValue,
}: {
  type: string;
  getValue: () => number;
}) {
  const value = getValue();
  return (
    <div className="p-2 border rounded mb-2">
      <span className="font-bold">{type}:</span> {value}
    </div>
  );
}

function CacheDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">cache Demo (React 19)</h1>
      <p className="mb-6">
        cacheは、データ取得関数などをメモ化するためのAPIです。 主にServer
        Componentsで使用され、同一リクエスト内での重複したデータ取得を防ぎます。
      </p>

      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded mb-6">
        <p className="text-sm">
          注意: cacheは主にServer Components向けの機能です。
          クライアントコンポーネントでの動作は、レンダリングフェーズ内での共有などに限定される場合があります。
        </p>
      </div>

      <button
        onClick={() => setCount((c) => c + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-6"
      >
        再レンダリング (Count: {count})
      </button>

      <div className="grid grid-cols-2 gap-6">
        <div className="border p-4 rounded">
          <h3 className="font-bold mb-4">通常の関数</h3>
          <p className="text-sm text-gray-500 mb-2">
            コンポーネントごとに異なる値になる（または再レンダリングで変わる）
          </p>
          <RandomValue type="Component 1" getValue={getRandomNormal} />
          <RandomValue type="Component 2" getValue={getRandomNormal} />
        </div>

        <div className="border p-4 rounded">
          <h3 className="font-bold mb-4">cacheされた関数</h3>
          <p className="text-sm text-gray-500 mb-2">
            同一レンダリングパス内であれば同じ値を返すことが期待されます
          </p>
          {/* 
            注意: クライアントサイドのcacheの挙動は複雑で、
            Strict Modeでは2回呼ばれるなどの挙動が見られる可能性があります。
          */}
          <RandomValue type="Component 1" getValue={getRandomCached} />
          <RandomValue type="Component 2" getValue={getRandomCached} />
        </div>
      </div>
    </div>
  );
}

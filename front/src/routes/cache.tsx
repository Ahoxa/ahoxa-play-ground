import { createFileRoute } from "@tanstack/react-router";
import { cache, useState } from "react";
import * as styles from "@/styles/cache.css";

export const Route = createFileRoute("/cache")({
  component: CacheDemo,
});

// 通常の関数: 呼び出すたびに実行される
const getRandomNormal = () => {
  console.log("getRandomNormal called");
  return Math.random();
};

// キャッシュされた関数: 同じ入力なら結果を再利用（Server ComponentsでのRequestスコープ）
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
    <div className={styles.valueBox}>
      <span className={styles.boldText}>{type}:</span> {value}
    </div>
  );
}

function CacheDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>cache Demo (React 19)</h1>
      <p className={styles.description}>
        cacheは、データ取得関数などをメモ化するためのAPIです。 主にServer
        Componentsで使用され、同一リクエスト内での重複したデータ取得を防ぎます。
      </p>

      <div className={styles.warningBox}>
        <p className={styles.smallText}>
          注意: cacheは主にServer Components向けの機能です。
          クライアントコンポーネントでの動作は、レンダリングフェーズ内での共有などに限定される場合があります。
        </p>
      </div>

      <button
        type="button"
        onClick={() => setCount((c) => c + 1)}
        className={styles.button}
      >
        再レンダリング (Count: {count})
      </button>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>通常の関数</h3>
          <p className={styles.cardDescription}>
            コンポーネントごとに異なる値になる（または再レンダリングで変わる）
          </p>
          <RandomValue type="Component 1" getValue={getRandomNormal} />
          <RandomValue type="Component 2" getValue={getRandomNormal} />
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>cacheされた関数</h3>
          <p className={styles.cardDescription}>
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

import { createFileRoute } from "@tanstack/react-router";
import { useDeferredValue, useState, memo } from "react";
import * as styles from "@/styles/demos.css";

export const Route = createFileRoute("/use-deferred-value")({
  component: DeferredValueDemo,
});

// 重いコンポーネント
const HeavyList = memo(({ text }: { text: string }) => {
  const items = [];
  // 意図的に重くする
  const startTime = performance.now();
  while (performance.now() - startTime < 20) {
    // 20msブロック
  }

  for (let i = 0; i < 50; i++) {
    items.push(
      <li key={i} className={styles.listItem}>
        Item {i}: {text}
      </li>
    );
  }

  return <ul className={styles.heavyList}>{items}</ul>;
});

function DeferredValueDemo() {
  const [text, setText] = useState("");
  // 入力値の遅延バージョンを作成
  // これにより、入力フィールドの更新（text）は即座に行われ、
  // 重いリストの更新（deferredText）は後回しにされる
  const deferredText = useDeferredValue(text);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>useDeferredValue Demo</h1>
      <p className={styles.description}>
        useDeferredValueを使うと、UIの一部の更新を遅延させることができます。
        重い処理があっても、入力フィールドなどのレスポンスを維持できます。
      </p>

      <div className={styles.mb6}>
        <label className={styles.label}>
          何か入力してください（リストの更新は遅延します）:
        </label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={styles.input}
          placeholder="Type here..."
        />
      </div>

      <div className={styles.twoColumnGrid}>
        <div>
          <h3 className={`${styles.cardTitle} ${styles.textBlue600}`}>
            即時反映 (text)
          </h3>
          <p className={styles.textSmGray500}>入力と同時に更新されます</p>
          <div className={`${styles.mt2} ${styles.card} ${styles.bgBlue50}`}>
            {text || "..."}
          </div>
        </div>

        <div>
          <h3 className={`${styles.cardTitle} ${styles.textGreen600}`}>
            遅延反映 (deferredText)
          </h3>
          <p className={styles.textSmGray500}>
            レンダリングの準備ができてから更新されます
          </p>
          <div
            className={`${styles.mt2} ${styles.card} ${styles.bgGreen50}`}
            style={{ opacity: text !== deferredText ? 0.5 : 1 }}
          >
            {deferredText || "..."}
          </div>
        </div>
      </div>

      <div className={styles.mt8}>
        <h3 className={styles.cardTitle}>重いリストのレンダリング結果:</h3>
        <HeavyList text={deferredText} />
      </div>
    </div>
  );
}

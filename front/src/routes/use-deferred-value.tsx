import { createFileRoute } from "@tanstack/react-router";
import { memo, useDeferredValue, useId, useState } from "react";
import * as commonStyles from "@/styles/demos.css";
import * as pageStyles from "@/styles/use-deferred-value.css";

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
      <li key={i} className={pageStyles.listItem}>
        Item {i}: {text}
      </li>
    );
  }

  return <ul className={pageStyles.heavyList}>{items}</ul>;
});

function DeferredValueDemo() {
  const [text, setText] = useState("");
  // 入力値の遅延バージョンを作成
  // これにより、入力フィールドの更新（text）は即座に行われ、
  // 重いリストの更新（deferredText）は後回しにされる
  const deferredText = useDeferredValue(text);
  const inputId = useId();

  return (
    <div className={commonStyles.container}>
      <h1 className={commonStyles.title}>useDeferredValue Demo</h1>
      <p className={commonStyles.description}>
        useDeferredValueを使うと、UIの一部の更新を遅延させることができます。
        重い処理があっても、入力フィールドなどのレスポンスを維持できます。
      </p>

      <div className={pageStyles.mb6}>
        <label htmlFor={inputId} className={commonStyles.label}>
          何か入力してください（リストの更新は遅延します）:
        </label>
        <input
          id={inputId}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={commonStyles.input}
          placeholder="Type here..."
        />
      </div>

      <div className={pageStyles.twoColumnGrid}>
        <div>
          <h3 className={`${commonStyles.cardTitle} ${pageStyles.textBlue600}`}>
            即時反映 (text)
          </h3>
          <p className={pageStyles.textSmGray500}>入力と同時に更新されます</p>
          <div
            className={`${pageStyles.mt2} ${commonStyles.card} ${pageStyles.bgBlue50}`}
          >
            {text || "..."}
          </div>
        </div>

        <div>
          <h3
            className={`${commonStyles.cardTitle} ${pageStyles.textGreen600}`}
          >
            遅延反映 (deferredText)
          </h3>
          <p className={pageStyles.textSmGray500}>
            レンダリングの準備ができてから更新されます
          </p>
          <div
            className={`${pageStyles.mt2} ${commonStyles.card} ${pageStyles.bgGreen50}`}
            style={{ opacity: text !== deferredText ? 0.5 : 1 }}
          >
            {deferredText || "..."}
          </div>
        </div>
      </div>

      <div className={pageStyles.mt8}>
        <h3 className={commonStyles.cardTitle}>
          重いリストのレンダリング結果:
        </h3>
        <HeavyList text={deferredText} />
      </div>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Activity, useState } from "react";
import * as styles from "@/styles/activity.css";

export const Route = createFileRoute("/activity")({
  component: ActivityDemo,
});

function Counter({ name }: { name: string }) {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{name}</h3>
      <p className={styles.countText}>{count}</p>
      <button
        type="button"
        onClick={() => setCount((c) => c + 1)}
        className={styles.incrementButton}
      >
        +1
      </button>
    </div>
  );
}

function ActivityDemo() {
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");
  const [mode, setMode] = useState<"standard" | "activity">("activity");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Activity Demo (React 19)</h1>
      <p className={styles.description}>
        Activity（旧
        Offscreen）を使うと、コンポーネントをアンマウントせずに非表示にできます。
        これにより、状態（State）を維持したままUIを切り替えることができます。
      </p>

      <div className={styles.controlPanel}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={mode === "activity"}
            onChange={(e) =>
              setMode(e.target.checked ? "activity" : "standard")
            }
            className={styles.checkbox}
          />
          <span className={styles.boldText}>Activityモードを有効にする</span>
        </label>
        <p className={styles.noteText}>
          無効にすると通常の条件付きレンダリングになり、タブ切り替えでカウンターがリセットされます。
        </p>
      </div>

      <div className={styles.tabContainer}>
        <button
          type="button"
          className={`${styles.tabButton} ${activeTab === "A" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("A")}
        >
          Tab A
        </button>
        <button
          type="button"
          className={`${styles.tabButton} ${activeTab === "B" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("B")}
        >
          Tab B
        </button>
      </div>

      <div className={styles.contentArea}>
        {mode === "activity" ? (
          // Activityモード: 両方レンダリングされるが、片方はhiddenになる
          <>
            <Activity mode={activeTab === "A" ? "visible" : "hidden"}>
              <Counter name="Counter A (Activity)" />
            </Activity>
            <Activity mode={activeTab === "B" ? "visible" : "hidden"}>
              <Counter name="Counter B (Activity)" />
            </Activity>
          </>
        ) : (
          // 通常モード: 片方だけレンダリングされる（アンマウントされる）
          <>
            {activeTab === "A" && <Counter name="Counter A (Standard)" />}
            {activeTab === "B" && <Counter name="Counter B (Standard)" />}
          </>
        )}
      </div>
    </div>
  );
}

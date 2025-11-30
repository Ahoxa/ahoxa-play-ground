import { createFileRoute } from "@tanstack/react-router";
import { useId } from "react";
import * as commonStyles from "@/styles/demos.css";
import * as pageStyles from "@/styles/use-id.css";

export const Route = createFileRoute("/use-id")({
  component: UseIdDemo,
});

function FormField({ label }: { label: string }) {
  const id = useId();

  return (
    <div className={pageStyles.mb4}>
      <label htmlFor={id} className={pageStyles.label}>
        {label} (ID: <code className={commonStyles.code}>{id}</code>)
      </label>
      <input
        id={id}
        type="text"
        className={commonStyles.input}
        aria-describedby={`${id}-hint`}
      />
      <p id={`${id}-hint`} className={pageStyles.hint}>
        このフィールドのヘルプテキストもID ({id}-hint) で紐付けられています。
      </p>
    </div>
  );
}

function UseIdDemo() {
  return (
    <div className={commonStyles.container}>
      <h1 className={commonStyles.title}>useId Demo</h1>
      <p className={commonStyles.description}>
        useIdは、アクセシビリティ属性のために一意なIDを生成するフックです。
        SSR（サーバーサイドレンダリング）とクライアントサイドでIDが一致することを保証します。
      </p>

      <div className={`${commonStyles.card} ${pageStyles.shadowSm}`}>
        <h2 className={commonStyles.cardTitle}>フォーム例</h2>
        <FormField label="ユーザー名" />
        <FormField label="メールアドレス" />

        <div className={commonStyles.noteBox}>
          <p>
            <strong>ポイント:</strong>
            コンポーネントを何度再利用しても、それぞれにユニークなIDが割り当てられます。
            これにより、labelのhtmlForとinputのidが正しく紐付き、スクリーンリーダーなどが正しく動作します。
          </p>
        </div>
      </div>
    </div>
  );
}

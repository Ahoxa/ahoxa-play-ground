import { createFileRoute } from "@tanstack/react-router";
import { useId } from "react";

export const Route = createFileRoute("/use-id")({
  component: UseIdDemo,
});

function FormField({ label }: { label: string }) {
  const id = useId();

  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label} (ID: <code className="bg-gray-100 px-1 rounded">{id}</code>)
      </label>
      <input
        id={id}
        type="text"
        className="w-full p-2 border rounded border-gray-300"
        aria-describedby={`${id}-hint`}
      />
      <p id={`${id}-hint`} className="text-xs text-gray-500 mt-1">
        このフィールドのヘルプテキストもID ({id}-hint) で紐付けられています。
      </p>
    </div>
  );
}

function UseIdDemo() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">useId Demo</h1>
      <p className="mb-6">
        useIdは、アクセシビリティ属性のために一意なIDを生成するフックです。
        SSR（サーバーサイドレンダリング）とクライアントサイドでIDが一致することを保証します。
      </p>

      <div className="border p-6 rounded-lg bg-white shadow-sm">
        <h2 className="text-xl font-semibold mb-4">フォーム例</h2>
        <FormField label="ユーザー名" />
        <FormField label="メールアドレス" />

        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded text-sm">
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

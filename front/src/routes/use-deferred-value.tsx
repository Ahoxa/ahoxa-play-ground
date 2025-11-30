import { createFileRoute } from "@tanstack/react-router";
import { useDeferredValue, useState, memo } from "react";

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
      <li key={i} className="py-1 border-b">
        Item {i}: {text}
      </li>
    );
  }

  return <ul className="mt-4 h-64 overflow-auto border p-2">{items}</ul>;
});

function DeferredValueDemo() {
  const [text, setText] = useState("");
  // 入力値の遅延バージョンを作成
  // これにより、入力フィールドの更新（text）は即座に行われ、
  // 重いリストの更新（deferredText）は後回しにされる
  const deferredText = useDeferredValue(text);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">useDeferredValue Demo</h1>
      <p className="mb-4">
        useDeferredValueを使うと、UIの一部の更新を遅延させることができます。
        重い処理があっても、入力フィールドなどのレスポンスを維持できます。
      </p>

      <div className="mb-6">
        <label className="block mb-2 font-bold">
          何か入力してください（リストの更新は遅延します）:
        </label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 border rounded border-gray-300"
          placeholder="Type here..."
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold text-blue-600">即時反映 (text)</h3>
          <p className="text-sm text-gray-500">入力と同時に更新されます</p>
          <div className="mt-2 p-2 bg-blue-50 rounded">{text || "..."}</div>
        </div>

        <div>
          <h3 className="font-bold text-green-600">遅延反映 (deferredText)</h3>
          <p className="text-sm text-gray-500">
            レンダリングの準備ができてから更新されます
          </p>
          <div
            className="mt-2 p-2 bg-green-50 rounded opacity-50"
            style={{ opacity: text !== deferredText ? 0.5 : 1 }}
          >
            {deferredText || "..."}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-bold">重いリストのレンダリング結果:</h3>
        <HeavyList text={deferredText} />
      </div>
    </div>
  );
}

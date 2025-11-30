import { createFileRoute } from "@tanstack/react-router";
import { useImperativeHandle, useRef, forwardRef, useState } from "react";

export const Route = createFileRoute("/use-imperative-handle")({
  component: ImperativeHandleDemo,
});

// 公開するメソッドの型定義
interface CustomInputHandle {
  focus: () => void;
  clear: () => void;
  shake: () => void;
}

// 子コンポーネント
const CustomInput = forwardRef<CustomInputHandle, { label: string }>(
  (props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isShaking, setIsShaking] = useState(false);

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
      clear: () => {
        if (inputRef.current) inputRef.current.value = "";
      },
      shake: () => {
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 500);
      },
    }));

    return (
      <div
        className={`transition-transform ${isShaking ? "animate-bounce" : ""}`}
      >
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {props.label}
        </label>
        <input
          ref={inputRef}
          type="text"
          className="w-full p-2 border rounded border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
    );
  }
);

function ImperativeHandleDemo() {
  const inputRef = useRef<CustomInputHandle>(null);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">useImperativeHandle Demo</h1>
      <p className="mb-6">
        useImperativeHandleを使うと、親コンポーネントに対して公開するrefの値をカスタマイズできます。
        DOMノードそのものではなく、特定のメソッドだけを公開したい場合に便利です。
      </p>

      <div className="border p-6 rounded-lg bg-white shadow-sm mb-6">
        <CustomInput ref={inputRef} label="操作される入力フィールド" />
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => inputRef.current?.focus()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          フォーカス
        </button>
        <button
          onClick={() => inputRef.current?.clear()}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          クリア
        </button>
        <button
          onClick={() => inputRef.current?.shake()}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          シェイク
        </button>
      </div>
    </div>
  );
}

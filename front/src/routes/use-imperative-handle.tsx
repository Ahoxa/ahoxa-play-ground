import { createFileRoute } from "@tanstack/react-router";
import {
  forwardRef,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import * as commonStyles from "@/styles/demos.css";
import * as pageStyles from "@/styles/use-imperative-handle.css";

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
    const inputId = useId();

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
        className={`${pageStyles.transitionTransform} ${isShaking ? pageStyles.animateBounce : ""}`}
      >
        <label htmlFor={inputId} className={commonStyles.label}>
          {props.label}
        </label>
        <input
          id={inputId}
          ref={inputRef}
          type="text"
          className={`${commonStyles.input} ${pageStyles.inputFocus}`}
        />
      </div>
    );
  }
);

function ImperativeHandleDemo() {
  const inputRef = useRef<CustomInputHandle>(null);

  return (
    <div className={commonStyles.container}>
      <h1 className={commonStyles.title}>useImperativeHandle Demo</h1>
      <p className={commonStyles.description}>
        useImperativeHandleを使うと、親コンポーネントに対して公開するrefの値をカスタマイズできます。
        DOMノードそのものではなく、特定のメソッドだけを公開したい場合に便利です。
      </p>

      <div
        className={`${commonStyles.card} ${pageStyles.shadowSm} ${pageStyles.mb6}`}
      >
        <CustomInput ref={inputRef} label="操作される入力フィールド" />
      </div>

      <div className={pageStyles.flexGap4}>
        <button
          type="button"
          onClick={() => inputRef.current?.focus()}
          className={commonStyles.button}
        >
          フォーカス
        </button>
        <button
          type="button"
          onClick={() => inputRef.current?.clear()}
          className={`${commonStyles.button} ${pageStyles.buttonGray}`}
        >
          クリア
        </button>
        <button
          type="button"
          onClick={() => inputRef.current?.shake()}
          className={`${commonStyles.button} ${pageStyles.buttonRed}`}
        >
          シェイク
        </button>
      </div>
    </div>
  );
}

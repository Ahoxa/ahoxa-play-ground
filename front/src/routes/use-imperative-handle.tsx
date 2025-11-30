import { createFileRoute } from "@tanstack/react-router";
import { useImperativeHandle, useRef, forwardRef, useState } from "react";
import * as styles from "@/styles/demos.css";

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
        className={`${styles.transitionTransform} ${isShaking ? styles.animateBounce : ""}`}
      >
        <label className={styles.label}>{props.label}</label>
        <input
          ref={inputRef}
          type="text"
          className={`${styles.input} ${styles.inputFocus}`}
        />
      </div>
    );
  }
);

function ImperativeHandleDemo() {
  const inputRef = useRef<CustomInputHandle>(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>useImperativeHandle Demo</h1>
      <p className={styles.description}>
        useImperativeHandleを使うと、親コンポーネントに対して公開するrefの値をカスタマイズできます。
        DOMノードそのものではなく、特定のメソッドだけを公開したい場合に便利です。
      </p>

      <div className={`${styles.card} ${styles.shadowSm} ${styles.mb6}`}>
        <CustomInput ref={inputRef} label="操作される入力フィールド" />
      </div>

      <div className={styles.flexGap4}>
        <button
          onClick={() => inputRef.current?.focus()}
          className={styles.button}
        >
          フォーカス
        </button>
        <button
          onClick={() => inputRef.current?.clear()}
          className={`${styles.button} ${styles.buttonGray}`}
        >
          クリア
        </button>
        <button
          onClick={() => inputRef.current?.shake()}
          className={`${styles.button} ${styles.buttonRed}`}
        >
          シェイク
        </button>
      </div>
    </div>
  );
}

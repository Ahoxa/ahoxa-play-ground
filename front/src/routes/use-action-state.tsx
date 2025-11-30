import { createFileRoute } from "@tanstack/react-router";
import { useActionState, useId } from "react";
import * as styles from "@/styles/use-action-state.css";

export const Route = createFileRoute("/use-action-state")({
  component: ActionStateDemo,
});

// フォームのアクション関数
async function updateName(
  _previousState: { message: string; error: string | null },
  formData: FormData
) {
  const name = formData.get("name") as string;

  // 擬似的な遅延
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!name) {
    return { message: "", error: "名前を入力してください" };
  }

  if (name.length < 3) {
    return { message: "", error: "名前は3文字以上である必要があります" };
  }

  return { message: `こんにちは、${name}さん！`, error: null };
}

function ActionStateDemo() {
  const [state, formAction, isPending] = useActionState(updateName, {
    message: "",
    error: null,
  });
  const nameInputId = useId();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>useActionState Demo (React 19)</h1>
      <p className={styles.description}>
        useActionStateは、フォームアクションの結果に基づいて状態を更新するためのフックです。
        以前はuseFormStateと呼ばれていました。ローディング状態（isPending）も自動的に管理されます。
      </p>

      <form action={formAction} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor={nameInputId} className={styles.label}>
            お名前
          </label>
          <input
            type="text"
            name="name"
            id={nameInputId}
            className={styles.input}
            disabled={isPending}
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className={`${styles.submitButton} ${
            isPending ? styles.submitButtonDisabled : styles.submitButtonActive
          }`}
        >
          {isPending ? "送信中..." : "送信"}
        </button>

        {state.error && (
          <div className={styles.errorMessage}>{state.error}</div>
        )}

        {state.message && (
          <div className={styles.successMessage}>{state.message}</div>
        )}
      </form>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useActionState } from "react";

export const Route = createFileRoute("/use-action-state")({
  component: ActionStateDemo,
});

// フォームのアクション関数
async function updateName(
  previousState: { message: string; error: string | null },
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

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        useActionState Demo (React 19)
      </h1>
      <p className="mb-6">
        useActionStateは、フォームアクションの結果に基づいて状態を更新するためのフックです。
        以前はuseFormStateと呼ばれていました。ローディング状態（isPending）も自動的に管理されます。
      </p>

      <form
        action={formAction}
        className="border p-6 rounded-lg bg-white shadow-sm"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            お名前
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full p-2 border rounded border-gray-300"
            disabled={isPending}
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className={`px-4 py-2 rounded text-white ${
            isPending
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isPending ? "送信中..." : "送信"}
        </button>

        {state.error && (
          <div className="mt-4 p-3 bg-red-50 text-red-700 rounded border border-red-200">
            {state.error}
          </div>
        )}

        {state.message && (
          <div className="mt-4 p-3 bg-green-50 text-green-700 rounded border border-green-200">
            {state.message}
          </div>
        )}
      </form>
    </div>
  );
}

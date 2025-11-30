import { createFileRoute } from "@tanstack/react-router";
import { useOptimistic, useState, useRef } from "react";
import * as commonStyles from "@/styles/demos.css";
import * as pageStyles from "@/styles/use-optimistic.css";

export const Route = createFileRoute("/use-optimistic")({
  component: OptimisticDemo,
});

type Message = {
  id: string;
  text: string;
  sending?: boolean;
};

// サーバーアクションをシミュレート
async function sendMessage(formData: FormData): Promise<Message> {
  const text = formData.get("message") as string;
  
  // ネットワーク遅延をシミュレート
  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  return {
    id: crypto.randomUUID(),
    text,
  };
}

function OptimisticDemo() {
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "こんにちは！" },
    { id: "2", text: "React 19の機能について話しましょう。" },
  ]);
  
  const formRef = useRef<HTMLFormElement>(null);

  // useOptimisticフック
  // 第1引数: 実際の状態 (passthrough state)
  // 第2引数: 楽観的な状態を計算する関数 (reducer)
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state: Message[], newMessage: string) => [
      ...state,
      {
        id: crypto.randomUUID(),
        text: newMessage,
        sending: true,
      },
    ]
  );

  async function formAction(formData: FormData) {
    const text = formData.get("message") as string;
    if (!text) return;

    // 1. 楽観的な更新を即座に適用
    addOptimisticMessage(text);
    
    // フォームをリセット
    formRef.current?.reset();

    // 2. 実際の非同期処理を実行
    const newMessage = await sendMessage(formData);
    
    // 3. 完了後、実際の状態を更新
    setMessages((prev) => [...prev, newMessage]);
  }

  return (
    <div className={commonStyles.container}>
      <h1 className={commonStyles.title}>useOptimistic Demo (React 19)</h1>
      <p className={commonStyles.description}>
        useOptimisticは、非同期アクションの完了を待たずに、UIを即座に更新（楽観的更新）するためのフックです。
        サーバーからのレスポンスを待つ間、ユーザーに快適な操作感を提供できます。
      </p>

      <div className={commonStyles.card}>
        <h2 className={commonStyles.cardTitle}>チャット送信デモ</h2>
        <p className={commonStyles.description}>
          メッセージを送信すると、2秒間の遅延（サーバー処理）がありますが、
          リストには即座に追加されます。送信中のメッセージは薄く表示されます。
        </p>

        <form action={formAction} ref={formRef} className={pageStyles.form}>
          <input
            type="text"
            name="message"
            placeholder="メッセージを入力..."
            className={pageStyles.input}
            required
          />
          <button type="submit" className={commonStyles.button}>
            送信
          </button>
        </form>

        <div className={pageStyles.messageList}>
          {optimisticMessages.map((msg) => (
            <div
              key={msg.id}
              className={`${pageStyles.messageItem} ${
                msg.sending ? pageStyles.optimisticMessage : ""
              }`}
            >
              <span className={pageStyles.messageText}>{msg.text}</span>
              {msg.sending && (
                <span className={pageStyles.messageStatus}>送信中...</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

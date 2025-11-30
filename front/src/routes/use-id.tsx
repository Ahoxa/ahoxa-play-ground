import { createFileRoute } from "@tanstack/react-router";
import { useId } from "react";
import * as styles from "@/styles/demos.css";

export const Route = createFileRoute("/use-id")({
	component: UseIdDemo,
});

function FormField({ label }: { label: string }) {
	const id = useId();

	return (
		<div className={styles.mb4}>
			<label htmlFor={id} className={styles.label}>
				{label} (ID: <code className={styles.code}>{id}</code>)
			</label>
			<input
				id={id}
				type="text"
				className={styles.input}
				aria-describedby={`${id}-hint`}
			/>
			<p id={`${id}-hint`} className={styles.hint}>
				このフィールドのヘルプテキストもID ({id}-hint) で紐付けられています。
			</p>
		</div>
	);
}

function UseIdDemo() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>useId Demo</h1>
			<p className={styles.description}>
				useIdは、アクセシビリティ属性のために一意なIDを生成するフックです。
				SSR（サーバーサイドレンダリング）とクライアントサイドでIDが一致することを保証します。
			</p>

			<div className={`${styles.card} ${styles.shadowSm}`}>
				<h2 className={styles.cardTitle}>フォーム例</h2>
				<FormField label="ユーザー名" />
				<FormField label="メールアドレス" />

				<div className={styles.noteBox}>
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

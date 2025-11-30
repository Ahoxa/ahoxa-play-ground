import { createFileRoute } from "@tanstack/react-router";
import { Activity, useEffect, useState } from "react";

export const Route = createFileRoute("/activity")({
	component: ActivityDemo,
});

function Counter({ name }: { name: string }) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log(`${name} mounted`);
		return () => console.log(`${name} unmounted`);
	}, [name]);

	return (
		<div className="p-4 border rounded bg-white shadow-sm">
			<h3 className="font-bold mb-2">{name}</h3>
			<p className="text-2xl mb-2">{count}</p>
			<button
				type="button"
				onClick={() => setCount((c) => c + 1)}
				className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
			>
				+1
			</button>
		</div>
	);
}

function ActivityDemo() {
	const [activeTab, setActiveTab] = useState<"A" | "B">("A");
	const [mode, setMode] = useState<"standard" | "activity">("activity");

	return (
		<div className="p-8 max-w-2xl mx-auto">
			<h1 className="text-2xl font-bold mb-4">Activity Demo (React 19)</h1>
			<p className="mb-6">
				Activity（旧
				Offscreen）を使うと、コンポーネントをアンマウントせずに非表示にできます。
				これにより、状態（State）を維持したままUIを切り替えることができます。
			</p>

			<div className="mb-6 p-4 bg-gray-50 rounded">
				<label className="flex items-center gap-2 cursor-pointer">
					<input
						type="checkbox"
						checked={mode === "activity"}
						onChange={(e) =>
							setMode(e.target.checked ? "activity" : "standard")
						}
						className="w-5 h-5"
					/>
					<span className="font-bold">Activityモードを有効にする</span>
				</label>
				<p className="text-sm text-gray-600 mt-1 ml-7">
					無効にすると通常の条件付きレンダリングになり、タブ切り替えでカウンターがリセットされます。
				</p>
			</div>

			<div className="flex border-b mb-4">
				<button
					type="button"
					className={`px-4 py-2 ${activeTab === "A" ? "border-b-2 border-blue-500 font-bold" : ""}`}
					onClick={() => setActiveTab("A")}
				>
					Tab A
				</button>
				<button
					type="button"
					className={`px-4 py-2 ${activeTab === "B" ? "border-b-2 border-blue-500 font-bold" : ""}`}
					onClick={() => setActiveTab("B")}
				>
					Tab B
				</button>
			</div>

			<div className="min-h-[200px]">
				{mode === "activity" ? (
					// Activityモード: 両方レンダリングされるが、片方はhiddenになる
					<>
						<Activity mode={activeTab === "A" ? "visible" : "hidden"}>
							<Counter name="Counter A (Activity)" />
						</Activity>
						<Activity mode={activeTab === "B" ? "visible" : "hidden"}>
							<Counter name="Counter B (Activity)" />
						</Activity>
					</>
				) : (
					// 通常モード: 片方だけレンダリングされる（アンマウントされる）
					<>
						{activeTab === "A" && <Counter name="Counter A (Standard)" />}
						{activeTab === "B" && <Counter name="Counter B (Standard)" />}
					</>
				)}
			</div>
		</div>
	);
}

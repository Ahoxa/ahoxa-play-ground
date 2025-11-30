import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  Database,
  Fingerprint,
  Layers,
  Layout,
  Loader,
  MousePointerClick,
  RefreshCw,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const demos = [
    {
      path: "/suspense",
      title: "Suspense",
      description: "データ取得中のローディング表示を宣言的に管理",
      icon: <Loader className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      path: "/use-deferred-value",
      title: "useDeferredValue",
      description: "重いレンダリングを遅延させてUIのレスポンスを維持",
      icon: <Layers className="w-6 h-6" />,
      color: "bg-green-100 text-green-600",
    },
    {
      path: "/use-id",
      title: "useId",
      description: "アクセシビリティ対応の一意なIDを生成",
      icon: <Fingerprint className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      path: "/use-sync-external-store",
      title: "useSyncExternalStore",
      description: "外部ストア（ブラウザAPIなど）との同期",
      icon: <RefreshCw className="w-6 h-6" />,
      color: "bg-orange-100 text-orange-600",
    },
    {
      path: "/use-imperative-handle",
      title: "useImperativeHandle",
      description: "親コンポーネントに公開するrefをカスタマイズ",
      icon: <MousePointerClick className="w-6 h-6" />,
      color: "bg-red-100 text-red-600",
    },
    {
      path: "/use-action-state",
      title: "useActionState",
      description: "フォームアクションの状態管理 (React 19)",
      icon: <Database className="w-6 h-6" />,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      path: "/activity",
      title: "Activity",
      description: "状態を維持したままコンポーネントを非表示 (React 19)",
      icon: <Activity className="w-6 h-6" />,
      color: "bg-teal-100 text-teal-600",
    },
    {
      path: "/cache",
      title: "cache",
      description: "関数の実行結果をメモ化 (React 19)",
      icon: <Layout className="w-6 h-6" />,
      color: "bg-pink-100 text-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            React Hooks Playground
          </h1>
          <p className="text-xl text-gray-600">
            マイナーだけど強力なReact HooksとReact 19の新機能を学ぶ
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {demos.map((demo) => (
            <Link
              key={demo.path}
              to={demo.path}
              className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${demo.color}`}>
                  {demo.icon}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {demo.title}
                  </h2>
                  <p className="text-gray-600">{demo.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

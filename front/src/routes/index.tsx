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
  Zap,
} from "lucide-react";
import * as styles from "@/styles/index.css";

export const Route = createFileRoute("/")({ component: App });

type ColorVariant = keyof typeof styles.iconColors;

function App() {
  const demos: {
    path: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    color: ColorVariant;
    disabled?: boolean;
  }[] = [
    {
      path: "/suspense",
      title: "Suspense",
      description: "データ取得中のローディング表示を宣言的に管理",
      icon: <Loader className="w-6 h-6" />,
      color: "blue",
    },
    {
      path: "/use-deferred-value",
      title: "useDeferredValue",
      description: "重いレンダリングを遅延させてUIのレスポンスを維持",
      icon: <Layers className="w-6 h-6" />,
      color: "green",
    },
    {
      path: "/use-id",
      title: "useId",
      description: "アクセシビリティ対応の一意なIDを生成",
      icon: <Fingerprint className="w-6 h-6" />,
      color: "purple",
    },
    {
      path: "/use-sync-external-store",
      title: "useSyncExternalStore",
      description: "外部ストア（ブラウザAPIなど）との同期",
      icon: <RefreshCw className="w-6 h-6" />,
      color: "orange",
    },
    {
      path: "/use-imperative-handle",
      title: "useImperativeHandle",
      description: "親コンポーネントに公開するrefをカスタマイズ",
      icon: <MousePointerClick className="w-6 h-6" />,
      color: "red",
    },
    {
      path: "/use-action-state",
      title: "useActionState",
      description: "フォームアクションの状態管理 (React 19)",
      icon: <Database className="w-6 h-6" />,
      color: "indigo",
    },
    {
      path: "/use-optimistic",
      title: "useOptimistic",
      description: "非同期アクション中の楽観的UI更新 (React 19)",
      icon: <Zap className="w-6 h-6" />,
      color: "orange",
    },
    {
      path: "/activity",
      title: "Activity",
      description: "状態を維持したままコンポーネントを非表示 (React 19)",
      icon: <Activity className="w-6 h-6" />,
      color: "teal",
    },
    {
      path: "/cache",
      title: "cache",
      description: "準備中",
      icon: <Layout className="w-6 h-6" />,
      color: "pink",
      disabled: true,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>React Playground</h1>
          <h3 className={styles.author}>by Ahoxa</h3>
          <p className={styles.subtitle}>
            Reactの気になる新機能やフックを試せるデモ集。少し解説もする。
          </p>
        </header>

        <div className={styles.grid}>
          {demos.map((demo) => {
            const content = (
              <div className={styles.cardContent}>
                <div
                  className={`${styles.iconWrapper} ${styles.iconColors[demo.color]}`}
                >
                  {demo.icon}
                </div>
                <div>
                  <h2 className={styles.cardTitle}>{demo.title}</h2>
                  <p className={styles.cardDescription}>{demo.description}</p>
                </div>
              </div>
            );

            if (demo.disabled) {
              return (
                <div key={demo.path} className={styles.cardDisabled}>
                  {content}
                </div>
              );
            }

            return (
              <Link key={demo.path} to={demo.path} className={styles.card}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

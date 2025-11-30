# React Hooks Playground

React 19の新機能や、あまり知られていない強力なReact Hooksを学ぶためのプレイグラウンドプロジェクトです。

## プロジェクト概要

このプロジェクトは、Reactの最新機能や特定のユースケースで役立つHooksの動作を、実際に動くデモを通じて理解することを目的としています。

## 技術スタック

- **Framework**: React 19
- **Routing**: [TanStack Router](https://tanstack.com/router)
- **Styling**: [Vanilla Extract](https://vanilla-extract.style/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Linting/Formatting**: [Biome](https://biomejs.dev/)
- **Runtime**: [Bun](https://bun.sh/)

## デモ一覧

### React 19 新機能

- **useActionState**: フォームアクションの状態管理（旧 `useFormState`）。
- **Activity**: コンポーネントの状態を維持したまま非表示にする機能（旧 `Offscreen`）。
- **cache**: 関数の実行結果をメモ化（現在は準備中）。

### Advanced Hooks

- **Suspense**: データ取得中のローディング表示を宣言的に管理。
- **useDeferredValue**: 重いレンダリングを遅延させてUIのレスポンスを維持。
- **useId**: アクセシビリティ対応の一意なIDを生成。
- **useSyncExternalStore**: 外部ストア（ブラウザAPIなど）との同期。
- **useImperativeHandle**: 親コンポーネントに公開するrefをカスタマイズ。

## 開発の始め方

```bash
# 依存関係のインストール
bun install

# 開発サーバーの起動
bun --bun run dev
```

## ビルド

```bash
bun --bun run build
```

## プロジェクト構造

```
front/
  ├── src/
  │   ├── routes/          # 各デモページのコンポーネント
  │   ├── styles/          # Vanilla Extractによるスタイル定義
  │   ├── components/      # 共通コンポーネント
  │   └── ...
  ├── biome.json           # Biome設定
  └── vite.config.ts       # Vite設定
```

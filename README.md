# thai-idol-site

About Thai Idol Media

## サイト概要

このリポジトリは **Thai Idol Media** のWebサイト用プロジェクトです。  
タイのアイドル情報を中心に、ニュース・イベント・出演情報などを発信し、
ファンが最新情報を見つけやすい構成を目指しています。

想定している主な役割は以下のとおりです。

- Thai Idol Media の活動内容やブランド情報の紹介
- タイのアイドルに関する更新情報の掲載
- ファン向けの導線（記事閲覧、SNS連携、告知確認など）の提供

今後、運用に合わせてコンテンツやページ構成を拡張していく前提のサイトです。

## GitHub Pages 公開設定（`/thai-idol-site/`）

このプロジェクトは GitHub Pages 配下 (`https://<user>.github.io/thai-idol-site/`) で配信できるよう、
`next.config.ts` を static export 向けに設定しています。

- `output: "export"`（静的書き出し）
- `trailingSlash: true`
- `images.unoptimized: true`
- GitHub Actions 実行時のみ:
  - `basePath: "/thai-idol-site"`
  - `assetPrefix: "/thai-idol-site/"`

### 公開手順（GitHub Pages）

1. リポジトリの **Settings > Pages** を開く
2. **Build and deployment** の Source を **GitHub Actions** に設定
3. ルートに `.github/workflows/deploy-pages.yml` を作成し、Next.js の build/export 結果 (`out/`) を Pages へデプロイ
4. `main` ブランチへ push
5. Actions 完了後、`https://<user>.github.io/thai-idol-site/` にアクセス

### ローカル確認

- 通常開発: `npm run dev`
- 静的書き出し確認: `npm run build`（`out/` が生成されます）

> 補足: Pages は Node サーバーを動かさないため、Next.js は `output: "export"` で静的配信します。

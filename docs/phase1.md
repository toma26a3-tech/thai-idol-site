# Phase1 Reimplementation

## 実装内容
- JSON分離: `data/portal.json`, `data/core.json` を作成し UIデータを分離。
- `/admin`: データ件数確認ページを追加。
- `imageUrl`運用: 画像プレースホルダから `imageUrl` に統一。
- Navigation Portal UI: Heroカルーセル、ランキング、ピックアップ、誕生日、ニュース、特集を実装。
- Labページ: ナビゲーション内で独立表示。
- 画像量増加 / idolnavi風カード密度: ホームを画像中心の高密度カード構成へ変更。

## 非機能要件
- GitHub Pages workflow (`.github/workflows/deploy-pages.yml`) は未変更。
- conflict marker チェック実施。
- `npm run build` 成功。

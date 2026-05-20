# how to add idol

1. `/admin` の `Idol` タブでテンプレートJSONを生成します。
2. `data/idols.json` に追加します。
3. 画像を `public/images/idols/` に追加し、`imageUrl` を合わせます。
4. `socialLinks` はJSON文字列で入力します。
   - 例: `{"x":true,"instagram":true,"youtube":false}`
5. commit / push 後、GitHub Pagesへ反映されます。

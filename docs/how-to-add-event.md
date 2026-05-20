# how to add event

1. `/admin` を開き、`Event` タブで必要項目を入力します。
2. `Copy JSON` を押して、生成されたJSONをコピーします。
3. `data/events.json` に1件追加します（カンマ位置に注意）。
4. `imageUrl` を必ず設定します（例: `/images/events/new-event.jpg`）。
5. `sourceUrl` と `lastCheckedAt` は必須です。
6. 画像を `public/images/events/` に追加します。
7. GitHub に commit / push します。
8. Actions（Pages deploy）成功後に公開へ反映されます。

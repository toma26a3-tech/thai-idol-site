# ThaIdol.info — デザインシステム v2.0
**Art Direction: Bangkok Underground Idol Scene Guide**

---

## 1. 新デザインコンセプト

### コアコンセプト
**"Bangkok After Dark"**

バンコクの深夜、汗と煙とネオンが混じるライブハウス。
チラシが貼られたコンクリートの壁。地下へ降りる階段。
そこで鳴り響く日本式地下アイドルの音。

このサイトはそのシーンへの入り口だ。

### 3つの柱
1. **Underground** — 商業的に洗練されすぎない。手触りがある。
2. **Urban Bangkok** — BoilerRoom × タイ夜市 × 日本地下アイドル
3. **Information First** — フライヤー的な情報密度と優先順位

---

## 2. 新UIトーン

| 要素 | 旧 | 新 |
|---|---|---|
| 全体感 | アイドルファンサイト | 都市型カルチャーガイド |
| 色温度 | 明るい・昼間 | 暗い・夜 |
| フォント感 | 丸い・柔らかい | 角張った・タイト |
| カード感 | 紹介カード | フライヤー・ポスター |
| バッジ | 多い・カラフル | 最小限・モノクロ |
| 余白 | 詰まっている | 呼吸している |
| 主役 | アイドル個人 | ライブイベント |

---

## 3. アートディレクション

### 参照する世界観の要素抽出

**Boiler Room** → 全黒背景 / モノクロ写真 / タイトなタイポグラフィ / 時刻大きく
**Resident Advisor** → 情報密度の高い誌面感 / グリッド / uppercase
**AVYSS** → 日本インディー / ZINE感 / ざらざら質感 / 白黒ベース
**ライブフライヤー文化** → 日付大 / 会場大 / 出演者中 / 価格小

### ビジュアルモチーフ
- コンクリート壁のテクスチャ
- ネオンサイン（タイ語混じり）
- ライブフライヤーのコラージュ感
- フィルム写真的なグレイン
- タイ文字と日本語が混在する掲示板

---

## 4. カラーパレット

```
/* === DARK BASE === */
--bg-void:        #080808;   /* 最暗部: ほぼ黒 */
--bg-base:        #111111;   /* ページ背景 */
--bg-surface:     #1A1A1A;   /* カード背景 */
--bg-elevated:    #242424;   /* hover/active */
--bg-overlay:     #2E2E2E;   /* モーダル等 */

/* === TEXT === */
--text-primary:   #F0EDE8;   /* オフホワイト(温かみあり) */
--text-secondary: #A8A49E;   /* ミドルグレー */
--text-muted:     #5C5855;   /* 薄い */
--text-inverted:  #111111;   /* 白背景上のテキスト */

/* === ACCENT === */
--accent-neon:    #FF1F6E;   /* ネオンピンク(抑えたマゼンタ) */
--accent-cyan:    #00E5C8;   /* シアン/ターコイズ */
--accent-lime:    #C8F135;   /* ライムグリーン */
--accent-gold:    #D4A853;   /* タイゴールド(補助) */

/* === BORDERS === */
--border-subtle:  #2A2A2A;   /* カード境界 */
--border-mid:     #3D3D3D;   /* セパレータ */
--border-strong:  #5C5C5C;   /* 強調ボーダー */

/* === FUNCTIONAL === */
--status-live:    #FF1F6E;   /* 開催中/今日 */
--status-soon:    #C8F135;   /* 近日 */
--status-ended:   #3D3D3D;   /* 終了 */
```

### カラーの使用ルール
- **ネオンピンク**: CTAボタン、今日/開催中ラベル、重要アクション。1画面1〜2箇所まで。
- **シアン**: Google Mapリンク、ナビゲーションアクティブ。ネオンと併用しない。
- **ライム**: 無料イベント、BEGINNER バッジのみ。
- **ゴールド**: タイ語アクセント、日付数字のみ。使いすぎ厳禁。
- **グレースケール**: テキスト情報の95%はここで完結させる。

---

## 5. タイポグラフィ設計

### フォントスタック

```css
/* Display / 見出し */
font-family: 'Inter', sans-serif;
font-weight: 700-900;
letter-spacing: -0.02em; /* タイト */
text-transform: uppercase; /* 英語見出しはUPPER */

/* Body / 本文 */
font-family: 'IBM Plex Sans Thai', 'Noto Sans JP', sans-serif;
font-weight: 400;
line-height: 1.7;

/* Mono / 時刻・ID */
font-family: 'IBM Plex Mono', monospace;
font-weight: 400;
letter-spacing: 0.05em;
```

### タイポグラフィスケール

| 用途 | サイズ | Weight | 変換 | 例 |
|---|---|---|---|---|
| Hero大見出し | 32-40px | 900 | UPPER | TONIGHT IN BANGKOK |
| セクション見出し | 11px | 700 | UPPER+間隔 | UPCOMING EVENTS |
| イベント名 | 14-16px | 700 | そのまま | Candy Parade |
| 時刻（大） | 28-36px | 300 | Mono | 18:00 |
| ラベル | 9-10px | 500 | UPPER | VENUE / DATE |
| 本文 | 12-13px | 400 | | 説明テキスト |
| バッジ | 9px | 600 | UPPER | FREE / BEGINNER |

### タイポグラフィルール
- 英語の見出しは原則 UPPERCASE
- セクションタイトルは `letter-spacing: 0.15em` で広げる
- 時刻・日付は `font-feature-settings: "tnum"` で等幅数字
- タイ語は `IBM Plex Sans Thai` を優先
- 本文の行間は `1.7` 以上を確保

---

## 6. Hero再設計

### コンセプト: "Tonight in Bangkok"

```
┌─────────────────────────────────────┐
│ [grain texture overlay]              │
│                                      │
│  ████████████████████               │
│  BANGKOK                            │  ← 細いgrain、暗いグラデ背景
│  UNDERGROUND                        │
│  IDOL SCENE                         │
│                                      │
│  バンコク地下アイドルシーンの入口      │
│                                      │
│  ─────────────────────              │
│                                      │
│  TODAY  ●  3 EVENTS                 │  ← ライブなし/ありで変動
│                                      │
│  [ 今夜のライブを見る ──────────── ] │  ← フルwidth CTA
│                                      │
└─────────────────────────────────────┘
```

### 実装方針
- 背景: 深い黒 + SVGノイズテクスチャ + 微細なグラデーション
- アイドル個人写真: **一切使わない**
- フォント: 極太 condensed uppercase
- 今夜のライブ件数をリアルタイム感で表示
- CTAボタン: フルwidth、ネオンピンク border + テキスト（背景は透明 or 黒）

---

## 7. イベントカード再設計

### コンセプト: "Live Flyer"

#### 旧カード（廃止）
```
[カード]
日付円 | タイトル | バッジ群 | グループアイコン | 価格 | ボタン
```

#### 新カード（採用）
```
┌─────────────────────────────────────┐
│ SAT 17  ─────────────────  18:00   │  ← 日付+曜日(左大) / 時刻(右大)
│─────────────────────────────────────│
│ CANDY PARADE                        │  ← イベント名 UPPER 大
│ Spring Edition                      │  ← サブタイトル 小
│                                      │
│ RCA Plaza  Bangkok                  │  ← 会場 目立つ
│ [Map →]                             │  ← シアンテキストリンク
│                                      │
│ SugarBite  Candy Pop               │  ← 出演者 カンマ区切り
│─────────────────────────────────────│
│ 300–500 THB          [TICKET →]    │  ← 価格弱め / CTAシンプル
└─────────────────────────────────────┘
```

### カードのデザイン原則
- 背景: `#1A1A1A` (surface)
- ボーダー: `1px solid #2A2A2A`
- 区切り線: `border-top: 1px solid #2A2A2A`
- ホバー: `background: #242424` (subtle)
- 今日のイベント: 左端に `2px solid var(--accent-neon)` のboeder-leftを追加

---

## 8. トップページ再設計

### セクション構成と優先順位

```
1. [HERO] Tonight in Bangkok
   ↓
2. [TODAY] 今夜のライブ（あれば）
   → 横スクロールフライヤーカード
   ↓
3. [THIS WEEKEND] 今週末
   → リスト形式（フライヤー感）
   ↓
4. [BY AREA] エリア別
   → タブ: BKK / CNX / OTHER
   ↓
5. [GUIDE] 初めてのバンコク地下アイドルへ
   → ダークバナー（1行シンプル）
   ↓
6. [SCENE] 注目グループ
   → 最後に置く（主役はイベント）
   ↓
7. [FOOTER]
```

### ナビゲーション再設計

```
[THAIDOL.INFO]     EVENTS  ARTISTS  GUIDE     [JP|TH]
```

- ロゴ: monospace / すべて小文字 / `thaidol.info`
- ナビアイテム: UPPER / small / letter-spacing
- 言語切替: 小さくシンプルに右端

---

## 9. アイドル一覧改善

### 旧（廃止）
- カラフルなグラデーションカード
- ピンクボーダーのアバター
- SNSアイコンが多い

### 新（採用）

```
┌──────────────────────┐
│ ██████████████████   │  ← 16:9 モノクロ or 低彩度写真
│                      │
│ BNK48                │  ← UPPER / 太め
│ J-POP STYLE  BKK    │  ← タグ UPPER 小 / グレー
│                      │
│ ────────────────     │
│ ACTIVE  HIGH FREQ    │  ← ステータス / mono 小
└──────────────────────┘
```

- 写真なし時: テクスチャ背景 + グループ名の頭文字（大）
- アクティブ: 薄いボーダー
- 休止中: `opacity: 0.4`
- バッジ: `JP FRIENDLY` のみ。小・モノクロ。

---

## 10. イベント一覧改善

### レイアウト変更

```
[DATE HEADER]
  SAT 17 MAY ─────────────────────────

[EVENT ROW]
  18:00   CANDY PARADE          RCA →
  20:00   MILK & HONEY    THONGLOR →
  
[DATE HEADER]
  SUN 18 MAY ─────────────────────────

[EVENT ROW]
  ...
```

- タイムライン式リスト（カード不要）
- 日付ヘッダーが仕切りになる
- 時刻（mono大）→ イベント名 → 会場（右端リンク）の横並び

---

## 11. 余白ルール

```
/* Spacing Scale */
--space-1:  4px;
--space-2:  8px;
--space-3:  12px;
--space-4:  16px;
--space-5:  24px;
--space-6:  32px;
--space-7:  48px;
--space-8:  64px;

/* Section間 */
section margin: 48px 0;

/* カード内padding */
padding: 20px;

/* テキスト行間 */
line-height: 1.7-1.9;

/* セクションタイトル下マージン */
margin-bottom: 24px;
```

### 余白の哲学
- 1画面に詰め込まない。スクロールさせる。
- カード間: `gap: 1px` (区切りをborderで表現)
- セクション間: `64px` 以上
- テキストの呼吸: `letter-spacing: 0.15em` をセクションタイトルに

---

## 12. モーションルール

```css
/* 許可するもの */
transition: background 0.15s ease;        /* ホバー背景 */
transition: opacity 0.2s ease;            /* フェード */
transition: border-color 0.15s ease;      /* ボーダー変化 */
transform: translateY(-1px) on hover;     /* 微細な浮き */

/* 禁止するもの */
- bounce系animation
- scale up (1.05等)
- color flash
- marquee
- 回転
- ページ遷移アニメーション（過剰な）

/* ページロード */
- 全体fade-in: opacity 0→1, 0.3s
- stagger: 各セクション 50ms ずつ遅らせる
```

---

## 13. NGデザイン集

| NG要素 | 理由 | 代替 |
|---|---|---|
| ピンクの丸アバター | 推し活アプリ感 | 横長写真 or テキスト |
| グラデーションボタン | K-POP事務所感 | ボーダーボタン or ソリッド黒 |
| 多色バッジ（3色以上） | オタクサイト感 | モノクロ1種類 |
| カラフルなグラデーション背景 | ソシャゲ感 | 黒 + テクスチャ |
| ハートや星の絵文字乱用 | 量産型女性向け | テキストのみ |
| 「推し」「ヲタク」 | アメブロ感 | FANS / SCENE |
| 全面白背景 | 無個性 | ダーク or オフホワイト |
| 丸いフォント | 可愛い系 | Inter / Plex |

---

## 14. 参考サイト分析

| サイト | 借りるもの | 借りないもの |
|---|---|---|
| Boiler Room | 黒背景 / 太いUPPER / 時刻大 | DJカルチャー特化感 |
| Resident Advisor | 情報密度 / グリッド感 | 英語オンリー感 |
| AVYSS | grain / ざらさ / ZINE感 | 日本語オンリー感 |
| TimeOut Bangkok | 都市ガイド感 / 実用性 | 観光客向けすぎる感 |
| ライブフライヤー | 日付大 / 会場大 / コラージュ感 | 読みにくさ |

---

## 15. Tailwindデザイントークン設計

```js
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        void:    '#080808',
        base:    '#111111',
        surface: '#1A1A1A',
        elevated:'#242424',
        overlay: '#2E2E2E',
        'border-subtle': '#2A2A2A',
        'border-mid':    '#3D3D3D',
        'text-pri':  '#F0EDE8',
        'text-sec':  '#A8A49E',
        'text-muted':'#5C5855',
        neon:    '#FF1F6E',
        cyan:    '#00E5C8',
        lime:    '#C8F135',
        gold:    '#D4A853',
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body: ['IBM Plex Sans Thai', 'Noto Sans JP', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      letterSpacing: {
        section: '0.15em',
        tight:   '-0.02em',
        mono:    '0.05em',
      },
      borderColor: {
        DEFAULT: '#2A2A2A',
      },
    },
  },
};
```

### よく使うユーティリティクラス

```
/* ページ背景 */       bg-base text-text-pri
/* カード */           bg-surface border border-border-subtle rounded-none
/* セクション見出し */ text-text-sec text-[10px] font-bold uppercase tracking-section
/* イベント時刻 */     font-mono text-3xl font-light text-text-pri
/* イベント名 */       font-display text-base font-bold uppercase tracking-tight
/* 会場名 */           text-text-sec text-sm
/* Map リンク */       text-cyan text-xs
/* NEONボタン */       border border-neon text-neon px-4 py-2 text-xs font-bold uppercase
/* バッジ */           border border-border-mid text-text-muted text-[9px] uppercase px-2 py-0.5
```

---

## 16. Figmaデザインガイド

### カラーライブラリ登録順

```
Background:  Void / Base / Surface / Elevated / Overlay
Text:        Primary / Secondary / Muted
Accent:      Neon / Cyan / Lime / Gold
Border:      Subtle / Mid / Strong
Status:      Live / Soon / Ended
```

### コンポーネント構成

```
Atoms:
  Badge (FREE / BEGINNER / JP FRIENDLY)
  Button (Neon / Ghost / Text)
  Tag (genre / area)
  TimeStamp (mono large)
  SectionHeader

Molecules:
  EventCard (Flyer style)
  EventRow (list style)
  IdolCard (dark)
  DateGroupHeader

Organisms:
  Hero (Tonight in Bangkok)
  TodayEvents (横スクロール)
  WeekendList (タイムライン)
  FilterBar (dark)
  BottomNav (dark)
```

---

## 17. "地下感"を残す方法

### 残すべき要素

1. **情報の雑多感** — 全部整理しすぎない。フライヤーのように情報が詰まっている感
2. **不完全さの許容** — 情報なし項目は「—」で表示。空白のままにしない
3. **テクスチャ** — グレインオーバーレイ。印刷物感
4. **タイ語の存在感** — 日本語・タイ語・英語が混在する視覚的なカオス
5. **会場名の主役感** — 会場名を大きく。「どこで」が先

### 地下感の公式
```
地下感 = 情報密度 × ダーク × テクスチャ × タイポグラフィ強度
```

---

## 18. "オタクサイト感"だけを消す方法

### 手術的に除去するもの

| 除去対象 | 除去方法 |
|---|---|
| ピンク基調 | ネオンピンクを1〜2点に限定 |
| 丸いアバター画像 | 横長写真 or テキスト表示 |
| バッジの乱用 | 最大1バッジ/カード |
| カラフルなグラデーション | グレースケール + 1点アクセント |
| 「推し」「ヲタ」文言 | SCENE / FANS / ARTISTS |
| ハートや星の多用 | テキストのみ |
| ファン向け煽り文 | フラットな情報提供文体 |
| 写真中心のアイドル紹介 | テキスト・タイポグラフィ中心 |

---

## 19. バンコク夜カルチャー感の出し方

### 3つの手法

**① テキストで空気感を出す**
```
"Tonight in Bangkok"
"The Scene is Alive"
"Doors Open at 18:00"
```

**② 場所の固有名詞を前に出す**
```
RCA / THONGLOR / SIAM / ONNUT
```
エリア名を大きく。バンコク人が「あの街か」と思う情報。

**③ 時刻を主役にする**
```
18:00  ← これが一番大きい
```
ライブハウス感は「何時から」から始まる。

---

## 20. 実装者向けUIルール

### 必ず守るルール（MUST）

```
1. 背景色は #111111 (bg-base) から始める
2. テキストはオフホワイト #F0EDE8 を基本とする
3. ネオンピンクはCTAと「今日」ラベルのみ
4. カードのborder-radiusは 0px または 2px のみ
5. アイドル個人の顔写真を主役にしない
6. セクションタイトルは必ず UPPERCASE + letter-spacing
7. 時刻は font-mono で表示
8. バッジは1カード1個まで
9. ホバー効果は background 変化のみ（transform禁止）
10. フォントは Inter + IBM Plex Sans Thai + IBM Plex Mono のみ
```

### 推奨するルール（SHOULD）

```
- SVGノイズテクスチャを全体に薄く敷く（opacity: 0.03〜0.05）
- 区切り線は border より margin で表現する
- 写真がない場合はグラデーション禁止。テクスチャ背景を使う
- 日付・曜日は英語（SAT / SUN等）で表示
- 会場名は日本語/英語どちらも許容
- フィルターUIはダーク。白い選択肢チップは禁止
```

### やってはいけないルール（NEVER）

```
- border-radius: 50% (丸いアバター)
- background: linear-gradient(pink系)
- animation: bounce / pulse / spin
- color: hotpink / magenta (ネオンピンク以外の系統)
- emoji の見出し使用（コンテンツ内は可）
- 複数バッジのカラフル表示
- font-weight: 300 を見出しに使用（本文のmono以外）
```

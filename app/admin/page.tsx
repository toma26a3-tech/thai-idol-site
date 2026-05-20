import { EVENTS, FAN_ARTICLES, IDOLS, LAB_ARTICLES } from "@/lib/data";

export default function AdminPage() {
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">管理ダッシュボード</h1>
      <p className="text-sm text-slate-600">JSONデータ管理の確認ページ（静的運用）です。</p>
      <div className="grid md:grid-cols-3 gap-3 text-sm">
        <section className="border rounded p-4"><h2 className="font-semibold">イベント</h2><p>{EVENTS.length} 件</p></section>
        <section className="border rounded p-4"><h2 className="font-semibold">アイドル</h2><p>{IDOLS.length} 件</p></section>
        <section className="border rounded p-4"><h2 className="font-semibold">運営Lab</h2><p>{LAB_ARTICLES.length} 件</p></section>
        <section className="border rounded p-4"><h2 className="font-semibold">ファン向け記事</h2><p>{FAN_ARTICLES.length} 件</p></section>
      </div>
    </main>
  );
}

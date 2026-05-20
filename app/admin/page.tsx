import { EVENTS, IDOLS, LAB_ARTICLES } from "@/lib/data";

export default function AdminPage() {
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p className="text-sm text-slate-600">JSONデータ管理の確認ページ（静的運用）。</p>
      <div className="grid md:grid-cols-3 gap-3 text-sm">
        <section className="border rounded p-4"><h2 className="font-semibold">Events</h2><p>{EVENTS.length} records</p></section>
        <section className="border rounded p-4"><h2 className="font-semibold">Idols</h2><p>{IDOLS.length} records</p></section>
        <section className="border rounded p-4"><h2 className="font-semibold">Lab</h2><p>{LAB_ARTICLES.length} records</p></section>
      </div>
    </main>
  );
}

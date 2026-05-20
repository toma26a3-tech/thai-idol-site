"use client";

import { useState } from "react";
import { birthdayItems, C, EVENTS, featureArticles, heroBanners, IDOLS, LAB_ARTICLES, newsItems, pickupItems, rankingItems, VisualItem } from "@/lib/data";

type Page = "home" | "events" | "idols" | "lab";

const Img = ({ item, className }: { item: VisualItem; className: string }) => (
  <div className="space-y-1">
    <img src={item.imageUrl} alt={item.title} className={`w-full object-cover rounded-xl border ${className}`} style={{ borderColor: C.border }} />
    <p className="text-xs font-medium leading-tight">{item.title}</p>
    {item.subtitle && <p className="text-[11px] text-slate-500">{item.subtitle}</p>}
  </div>
);

export default function ThaIdolApp() {
  const [page, setPage] = useState<Page>("home");
  const [heroIndex, setHeroIndex] = useState(0);

  return <div className="max-w-[1180px] mx-auto min-h-screen bg-[#fffafd] text-slate-900 px-3 md:px-6 pb-20">
    <header className="sticky top-0 bg-[#fffafd]/95 backdrop-blur border-b z-20" style={{ borderColor: C.border }}>
      <div className="h-14 flex items-center justify-between">
        <div className="font-extrabold tracking-wide text-lg" style={{ color: C.primary }}>Thai Idol Navi</div>
        <nav className="flex gap-4 text-sm">
          {(["home", "events", "idols", "lab"] as Page[]).map((n) => <button key={n} onClick={() => setPage(n)} className={page === n ? "font-bold" : "text-slate-500"}>{n.toUpperCase()}</button>)}
        </nav>
      </div>
    </header>

    {page === "home" && <main className="space-y-5 pt-4">
      <section className="grid md:grid-cols-3 gap-3 items-stretch">
        <div className="md:col-span-2 relative">
          <img src={heroBanners[heroIndex].imageUrl} alt={heroBanners[heroIndex].title} className="h-56 md:h-80 w-full rounded-2xl object-cover" />
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl text-white">
            <p className="text-xl font-bold">{heroBanners[heroIndex].title}</p><p className="text-sm">{heroBanners[heroIndex].subtitle}</p>
          </div>
        </div>
        <div className="space-y-2">
          {heroBanners.map((b, i) => <button key={b.id} onClick={() => setHeroIndex(i)} className={`w-full text-left rounded-xl border p-2 text-xs ${heroIndex===i ? "bg-pink-50" : "bg-white"}`} style={{ borderColor: C.border }}>{b.title}</button>)}
        </div>
      </section>

      <section className="grid md:grid-cols-4 gap-3">
        <div className="md:col-span-2 border rounded-2xl p-3 bg-white" style={{ borderColor: C.border }}><h2 className="font-bold mb-2">Pickup</h2><div className="grid grid-cols-2 gap-3">{pickupItems.map(i => <Img key={i.id} item={i} className="h-32" />)}</div></div>
        <div className="border rounded-2xl p-3 bg-white" style={{ borderColor: C.border }}><h2 className="font-bold mb-2">Ranking</h2><div className="space-y-2">{rankingItems.map((i,idx)=><div key={i.id} className="flex gap-2"><span className="text-xs font-bold text-pink-500">#{idx+1}</span><img src={i.imageUrl} alt={i.title} className="w-14 h-14 rounded object-cover"/><div className="text-xs">{i.title}</div></div>)}</div></div>
        <div className="border rounded-2xl p-3 bg-white" style={{ borderColor: C.border }}><h2 className="font-bold mb-2">Birthday</h2><div className="space-y-2">{birthdayItems.map(i=><Img key={i.id} item={i} className="h-20" />)}</div></div>
      </section>

      <section className="grid md:grid-cols-3 gap-3">
        <div className="md:col-span-2 border rounded-2xl p-3 bg-white" style={{ borderColor: C.border }}><h2 className="font-bold mb-2">News</h2><div className="grid sm:grid-cols-2 gap-3">{newsItems.map(i=><Img key={i.id} item={i} className="h-28" />)}</div></div>
        <div className="border rounded-2xl p-3 bg-white" style={{ borderColor: C.border }}><h2 className="font-bold mb-2">Feature Article</h2><div className="space-y-3">{featureArticles.map(i=><Img key={i.id} item={i} className="h-24" />)}</div></div>
      </section>
    </main>}

    {page === "events" && <section className="pt-4"><h2 className="text-lg font-bold mb-3">Live Schedule</h2><div className="grid md:grid-cols-2 gap-3">{EVENTS.map(e=><article key={e.id} className="border rounded-xl p-3 bg-white" style={{ borderColor: C.border }}><img src={e.imageUrl} alt={e.titleJapanese} className="h-36 w-full rounded object-cover"/><h3 className="font-semibold mt-2">{e.titleJapanese}</h3><p className="text-xs">{e.date} {e.startTime} / {e.venueName}</p></article>)}</div></section>}
    {page === "idols" && <section className="pt-4"><h2 className="text-lg font-bold mb-3">Idol Groups</h2><div className="grid md:grid-cols-3 gap-3">{IDOLS.map(i=><article key={i.id} className="border rounded-xl p-3 bg-white" style={{ borderColor: C.border }}><img src={i.imageUrl} alt={i.name} className="h-40 w-full rounded object-cover"/><h3 className="font-semibold mt-2">{i.name}</h3><p className="text-xs">{i.nameJapanese} / {i.baseArea}</p></article>)}</div></section>}
    {page === "lab" && <section className="pt-4"><h2 className="text-lg font-bold mb-3">Lab</h2><div className="grid md:grid-cols-2 gap-3">{LAB_ARTICLES.map(a=><article key={a.id} className="border rounded-xl p-3 bg-white" style={{ borderColor: C.border }}><img src={a.imageUrl} alt={a.titleJapanese} className="h-36 w-full rounded object-cover"/><p className="text-[11px] text-pink-600 mt-2">{a.category}</p><h3 className="font-semibold">{a.titleJapanese}</h3><p className="text-xs text-slate-600">{a.summaryJapanese}</p></article>)}</div></section>}
  </div>;
}

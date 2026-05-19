"use client";
import { useMemo, useState } from "react";
import { C, EVENTS, IDOLS, LAB_ARTICLES, Event, Idol } from "@/lib/data";

type Page = "home" | "events" | "idols" | "lab" | "guide" | "event-detail" | "idol-detail";

const pill = "text-[10px] px-2 py-1 rounded-full border";

const price = (e: Event) => e.isFree ? "無料" : `${e.ticketPriceMin} - ${e.ticketPriceMax} THB`;

function EventCard({ event, onClick }: { event: Event; onClick: (e: Event) => void }) {
  return <div className="border rounded-lg bg-white p-3" style={{ borderColor: C.border }}>
    <div className="flex gap-3">
      <div className="w-14 rounded-md border text-center py-2" style={{ borderColor: C.primaryLight, background: C.primaryBg }}>
        <div className="text-sm font-bold" style={{ color: C.primary }}>{event.date.slice(5).replace("-", "/")}</div>
        <div className="text-[11px]" style={{ color: C.textSub }}>{event.startTime}</div>
      </div>
      <div className="flex-1">
        <div className="text-[13px] font-bold">{event.titleJapanese}</div>
        <div className="text-[11px] text-slate-600 mt-1">{event.venueName} / {event.venueArea}</div>
        <div className="text-[11px] mt-1">出演: {event.idolGroups.join(" / ")}</div>
        <div className="text-[11px] text-slate-500 mt-1">{price(event)}</div>
        <div className="mt-2 flex gap-2 flex-wrap">
          {event.tags.includes("beginner") && <span className={pill} style={{ borderColor: C.border }}>初心者向け</span>}
          {event.tags.includes("recommended") && <span className={pill} style={{ borderColor: C.border }}>日本人おすすめ</span>}
          {event.isFree && <span className={pill} style={{ borderColor: C.border }}>無料</span>}
        </div>
      </div>
    </div>
    <div className="mt-3 flex gap-2">
      <button className="h-8 px-3 text-xs border rounded-md" style={{ borderColor: C.mapBlue, color: C.mapBlue }}>Map</button>
      <button onClick={() => onClick(event)} className="h-8 px-3 text-xs rounded-md text-white" style={{ background: C.primary }}>Ticket / 詳細</button>
    </div>
  </div>;
}

export default function ThaIdolApp() {
  const [page, setPage] = useState<Page>("home");
  const [eventQ, setEventQ] = useState("");
  const [idolQ, setIdolQ] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedIdol, setSelectedIdol] = useState<Idol | null>(null);
  const [eventFilter, setEventFilter] = useState("all");
  const [areaFilter, setAreaFilter] = useState("all");
  const [tagFilter, setTagFilter] = useState("all");
  const [sort, setSort] = useState("time");
  const [labCategory, setLabCategory] = useState("all");
  const today = "2026-05-19";

  const events = useMemo(() => EVENTS.filter(e => {
    if (eventQ && !(e.titleJapanese + e.venueName + e.idolGroups.join(" ")).toLowerCase().includes(eventQ.toLowerCase())) return false;
    if (eventFilter === "today" && e.date !== today) return false;
    if (eventFilter === "tomorrow" && e.date !== "2026-05-20") return false;
    if (eventFilter === "weekend" && !["2026-05-24", "2026-05-25"].includes(e.date)) return false;
    if (areaFilter !== "all" && e.venueArea !== areaFilter) return false;
    if (tagFilter === "beginner" && !e.tags.includes("beginner")) return false;
    if (tagFilter === "recommended" && !e.tags.includes("recommended")) return false;
    if (tagFilter === "free" && !e.isFree) return false;
    return true;
  }).sort((a,b) => sort === "time" ? a.startTime.localeCompare(b.startTime) : b.lastCheckedAt.localeCompare(a.lastCheckedAt)), [eventQ,eventFilter,areaFilter,tagFilter,sort]);

  const idols = useMemo(() => IDOLS.filter(i => (i.name+i.nameJapanese+i.nameThai+i.baseArea+i.genres.join(" ")).toLowerCase().includes(idolQ.toLowerCase())), [idolQ]);

  return <div className="max-w-[430px] mx-auto min-h-screen bg-white border" style={{ borderColor: C.border }}>
    <header className="sticky top-0 bg-white border-b z-10" style={{ borderColor: C.border }}>
      <div className="px-3 py-2 flex justify-between items-center">
        <button onClick={() => setPage("home")} className="text-sm font-extrabold" style={{ color: C.primary }}>ThaIdol.info</button>
        <button className="text-[11px] underline" onClick={() => setPage("guide")}>掲載/修正</button>
      </div>
      <div className="px-3 pb-2 flex gap-2 overflow-x-auto text-[11px]">
        <button onClick={() => setPage("events")}>ライブを探す</button><button onClick={() => setPage("idols")}>グループを探す</button><button onClick={() => setPage("lab")}>Lab</button><button onClick={() => setPage("guide")}>ガイド</button>
      </div>
    </header>

    <main className="pb-14" style={{ background: C.bg }}>
      {page === "home" && <div className="p-3 space-y-3">
        <section className="bg-white border rounded-lg p-3" style={{ borderColor: C.border }}>
          <h1 className="text-lg font-bold">タイの地下アイドルを探す</h1>
          <p className="text-[12px] text-slate-600 mt-1">ライブ・グループ・日本式アイドル文化をまとめたナビサイト</p>
          <input className="mt-3 w-full h-10 rounded-md border px-3 text-sm" style={{ borderColor: C.primaryLight }} placeholder="グループ名・会場・イベント名で検索" value={eventQ} onChange={e=>setEventQ(e.target.value)} />
        </section>
        <section className="grid grid-cols-2 gap-2 text-xs">
          {["ライブを探す","グループを探す","初心者ガイド","Idol Growth Lab"].map((t,idx)=><button key={t} onClick={()=>setPage((["events","idols","guide","lab"] as Page[])[idx])} className="bg-white border rounded-lg p-3 text-left" style={{ borderColor: C.border }}>{t}</button>)}
        </section>
        <section className="space-y-2"><h2 className="text-sm font-bold">今日のライブ</h2>{EVENTS.slice(0,3).map(e=><EventCard key={e.id} event={e} onClick={(ev)=>{setSelectedEvent(ev);setPage("event-detail");}} />)}</section>
        <section className="space-y-2"><h2 className="text-sm font-bold">注目グループ</h2>{IDOLS.map(i=><div key={i.id} className="bg-white border rounded-lg p-3" style={{ borderColor: C.border }}><div className="text-sm font-bold">{i.name}</div><div className="text-[11px] text-slate-600">{i.baseArea} / {i.genres.join("・")}</div><div className="mt-1 text-[11px]">出演予定: {EVENTS.filter(e=>e.idolGroups.includes(i.name)).length}件</div></div>)}</section>
        <section className="space-y-2"><h2 className="text-sm font-bold">Idol Growth Lab 新着</h2>{LAB_ARTICLES.slice(0,3).map(a=><div key={a.id} className="bg-white border rounded-lg p-3" style={{ borderColor: C.border }}><div className="text-[10px]" style={{ color: C.primary }}>{a.category}</div><div className="text-[13px] font-semibold">{a.titleJapanese}</div><div className="text-[11px] text-slate-600">{a.summaryJapanese}</div></div>)}</section>
      </div>}

      {page === "events" && <div className="p-3 space-y-2">
        <h2 className="text-sm font-bold">ライブ一覧</h2>
        <input className="w-full h-9 rounded-md border px-3 text-sm" placeholder="イベント名・会場・グループ名" value={eventQ} onChange={e=>setEventQ(e.target.value)} />
        <div className="flex gap-1 overflow-x-auto text-[10px]">{["all","today","tomorrow","weekend","month"].map(v=><button key={v} onClick={()=>setEventFilter(v)} className={pill} style={{ borderColor:C.border, background:eventFilter===v?C.primaryBg:"white" }}>{v}</button>)}</div>
        <div className="flex gap-1 overflow-x-auto text-[10px]">{["all","Bangkok","Siam","Thonglor","Ratchada","Chiang Mai"].map(v=><button key={v} onClick={()=>setAreaFilter(v)} className={pill} style={{ borderColor:C.border }}>{v}</button>)}</div>
        <div className="flex gap-1 text-[10px]">{["all","beginner","recommended","free"].map(v=><button key={v} onClick={()=>setTagFilter(v)} className={pill} style={{ borderColor:C.border }}>{v}</button>)}</div>
        <select className="h-8 text-xs border rounded px-2" value={sort} onChange={e=>setSort(e.target.value)}><option value="time">開演時間が早い順</option><option value="new">新着順</option></select>
        <div className="text-[11px] text-slate-600">{events.length}件</div>
        <div className="space-y-2">{events.map(e=><EventCard key={e.id} event={e} onClick={(ev)=>{setSelectedEvent(ev);setPage("event-detail");}} />)}</div>
      </div>}

      {page === "idols" && <div className="p-3 space-y-2">
        <h2 className="text-sm font-bold">グループ検索</h2>
        <input className="w-full h-9 rounded-md border px-3 text-sm" placeholder="グループ名・エリア・ジャンル" value={idolQ} onChange={e=>setIdolQ(e.target.value)} />
        <div className="text-[11px] text-slate-600">{idols.length}件</div>
        {idols.map(i=><div key={i.id} className="bg-white border rounded-lg p-3" style={{ borderColor:C.border }}><div className="h-10 rounded border" style={{ borderColor:C.primaryLight, background:C.primaryBg }}></div><div className="mt-2 text-sm font-bold">{i.name}</div><div className="text-[11px] text-slate-600">{i.nameJapanese} / {i.nameThai}</div><div className="text-[11px]">{i.baseArea}・{i.genres.join("/")}</div><div className="text-[11px]">出演予定 {EVENTS.filter(e=>e.idolGroups.includes(i.name)).length}件</div><button className="mt-2 h-8 px-3 rounded-md text-xs text-white" style={{ background:C.primary }} onClick={()=>{setSelectedIdol(i);setPage("idol-detail");}}>詳細を見る</button></div>)}
      </div>}

      {page === "lab" && <div className="p-3 space-y-2"><h2 className="text-sm font-bold">Idol Growth Lab</h2><p className="text-[11px] text-slate-600">タイ地下アイドルのための、日本式アイドル文化ノウハウ</p><div className="flex gap-1 overflow-x-auto text-[10px]">{["all",...Array.from(new Set(LAB_ARTICLES.map(a=>a.category)))].map(c=><button key={c} className={pill} onClick={()=>setLabCategory(c)} style={{ borderColor:C.border }}>{c}</button>)}</div>{LAB_ARTICLES.filter(a=>labCategory==="all"||a.category===labCategory).map(a=><div key={a.id} className="bg-white border rounded-lg p-3" style={{ borderColor:C.border }}><div className="text-[10px]" style={{ color:C.primary }}>{a.category}</div><div className="text-[13px] font-semibold">{a.titleJapanese}</div><div className="text-[11px] text-slate-600">{a.summaryJapanese}</div><div className="text-[10px] mt-1">対象: {a.target.join(", ")} / {a.readTime} / {a.language.join("+")}</div><div className="text-[11px] mt-2 p-2 rounded" style={{ background:C.primaryBg }}>{a.contentJapanese}</div></div>)}</div>}

      {page === "guide" && <div className="p-3"><h2 className="text-sm font-bold">初心者ガイド</h2><p className="text-[12px]">ファン向け現場ガイド（Guide）ページです。</p></div>}
      {page === "event-detail" && selectedEvent && <div className="p-3 space-y-2"><h2 className="text-base font-bold">{selectedEvent.titleJapanese}</h2><div className="bg-white border rounded p-3 text-[12px]">日付 {selectedEvent.date} / 開場 {selectedEvent.openTime} / 開演 {selectedEvent.startTime}<br/>会場 {selectedEvent.venueName}<br/>価格 {price(selectedEvent)}<br/>出演 {selectedEvent.idolGroups.join(" / ")}<br/>最終確認 {selectedEvent.lastCheckedAt}</div><div className="flex gap-2"><button className="h-8 px-3 border rounded">Map</button><button className="h-8 px-3 rounded text-white" style={{ background:C.primary }}>チケット</button></div><button onClick={()=>setPage("events")} className="text-xs underline">一覧へ戻る</button></div>}
      {page === "idol-detail" && selectedIdol && <div className="p-3 space-y-2"><h2 className="text-base font-bold">{selectedIdol.name}</h2><div className="bg-white border rounded p-3 text-[12px]">{selectedIdol.nameJapanese} / {selectedIdol.nameThai}<br/>コンセプト: {selectedIdol.concept}<br/>所属: {selectedIdol.agency}<br/>活動拠点: {selectedIdol.baseArea}<br/>SNS: {Object.keys(selectedIdol.socialLinks).join(", ")}<br/>出演予定: {EVENTS.filter(e=>e.idolGroups.includes(selectedIdol.name)).length}件<br/>最終確認: {selectedIdol.lastCheckedAt}</div><button onClick={()=>setPage("idols")} className="text-xs underline">一覧へ戻る</button></div>}
    </main>

    <nav className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white border-t grid grid-cols-5 h-12" style={{ borderColor: C.border }}>
      {[{id:"home",l:"Home"},{id:"events",l:"Live"},{id:"idols",l:"Idols"},{id:"lab",l:"Lab"},{id:"guide",l:"Guide"}].map(n=><button key={n.id} onClick={()=>setPage(n.id as Page)} className="text-[11px]" style={{ color: page===n.id?C.primary:C.textMuted }}>{n.l}</button>)}
    </nav>
  </div>;
}

"use client";
import { useState } from "react";
import { C, EVENTS, IDOLS, Event } from "@/lib/data";

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span
    className="text-[9px] px-1.5 py-0.5 rounded-full font-semibold tracking-wide"
    style={{ background: C.primaryBg, color: C.primary }}
  >
    {children}
  </span>
);

function EventCard({ event, onSelect }: { event: Event; onSelect?: (e: Event) => void }) {
  const day = new Date(event.date);
  const dayLabel = `${day.getMonth() + 1}/${day.getDate()}`;
  return (
    <div
      className="border rounded-lg p-3 bg-white cursor-pointer"
      style={{ borderColor: C.border, boxShadow: "0 1px 4px rgba(26,26,26,0.04)" }}
      onClick={() => onSelect?.(event)}
    >
      <div className="flex gap-3">
        <div className="min-w-14 text-center rounded-md py-2" style={{ background: C.primaryBg }}>
          <div className="text-sm font-extrabold leading-none" style={{ color: C.primary }}>{dayLabel}</div>
          <div className="text-[10px] mt-1 font-semibold" style={{ color: C.primary }}>{event.startTime}</div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[13px] font-bold leading-snug" style={{ color: C.text }}>{event.titleJapanese}</div>
          <div className="text-[11px] mt-1 flex items-center gap-2" style={{ color: C.textSub }}>
            <span>{event.venueName}</span>
            <span className="text-[10px] underline underline-offset-2" style={{ color: C.mapBlue }}>Map</span>
          </div>
          <div className="mt-1 flex gap-1.5 flex-wrap">
            {event.tags.includes("recommended") && <Badge>おすすめ</Badge>}
            {event.tags.includes("beginner") && <Badge>初心者向け</Badge>}
          </div>
        </div>
        <button
          className="text-[10px] px-3 h-7 rounded-md font-semibold self-center"
          style={{
            background: event.ticketUrl ? C.primary : "#6B7280",
            color: "#fff"
          }}
        >
          {event.ticketUrl ? "チケット" : "公式情報"}
        </button>
      </div>
    </div>
  );
}

function BottomNav({ page, setPage }: { page: "home" | "events" | "idols"; setPage: (p: "home" | "events" | "idols") => void }) {
  const tabs = [
    { id: "home" as const, label: "ホーム" },
    { id: "events" as const, label: "ライブ" },
    { id: "idols" as const, label: "アイドル" }
  ];

  return (
    <nav className="sticky bottom-0 bg-white border-t" style={{ borderColor: C.border }}>
      <ul className="grid grid-cols-3 h-12">
        {tabs.map((tab) => {
          const active = page === tab.id;
          return (
            <li key={tab.id}>
              <button
                onClick={() => setPage(tab.id)}
                className="w-full h-full text-[11px] font-medium flex items-center justify-center relative"
                style={{ color: active ? C.primary : C.textMuted }}
              >
                {tab.label}
                {active && (
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-8 rounded-full"
                    style={{ background: C.primary }}
                  />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default function ThaIdolApp() {
  const [page, setPage] = useState<"home" | "events" | "idols">("home");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-white shadow-2xl flex flex-col">
      <div className="sticky top-0 z-10 bg-white border-b px-3 py-2 flex justify-between" style={{ borderColor: C.border }}>
        <div className="font-extrabold" style={{ color: C.primary }}>
          ThaIdol<span style={{ color: C.gold }}>.info</span>
        </div>
        <div className="flex gap-1">
          {(["home", "events", "idols"] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className="text-[10px] px-2 py-1 rounded"
              style={{ background: page === p ? C.primaryBg : "transparent" }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
      <main className="flex-1" style={{ background: C.bg }}>
        {page === "home" && (
          <div>
            <section
              className="px-6 pt-10 pb-9 text-center"
              style={{ background: "linear-gradient(135deg,#FFF0F6 0%,#FFE4EB 60%,#FFF5F0 100%)" }}
            >
              <p className="text-[11px] tracking-[0.12em] font-medium uppercase" style={{ color: C.primary }}>Thai Idol Media</p>
              <h1 className="text-[29px] font-bold leading-tight mt-3" style={{ color: "#6B0B43" }}>
                Thailand Idol Live Guide
              </h1>
              <p className="text-xs mt-3 leading-relaxed" style={{ color: C.textSub }}>
                バンコク・チェンマイを中心に、最新のライブ情報を整理して届けるメディア
              </p>
              <button
                className="mt-6 h-10 px-6 text-xs rounded-md font-semibold"
                style={{ background: "linear-gradient(135deg,#E91E8C,#FF6B9D)", color: "#fff", boxShadow: "0 4px 12px rgba(233,30,140,0.22)" }}
              >
                今日のライブを見る
              </button>
            </section>
            <section className="p-4 space-y-2.5">{EVENTS.map((ev) => <EventCard key={ev.id} event={ev} onSelect={setSelectedEvent} />)}</section>
          </div>
        )}
        {page === "events" && <div className="p-4 space-y-2.5">{EVENTS.map((ev) => <EventCard key={ev.id} event={ev} onSelect={setSelectedEvent} />)}</div>}
        {page === "idols" && (
          <div className="grid grid-cols-2 gap-2 p-4">
            {IDOLS.map((i) => (
              <div key={i.id} className="border rounded-xl p-2" style={{ borderColor: C.border }}>
                <div className="h-16 rounded" style={{ background: i.bg }} />
                <div className="text-sm font-bold mt-2">{i.name}</div>
                <div className="text-[10px]">{i.nameJapanese}</div>
              </div>
            ))}
          </div>
        )}
        {selectedEvent && (
          <div className="fixed bottom-16 left-1/2 -translate-x-1/2 bg-white border rounded-full px-4 py-2 text-xs" style={{ borderColor: C.border }}>
            選択中: {selectedEvent.titleJapanese}
          </div>
        )}
      </main>
      <BottomNav page={page} setPage={setPage} />
    </div>
  );
}

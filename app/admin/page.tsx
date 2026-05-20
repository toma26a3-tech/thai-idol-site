"use client";

import { useMemo, useState } from "react";

type Tab = "event" | "idol" | "lab";

function copyText(text: string) {
  navigator.clipboard.writeText(text);
}

export default function AdminPage() {
  const [tab, setTab] = useState<Tab>("event");

  const [event, setEvent] = useState({
    eventTitle: "",
    eventDate: "2026-06-01",
    openTime: "17:30",
    startTime: "18:00",
    venueName: "",
    venueArea: "Bangkok",
    idolGroups: "",
    ticketPriceText: "300-500 THB",
    ticketUrl: "",
    googleMapUrl: "",
    sourceUrl: "",
    lastCheckedAt: "2026-05-20",
    tags: "beginner",
    imageUrl: "/images/events/sample-event.jpg"
  });

  const [idol, setIdol] = useState({
    name: "",
    nameJapanese: "",
    nameThai: "",
    slug: "",
    agency: "",
    baseArea: "Bangkok",
    genres: "Idol",
    status: "active",
    socialLinks: '{"x":true,"instagram":true}',
    recommendedForJapaneseFans: "false",
    beginnerFriendly: "true",
    imageUrl: "/images/idols/sample-idol.jpg"
  });

  const [lab, setLab] = useState({
    titleJapanese: "",
    titleThai: "",
    slug: "",
    category: "SNS運用",
    summaryJapanese: "",
    target: "idol,management",
    readTime: "5分",
    language: "ja,th",
    imageUrl: "/images/lab/sample-lab.jpg",
    contentJapanese: "",
    contentThai: ""
  });

  const eventJson = useMemo(() => JSON.stringify({
    id: "EVT-XXX",
    titleJapanese: event.eventTitle,
    titleThai: "",
    date: event.eventDate,
    dayOfWeek: "",
    openTime: event.openTime,
    startTime: event.startTime,
    venueName: event.venueName,
    venueArea: event.venueArea,
    idolGroups: event.idolGroups.split(",").map((v) => v.trim()).filter(Boolean),
    ticketPriceText: event.ticketPriceText,
    ticketUrl: event.ticketUrl || null,
    googleMapUrl: event.googleMapUrl || null,
    sourceUrl: event.sourceUrl,
    sourceAccountName: "",
    lastCheckedAt: event.lastCheckedAt,
    tags: event.tags.split(",").map((v) => v.trim()).filter(Boolean),
    isFree: false,
    imageUrl: event.imageUrl
  }, null, 2), [event]);

  const idolJson = useMemo(() => JSON.stringify({
    id: "GRP-XXX",
    name: idol.name,
    nameJapanese: idol.nameJapanese,
    nameThai: idol.nameThai,
    slug: idol.slug,
    concept: "",
    agency: idol.agency,
    baseArea: idol.baseArea,
    status: idol.status,
    genres: idol.genres.split(",").map((v) => v.trim()).filter(Boolean),
    socialLinks: JSON.parse(idol.socialLinks || "{}"),
    recommendedForJapaneseFans: idol.recommendedForJapaneseFans === "true",
    beginnerFriendly: idol.beginnerFriendly === "true",
    lastCheckedAt: "2026-05-20",
    imageUrl: idol.imageUrl
  }, null, 2), [idol]);

  const labJson = useMemo(() => JSON.stringify({
    id: "lab-xxx",
    titleJapanese: lab.titleJapanese,
    titleThai: lab.titleThai,
    slug: lab.slug,
    category: lab.category,
    summaryJapanese: lab.summaryJapanese,
    target: lab.target.split(",").map((v) => v.trim()).filter(Boolean),
    readTime: lab.readTime,
    language: lab.language.split(",").map((v) => v.trim()).filter(Boolean),
    imageUrl: lab.imageUrl,
    contentJapanese: lab.contentJapanese,
    contentThai: lab.contentThai
  }, null, 2), [lab]);

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2 text-pink-600">Admin: JSONテンプレート生成</h1>
      <p className="text-sm mb-4">保存機能はありません。入力後にJSONをコピーして `data/*.json` へ貼り付けてください。</p>
      <div className="grid grid-cols-3 gap-2 mb-4">
        <button onClick={() => setTab("event")} className="border rounded p-2" style={{ background: tab === "event" ? "#FFF3F8" : "white" }}>Event</button>
        <button onClick={() => setTab("idol")} className="border rounded p-2" style={{ background: tab === "idol" ? "#FFF3F8" : "white" }}>Idol</button>
        <button onClick={() => setTab("lab")} className="border rounded p-2" style={{ background: tab === "lab" ? "#FFF3F8" : "white" }}>Lab Article</button>
      </div>

      {tab === "event" && <section className="space-y-2">{Object.entries(event).map(([k, v]) => <input key={k} className="w-full border rounded p-2 text-sm" value={v} onChange={(e) => setEvent({ ...event, [k]: e.target.value })} placeholder={k} />)}</section>}
      {tab === "idol" && <section className="space-y-2">{Object.entries(idol).map(([k, v]) => <input key={k} className="w-full border rounded p-2 text-sm" value={v} onChange={(e) => setIdol({ ...idol, [k]: e.target.value })} placeholder={k} />)}</section>}
      {tab === "lab" && <section className="space-y-2">{Object.entries(lab).map(([k, v]) => <input key={k} className="w-full border rounded p-2 text-sm" value={v} onChange={(e) => setLab({ ...lab, [k]: e.target.value })} placeholder={k} />)}</section>}

      <div className="mt-4">
        <button className="px-3 py-2 rounded text-white bg-pink-600 text-sm" onClick={() => copyText(tab === "event" ? eventJson : tab === "idol" ? idolJson : labJson)}>Copy JSON</button>
      </div>
      <pre className="mt-3 p-3 rounded border bg-gray-50 text-xs overflow-auto">{tab === "event" ? eventJson : tab === "idol" ? idolJson : labJson}</pre>

      <section className="mt-6 text-sm bg-pink-50 border rounded p-3">
        <h2 className="font-semibold mb-1">画像配置先</h2>
        <ul className="list-disc pl-5">
          <li>/public/images/events/</li><li>/public/images/idols/</li><li>/public/images/banners/</li><li>/public/images/lab/</li><li>/public/images/news/</li><li>/public/images/placeholders/</li>
        </ul>
      </section>
    </main>
  );
}

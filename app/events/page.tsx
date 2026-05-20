"use client";
import Link from "next/link";
import { useState } from "react";
import { EVENTS, POPULAR_TAGS } from "@/lib/data";
export default function EventsPage(){const [tag,setTag]=useState<string>("all"); const list=tag==='all'?EVENTS:EVENTS.filter(e=>e.tags.includes(tag));return <main className="max-w-4xl mx-auto p-4"><h1 className="text-xl font-bold mb-2">Event一覧</h1><div className="flex flex-wrap gap-2 mb-3"><button onClick={()=>setTag('all')} className="text-xs border px-2 py-1 rounded">all</button>{POPULAR_TAGS.map(t=><button key={t} onClick={()=>setTag(t)} className="text-xs border px-2 py-1 rounded">{t}</button>)}</div>{list.map(e=><Link key={e.id} href={`/events/${e.slug}/`} className="block border rounded p-3 mb-2"><p className="font-semibold">{e.titleJapanese}</p><p className="text-xs">{e.date} {e.venueArea} / {e.tags.join(",")}</p></Link>)}</main>}

"use client";
import Link from "next/link";
import { useState } from "react";
import { FAN_ARTICLES, LAB_ARTICLES, POPULAR_TAGS } from "@/lib/data";

export default function LabPage(){
  const [tag,setTag]=useState('all');
  const [tab,setTab]=useState<'idol'|'fan'>('idol');
  const list = tab==='idol' ? LAB_ARTICLES : FAN_ARTICLES;
  const categories=Array.from(new Set(list.map(a=>a.category)));
  const filtered=list.filter(a=>tag==='all'||a.tags.includes(tag));
  return <main className="max-w-4xl mx-auto p-4"><h1 className="text-xl font-bold mb-3">Lab（アイドル/運営・ファン向け）</h1><div className="flex gap-2 mb-3"><button onClick={()=>setTab('idol')} className="text-xs border px-2 py-1 rounded">アイドル/運営</button><button onClick={()=>setTab('fan')} className="text-xs border px-2 py-1 rounded">ファン向け</button></div><div className="flex flex-wrap gap-2 mb-2">{categories.map(c=><span key={c} className="text-xs border px-2 py-1 rounded">{c}</span>)}</div><div className="flex flex-wrap gap-2 mb-3"><button onClick={()=>setTag('all')} className="text-xs border px-2 py-1 rounded">すべて</button>{POPULAR_TAGS.map(t=><button key={t} onClick={()=>setTag(t)} className="text-xs border px-2 py-1 rounded">{t}</button>)}</div>{filtered.map(a=><Link key={a.id} href={`/lab/${a.slug}/`} className="block border rounded p-3 mb-2"><p className="font-semibold">{a.titleJapanese}</p><p className="text-xs">{a.summaryJapanese}</p></Link>)}</main>
}

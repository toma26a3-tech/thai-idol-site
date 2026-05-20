"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { C, EVENTS, FAN_ARTICLES, LAB_ARTICLES, POPULAR_TAGS, featureArticles, heroBanners, newsItems, pickupItems, rankingItems } from "@/lib/data";

export default function ThaIdolApp() {
  const [heroIndex, setHeroIndex] = useState(0);
  const weekly = useMemo(() => EVENTS.filter(e => ["beginner", "jpFriendly"].some(t => e.tags.includes(t))).slice(0, 5), []);
  return <main className="max-w-[1120px] mx-auto p-3 space-y-4 bg-white">
    <header className="border rounded-xl p-3" style={{borderColor:C.border}}>
      <div className="text-xl font-bold" style={{color:C.primary}}>タイ地下アイドルナビ</div>
      <nav className="flex flex-wrap gap-3 mt-2 text-sm">
        <Link href="/">ホーム</Link><Link href="/events/">ライブ</Link><Link href="/idols/">アイドル</Link><Link href="/media/">メディア</Link><Link href="/lab/">成長ラボ</Link><Link href="/guide/">初心者ガイド</Link>
      </nav>
    </header>

    <section className="grid md:grid-cols-3 gap-3"><div className="md:col-span-2"><img src={heroBanners[heroIndex].imageUrl} alt={heroBanners[heroIndex].title} className="w-full h-52 md:h-64 rounded-xl object-cover border" style={{borderColor:C.border}}/><div className="mt-2 text-sm font-semibold">{heroBanners[heroIndex].subtitle}</div></div><div className="space-y-2">{heroBanners.map((b,i)=><button key={b.id} onClick={()=>setHeroIndex(i)} className="w-full p-2 text-left text-xs border rounded bg-[#fff7fb]" style={{borderColor:C.border}}>{b.subtitle}</button>)}</div></section>

    <section className="grid grid-cols-3 gap-2 text-xs">{[{t:"ライブを探す",h:"/events/"},{t:"アイドルを探す",h:"/idols/"},{t:"記事を読む",h:"/media/"}].map(b=><Link key={b.t} href={b.h} className="border rounded p-3 bg-[#fdf2ff]">{b.t}</Link>)}</section>
    <section className="border rounded-xl p-3 bg-[#fff9e9]" style={{borderColor:C.border}}><h2 className="font-semibold mb-2">人気タグから探す</h2><div className="flex gap-2 overflow-x-auto">{POPULAR_TAGS.map(t=><span className="text-xs border rounded-full px-2 py-1 whitespace-nowrap" style={{borderColor:C.border}} key={t}>{t}</span>)}</div></section>

    <section className="border rounded-xl p-3" style={{borderColor:C.border}}><h2 className="font-semibold mb-2">今週のおすすめライブ</h2><div className="flex gap-3 overflow-x-auto">{weekly.map((e,idx)=><Link key={e.id} href={`/events/${e.slug}/`} className="w-64 shrink-0"><img src={e.imageUrl} alt={e.titleJapanese} className="h-36 w-full rounded border object-cover" style={{borderColor:C.border}}/><p className="text-xs mt-1">{idx+1}. {e.titleJapanese}</p><p className="text-[11px]">{e.date} / {e.venueArea}</p></Link>)}</div><Link href="/events/" className="text-xs underline mt-2 inline-block">もっと見る</Link></section>

    <section className="grid md:grid-cols-4 gap-3"><div className="md:col-span-2 border rounded-xl p-3 bg-[#f0fbff]" style={{borderColor:C.border}}><h2 className="font-semibold">ピックアップアイドル</h2><div className="grid grid-cols-2 gap-2 mt-2">{pickupItems.map(i=><div key={i.id}><img src={i.imageUrl} alt={i.title} className="h-28 w-full rounded border object-cover" style={{borderColor:C.border}}/><p className="text-xs mt-1">{i.title}</p></div>)}</div></div><div className="border rounded-xl p-3" style={{borderColor:C.border}}><h2 className="font-semibold">アクセスランキング</h2>{rankingItems.map((i,n)=><div key={i.id} className="text-xs mt-1">#{n+1} {i.title}</div>)}</div><div className="border rounded-xl p-3" style={{borderColor:C.border}}><h2 className="font-semibold">最新ライブ情報</h2>{newsItems.map(i=><div key={i.id} className="text-xs mt-1">{i.title}</div>)}</div></section>

    <section className="grid md:grid-cols-2 gap-3"><div className="border rounded-xl p-3" style={{borderColor:C.border}}><h2 className="font-semibold mb-2">ファン向けメディア新着</h2>{FAN_ARTICLES.map(a=><Link key={a.id} href={`/media/${a.slug}/`} className="block text-xs underline mb-1">{a.titleJapanese}</Link>)}</div><div className="border rounded-xl p-3" style={{borderColor:C.border}}><h2 className="font-semibold mb-2">アイドル成長ラボ新着</h2>{LAB_ARTICLES.map(a=><Link key={a.id} href={`/lab/${a.slug}/`} className="block text-xs underline mb-1">{a.titleJapanese}</Link>)}</div></section>

    <section className="border rounded-xl p-3" style={{borderColor:C.border}}><h2 className="font-semibold mb-2">初心者向け導線</h2><div className="grid md:grid-cols-3 gap-2 text-xs"><Link href="/guide/" className="border rounded p-2">初めてライブに行く方へ</Link><Link href="/media/cheki-manners/" className="border rounded p-2">チェキの撮り方</Link><Link href="/media/first-live-in-bangkok/" className="border rounded p-2">バンコクの会場ガイド</Link></div></section>

    <nav className="fixed bottom-0 left-0 right-0 mx-auto max-w-[1120px] bg-white border-t grid grid-cols-5 h-12 text-xs" style={{borderColor:C.border}}><Link className="m-auto" href="/">ホーム</Link><Link className="m-auto" href="/events/">ライブ</Link><Link className="m-auto" href="/idols/">アイドル</Link><Link className="m-auto" href="/media/">メディア</Link><Link className="m-auto" href="/lab/">ラボ</Link></nav>
  </main>;
}

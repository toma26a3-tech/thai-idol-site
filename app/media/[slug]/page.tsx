import Link from "next/link";
import { FAN_ARTICLES } from "@/lib/data";
export async function generateStaticParams(){return FAN_ARTICLES.map(a=>({slug:a.slug}));}
export default async function MediaDetail({params}:{params:Promise<{slug:string}>}){const {slug}=await params; const idx=FAN_ARTICLES.findIndex(a=>a.slug===slug); const a=FAN_ARTICLES[idx]; if(!a) return <main>記事が見つかりません</main>; return <main className="max-w-4xl mx-auto p-4 space-y-2"><h1 className="text-2xl font-bold">{a.titleJapanese}</h1><p>{a.summaryJapanese}</p><p>{a.contentJapanese}</p><div className="flex justify-between text-sm">{FAN_ARTICLES[idx-1]?<Link className="underline" href={`/media/${FAN_ARTICLES[idx-1].slug}/`}>前の記事</Link>:<span/>}{FAN_ARTICLES[idx+1]&&<Link className="underline" href={`/media/${FAN_ARTICLES[idx+1].slug}/`}>次の記事</Link>}</div></main>}
export const dynamic = "force-static";

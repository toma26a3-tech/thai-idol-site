import Link from "next/link";
import { FAN_ARTICLES } from "@/lib/data";
export default function MediaPage(){return <main className="max-w-4xl mx-auto p-4"><h1 className="text-2xl font-bold mb-3">メディア記事</h1>{FAN_ARTICLES.map(a=><Link key={a.id} href={`/media/${a.slug}/`} className="block border rounded p-3 mb-2"><p className="font-semibold">{a.titleJapanese}</p><p className="text-xs">{a.summaryJapanese}</p></Link>)}</main>}

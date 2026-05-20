"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  birthdayItems,
  C,
  EVENTS,
  featureArticles,
  formatPrice,
  heroBanners,
  IDOLS,
  LAB_ARTICLES,
  newsItems,
  pickupItems,
  POPULAR_TAGS,
  rankingItems
} from "@/lib/data";

const Card = ({
  title,
  imageUrl,
  href,
  subtitle
}: {
  title: string;
  imageUrl: string;
  href?: string;
  subtitle?: string;
}) => {
  const body = (
    <div>
      <img
        src={imageUrl}
        alt={title}
        className="h-28 w-full object-cover rounded-lg border"
        style={{ borderColor: C.border }}
      />
      <p className="text-xs mt-1 font-medium">{title}</p>
      {subtitle && (
        <p className="text-[11px] text-slate-500">{subtitle}</p>
      )}
    </div>
  );

  return href ? <Link href={href}>{body}</Link> : body;
};

export default function ThaIdolApp() {
  const [heroIndex, setHeroIndex] = useState(0);

  const weekly = useMemo(
    () =>
      EVENTS.filter((e) =>
        ["recommended", "beginner", "jpFriendly"].some((t) =>
          e.tags.includes(t)
        )
      ).slice(0, 5),
    []
  );

  return (
    <main className="max-w-[1100px] mx-auto p-3 space-y-4 bg-[#fffafd]">
      <header className="flex justify-between items-center">
        <h1
          className="text-xl font-bold"
          style={{ color: C.primary }}
        >
          Thai Idol Navi
        </h1>

        <Link
          href="/guide"
          className="text-sm underline"
        >
          初心者ガイド
        </Link>
      </header>

      <section className="grid md:grid-cols-3 gap-3">
        <div className="md:col-span-2 relative">
          <img
            src={heroBanners[heroIndex].imageUrl}
            alt={heroBanners[heroIndex].title}
            className="h-56 md:h-80 w-full object-cover rounded-xl"
          />

          <div className="absolute bottom-0 inset-x-0 p-3 text-white bg-black/45 rounded-b-xl">
            <p className="font-bold">
              {heroBanners[heroIndex].title}
            </p>
          </div>
        </div>

        <div className="space-y-2">
          {heroBanners.map((b, i) => (
            <button
              key={b.id}
              onClick={() => setHeroIndex(i)}
              className="w-full text-left text-xs border rounded p-2 bg-white"
              style={{ borderColor: C.border }}
            >
              {b.title}
            </button>
          ))}
        </div>
      </section>

      <section
        className="bg-white border rounded-xl p-3"
        style={{ borderColor: C.border }}
      >
        <h2 className="font-semibold mb-2">人気タグ</h2>

        <div className="flex flex-wrap gap-2">
          {POPULAR_TAGS.slice(0, 10).map((t) => (
            <Link
              key={t}
              href={`/?tag=${t}`}
              className="text-xs px-2 py-1 rounded-full border"
              style={{ borderColor: C.border }}
            >
              {t}
            </Link>
          ))}
        </div>
      </section>

      <section
        className="bg-white border rounded-xl p-3"
        style={{ borderColor: C.border }}
      >
        <h2 className="font-semibold mb-2">
          今週のおすすめライブ
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {weekly.map((e) => (
            <div
              key={e.id}
              className="space-y-1"
            >
              <Card
                title={e.titleJapanese}
                imageUrl={e.imageUrl}
                href={`/events/${e.slug}/`}
                subtitle={`${e.date} ${formatPrice(e)}`}
              />

              <div className="flex gap-2 text-xs">
                <a
                  href={e.ticketUrl}
                  className="underline"
                >
                  Ticket
                </a>

                <a
                  href={e.mapUrl}
                  className="underline"
                >
                  Map
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-4 gap-3">
        <div
          className="md:col-span-2 bg-white border rounded-xl p-3"
          style={{ borderColor: C.border }}
        >
          <h2 className="font-semibold mb-2">Pickup</h2>

          <div className="grid grid-cols-2 gap-2">
            {pickupItems.map((i) => (
              <Card
                key={i.id}
                title={i.title}
                imageUrl={i.imageUrl}
                subtitle={i.subtitle}
              />
            ))}
          </div>
        </div>

        <div
          className="bg-white border rounded-xl p-3"
          style={{ borderColor: C.border }}
        >
          <h2 className="font-semibold mb-2">Ranking</h2>

          <div className="space-y-1">
            {rankingItems.map((i, n) => (
              <div
                className="text-xs"
                key={i.id}
              >
                #{n + 1} {i.title}
              </div>
            ))}
          </div>
        </div>

        <div
          className="bg-white border rounded-xl p-3"
          style={{ borderColor: C.border }}
        >
          <h2 className="font-semibold mb-2">Birthday</h2>

          <div className="space-y-2">
            {birthdayItems.map((i) => (
              <Card
                key={i.id}
                title={i.title}
                imageUrl={i.imageUrl}
                subtitle={i.subtitle}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-3">
        <div
          className="md:col-span-2 bg-white border rounded-xl p-3"
          style={{ borderColor: C.border }}
        >
          <h2 className="font-semibold mb-2">News</h2>

          <div className="grid sm:grid-cols-2 gap-2">
            {newsItems.map((i) => (
              <Card
                key={i.id}
                title={i.title}
                imageUrl={i.imageUrl}
                subtitle={i.subtitle}
              />
            ))}
          </div>
        </div>

        <div
          className="bg-white border rounded-xl p-3"
          style={{ borderColor: C.border }}
        >
          <h2 className="font-semibold mb-2">
            Feature
          </h2>

          <div className="space-y-2">
            {featureArticles.map((i) => (
              <Card
                key={i.id}
                title={i.title}
                imageUrl={i.imageUrl}
                subtitle={i.subtitle}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-3">
        <div
          className="bg-white border rounded-xl p-3"
          style={{ borderColor: C.border }}
        >
          <h2 className="font-semibold mb-2">
            Events
          </h2>

          {EVENTS.map((e) => (
            <Link
              key={e.id}
              href={`/events/${e.slug}/`}
              className="block text-xs underline mb-1"
            >
              {e.titleJapanese}
            </Link>
          ))}
        </div>

        <div
          className="bg-white border rounded-xl p-3"
          style={{ borderColor: C.border }}
        >
          <h2 className="font-semibold mb-2">
            Idols
          </h2>

          {IDOLS.map((i) => (
            <Link
              key={i.id}
              href={`/idols/${i.slug}/`}
              className="block text-xs underline mb-1"
            >
              {i.name}
            </Link>
          ))}
        </div>

        <div
          className="bg-white border rounded-xl p-3"
          style={{ borderColor: C.border }}
        >
          <h2 className="font-semibold mb-2">
            Lab
          </h2>

          {LAB_ARTICLES.map((a) => (
            <Link
              key={a.id}
              href={`/lab/${a.slug}/`}
              className="block text-xs underline mb-1"
            >
              {a.titleJapanese}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

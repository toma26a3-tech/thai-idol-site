import portal from "@/data/portal.json";
import core from "@/data/core.json";

export const C = {
  primary: "#e451a4",
  primaryBg: "#fff4fa",
  border: "#eadff0",
  textMuted: "#7f6e86"
};

export type VisualItem = { id: string; title: string; subtitle?: string; imageUrl: string };
export type Event = { id:string; titleJapanese:string; date:string; openTime:string; startTime:string; venueName:string; venueArea:string; idolGroups:string[]; ticketPriceMin:number; ticketPriceMax:number; isFree:boolean; tags:string[]; imageUrl:string };
export type Idol = { id:string; name:string; nameJapanese:string; baseArea:string; genres:string[]; imageUrl:string };
export type LabArticle = { id:string; category:string; titleJapanese:string; summaryJapanese:string; contentJapanese:string; imageUrl:string };

export const heroBanners = portal.heroBanners as VisualItem[];
export const rankingItems = portal.rankingItems as VisualItem[];
export const pickupItems = portal.pickupItems as VisualItem[];
export const birthdayItems = portal.birthdayItems as VisualItem[];
export const newsItems = portal.newsItems as VisualItem[];
export const featureArticles = portal.featureArticles as VisualItem[];

export const EVENTS = core.events as Event[];
export const IDOLS = core.idols as Idol[];
export const LAB_ARTICLES = core.labArticles as LabArticle[];

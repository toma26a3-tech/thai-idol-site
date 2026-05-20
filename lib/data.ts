import portal from "@/data/portal.json";
import core from "@/data/core.json";
import fanArticles from "@/data/fanArticles.json";

export const C = { primary: "#e451a4", primaryBg: "#fff4fa", border: "#eadff0", textMuted: "#7f6e86" };
export type VisualItem = { id: string; title: string; subtitle?: string; imageUrl: string };
export type Event = { id:string; slug:string; titleJapanese:string; titleThai:string; date:string; openTime:string; startTime:string; venueName:string; venueArea:string; idolGroups:string[]; ticketPriceMin:number; ticketPriceMax:number; ticketUrl:string; mapUrl:string; organizer:string; lastCheckedAt:string; notes:string; isFree:boolean; tags:string[]; imageUrl:string };
export type Idol = { id:string; slug:string; name:string; nameJapanese:string; nameThai:string; concept:string; agency:string; baseArea:string; genres:string[]; socialLinks:Record<string,string>; jpNote:string; beginnerNote:string; tags:string[]; imageUrl:string };
export type LabArticle = { id:string; slug:string; category:string; titleJapanese:string; summaryJapanese:string; contentJapanese:string; target:string[]; tags:string[]; readTime:string; imageUrl:string; publishedAt:string; updatedAt:string };
export type FanArticle = { id:string; slug:string; category:string; titleJapanese:string; summaryJapanese:string; contentJapanese:string; target:"fan"; tags:string[]; readTime:string; imageUrl:string; publishedAt:string; updatedAt:string };

export const heroBanners = portal.heroBanners as VisualItem[];
export const rankingItems = portal.rankingItems as VisualItem[];
export const pickupItems = portal.pickupItems as VisualItem[];
export const birthdayItems = portal.birthdayItems as VisualItem[];
export const newsItems = portal.newsItems as VisualItem[];
export const featureArticles = portal.featureArticles as VisualItem[];
export const EVENTS = core.events as unknown as Event[];
export const IDOLS = core.idols as unknown as Idol[];
export const LAB_ARTICLES = core.labArticles as unknown as LabArticle[];
export const FAN_ARTICLES = fanArticles as unknown as FanArticle[];
export const POPULAR_TAGS = ["beginner","jpFriendly","free","orthodox","kawaii","songFocused","underground","cheki","goods","japanStyle","taiban","siam","thonglor","bangkok"];
export const formatPrice = (e: Event) => (e.isFree ? "無料" : `${e.ticketPriceMin}-${e.ticketPriceMax} THB`);

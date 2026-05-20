import events from "@/data/events.json";
import idols from "@/data/idols.json";
import labArticles from "@/data/labArticles.json";
import heroBannersData from "@/data/heroBanners.json";
import rankingItemsData from "@/data/rankingItems.json";
import pickupItemsData from "@/data/pickupItems.json";
import newsItemsData from "@/data/newsItems.json";
import featureArticlesData from "@/data/featureArticles.json";

export const C = { primary:"#E91E8C", primaryLight:"#F7C7DD", primaryBg:"#FFF3F8", gold:"#FFD700", warning:"#FBBF24", warningBg:"#FFFBEB", warningText:"#92400E", green:"#3B6D11", greenBg:"#EAF3DE", blue:"#185FA5", blueBg:"#E6F1FB", mapBlue:"#4285F4", text:"#1A1A1A", textSub:"#555", textMuted:"#888", border:"#EBEBEB", bg:"#FAFAF8", surface:"#FFFFFF" };

export type Event = (typeof events)[number];
export type Idol = (typeof idols)[number];
export type LabArticle = (typeof labArticles)[number];
export type VisualItem = { id:string; title:string; subtitle?:string; imageUrl:string };

export const EVENTS = events as Event[];
export const IDOLS = idols as Idol[];
export const LAB_ARTICLES = labArticles as LabArticle[];
export const heroBanners = heroBannersData as VisualItem[];
export const rankingItems = rankingItemsData as VisualItem[];
export const pickupItems = pickupItemsData as VisualItem[];
export const newsItems = newsItemsData as VisualItem[];
export const featureArticles = featureArticlesData as VisualItem[];
export const birthdayItems = rankingItemsData as VisualItem[];

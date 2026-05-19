export const C = {
  primary: "#E91E8C", primaryLight: "#FF6B9D", primaryBg: "#FFF0F6", gold: "#FFD700",
  warning: "#FBBF24", warningBg: "#FFFBEB", warningText: "#92400E", green: "#3B6D11", greenBg: "#EAF3DE",
  blue: "#185FA5", blueBg: "#E6F1FB", mapBlue: "#4285F4", text: "#1A1A1A", textSub: "#555", textMuted: "#888", border: "#EBEBEB", bg: "#FAFAF8", surface: "#FFFFFF"
};

export type Event = { id:string; titleJapanese:string; titleThai:string; date:string; dayOfWeek:string; openTime:string; startTime:string; venueName:string; venueArea:string; idolGroups:string[]; ticketPriceMin:number; ticketPriceMax:number; ticketUrl:string|null; descriptionJapanese:string; sourceAccountName:string; lastCheckedAt:string; tags:string[]; isFree:boolean };
export type Idol = { id:string; name:string; nameJapanese:string; nameThai:string; status:"active"|"hiatus"; genres:string[]; emoji:string; bg:string; recommendedForJapaneseFans:boolean; beginnerFriendly:boolean };

export const EVENTS: Event[] = [
  { id:"EVT-001", titleJapanese:"CANDY PARADE — Spring Edition", titleThai:"แคนดี้ พาเหรด สปริง", date:"2025-05-17", dayOfWeek:"土曜日", openTime:"17:30", startTime:"18:00", venueName:"RCA Plaza", venueArea:"Bangkok - RCA", idolGroups:["SugarBite","Candy Pop"], ticketPriceMin:300, ticketPriceMax:500, ticketUrl:"#", descriptionJapanese:"春の大型合同ライブ。", sourceAccountName:"SugarBite Official", lastCheckedAt:"2025-05-15", tags:["recommended","beginner"], isFree:false },
  { id:"EVT-002", titleJapanese:"STARLIGHT FES vol.8", titleThai:"สตาร์ไลท์ เฟส ครั้งที่ 8", date:"2025-05-18", dayOfWeek:"日曜日", openTime:"13:30", startTime:"14:00", venueName:"Siam Square One", venueArea:"Bangkok - Siam", idolGroups:["Rosé Girls","Candy Pop","SugarBite"], ticketPriceMin:0, ticketPriceMax:0, ticketUrl:null, descriptionJapanese:"無料の屋外ライブフェス。", sourceAccountName:"StarLight Event", lastCheckedAt:"2025-05-14", tags:["beginner","free"], isFree:true }
];

export const IDOLS: Idol[] = [
  { id:"GRP-001", name:"BNK48", nameJapanese:"ビーエヌケー48", nameThai:"บีเอ็นเค48", status:"active", genres:["J-pop style"], emoji:"⭐", bg:"linear-gradient(135deg,#FF6B9D,#E91E8C)", recommendedForJapaneseFans:true, beginnerFriendly:true },
  { id:"GRP-002", name:"SugarBite", nameJapanese:"シュガーバイト", nameThai:"ชูการ์ไบต์", status:"active", genres:["Cute Idol"], emoji:"🍬", bg:"linear-gradient(135deg,#FFB3CC,#FF6B9D)", recommendedForJapaneseFans:true, beginnerFriendly:true }
];

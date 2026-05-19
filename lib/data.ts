export const C = {
  primary: "#E91E8C",
  primaryLight: "#F7C7DD",
  primaryBg: "#FFF3F8",
  gold: "#FFD700",
  warning: "#FBBF24",
  warningBg: "#FFFBEB",
  warningText: "#92400E",
  green: "#3B6D11",
  greenBg: "#EAF3DE",
  blue: "#185FA5",
  blueBg: "#E6F1FB",
  mapBlue: "#4285F4",
  text: "#1A1A1A",
  textSub: "#555",
  textMuted: "#888",
  border: "#EBEBEB",
  bg: "#FAFAF8",
  surface: "#FFFFFF"
};

export type Event = { id:string; titleJapanese:string; titleThai:string; date:string; dayOfWeek:string; openTime:string; startTime:string; venueName:string; venueArea:string; idolGroups:string[]; ticketPriceMin:number; ticketPriceMax:number; ticketUrl:string|null; descriptionJapanese:string; sourceAccountName:string; lastCheckedAt:string; tags:string[]; isFree:boolean };
export type Idol = { id:string; name:string; nameJapanese:string; nameThai:string; concept:string; agency:string; baseArea:string; status:"active"|"hiatus"; genres:string[]; socialLinks:Record<string,boolean>; recommendedForJapaneseFans:boolean; beginnerFriendly:boolean; lastCheckedAt:string };
export type LabArticle = { id:string; slug:string; category:string; titleJapanese:string; titleThai:string; summaryJapanese:string; target:("idol"|"management"|"beginner")[]; readTime:string; language:("ja"|"th")[]; contentJapanese:string; contentThai:string };

export const EVENTS: Event[] = [
  { id:"EVT-001", titleJapanese:"CANDY PARADE — Spring Edition", titleThai:"แคนดี้ พาเหรด สปริง", date:"2026-05-19", dayOfWeek:"火曜日", openTime:"17:30", startTime:"18:00", venueName:"RCA Plaza", venueArea:"Bangkok", idolGroups:["SugarBite","Candy Pop"], ticketPriceMin:300, ticketPriceMax:500, ticketUrl:"#", descriptionJapanese:"春の大型合同ライブ。", sourceAccountName:"SugarBite Official", lastCheckedAt:"2026-05-18", tags:["recommended","beginner"], isFree:false },
  { id:"EVT-002", titleJapanese:"STARLIGHT FES vol.8", titleThai:"สตาร์ไลท์ เฟส ครั้งที่ 8", date:"2026-05-20", dayOfWeek:"水曜日", openTime:"13:30", startTime:"14:00", venueName:"Siam Square One", venueArea:"Siam", idolGroups:["Rosé Girls","Candy Pop","SugarBite"], ticketPriceMin:0, ticketPriceMax:0, ticketUrl:null, descriptionJapanese:"無料の屋外ライブフェス。", sourceAccountName:"StarLight Event", lastCheckedAt:"2026-05-18", tags:["beginner","free"], isFree:true },
  { id:"EVT-003", titleJapanese:"THONG LOR IDOL JAM", titleThai:"ไอดอลแจม", date:"2026-05-24", dayOfWeek:"日曜日", openTime:"18:30", startTime:"19:00", venueName:"Thonglor Live House", venueArea:"Thonglor", idolGroups:["BNK48","SugarBite"], ticketPriceMin:450, ticketPriceMax:600, ticketUrl:"#", descriptionJapanese:"対バン型のナイト公演。", sourceAccountName:"TLH", lastCheckedAt:"2026-05-18", tags:["recommended"], isFree:false },
  { id:"EVT-004", titleJapanese:"RATCHADA GIRLS LIVE", titleThai:"ราชดาไลฟ์", date:"2026-05-25", dayOfWeek:"月曜日", openTime:"18:00", startTime:"18:30", venueName:"Ratchada Hall", venueArea:"Ratchada", idolGroups:["NorthStar Girls"], ticketPriceMin:200, ticketPriceMax:300, ticketUrl:"#", descriptionJapanese:"平日夜の定期ライブ。", sourceAccountName:"Ratchada Hall", lastCheckedAt:"2026-05-17", tags:["beginner"], isFree:false }
];

export const IDOLS: Idol[] = [
  { id:"GRP-001", name:"BNK48", nameJapanese:"ビーエヌケー48", nameThai:"บีเอ็นเค48", concept:"会いに行けるアイドル", agency:"BNK48 Office", baseArea:"Bangkok", status:"active", genres:["J-POP系","Idol"], socialLinks:{x:true,instagram:true,youtube:true}, recommendedForJapaneseFans:true, beginnerFriendly:true, lastCheckedAt:"2026-05-18" },
  { id:"GRP-002", name:"SugarBite", nameJapanese:"シュガーバイト", nameThai:"ชูการ์ไบต์", concept:"キュート系ガールズグループ", agency:"Sweet Production", baseArea:"Siam", status:"active", genres:["Cute","Pop"], socialLinks:{x:true,instagram:true,tiktok:true}, recommendedForJapaneseFans:true, beginnerFriendly:true, lastCheckedAt:"2026-05-18" },
  { id:"GRP-003", name:"NorthStar Girls", nameJapanese:"ノーススターガールズ", nameThai:"นอร์ทสตาร์ เกิร์ลส", concept:"チェンマイ拠点", agency:"North Entertainment", baseArea:"Chiang Mai", status:"active", genres:["Local","Idol"], socialLinks:{instagram:true,facebook:true}, recommendedForJapaneseFans:false, beginnerFriendly:true, lastCheckedAt:"2026-05-17" }
];

export const LAB_ARTICLES: LabArticle[] = [
  { id:"lab-001", slug:"cheki-basic", category:"特典会・チェキ", titleJapanese:"日本式アイドルの『チェキ対応』とは？", titleThai:"เชกิคืออะไร และไอดอลควรสื่อสารอย่างไร", summaryJapanese:"初見ファンを常連に変えるチェキ対応の基本。", target:["idol","management","beginner"], readTime:"5分", language:["ja","th"], contentJapanese:"チェキ対応は認知形成の起点です。", contentThai:"การสื่อสารหน้าเชกิเป็นจุดเริ่มต้นของแฟนประจำ" },
  { id:"lab-002", slug:"post-live-thanks", category:"SNS運用", titleJapanese:"ライブ後のお礼投稿で初見ファンを逃さない方法", titleThai:"โพสต์ขอบคุณหลังไลฟ์", summaryJapanese:"投稿テンプレートと導線設計。", target:["idol","management"], readTime:"6分", language:["ja","th"], contentJapanese:"終演30分以内投稿が有効。", contentThai:"โพสต์ใน 30 นาทีหลังจบ" },
  { id:"lab-003", slug:"taiban-mc", category:"ライブ演出", titleJapanese:"対バンで覚えてもらうMC構成", titleThai:"โครงสร้าง MC ให้จำได้", summaryJapanese:"短時間で印象に残すMC設計。", target:["idol"], readTime:"4分", language:["ja"], contentJapanese:"導入・関係構築・CTAの3段階。", contentThai:"" },
  { id:"lab-004", slug:"jp-fan-copy", category:"SNS運用", titleJapanese:"日本人ファンに届く告知文の作り方", titleThai:"เขียนโพสต์ให้แฟนญี่ปุ่นเข้าใจ", summaryJapanese:"日英/日タイ併記の実践。", target:["management","beginner"], readTime:"7分", language:["ja","th"], contentJapanese:"主語と日時を先頭に置く。", contentThai:"" },
  { id:"lab-005", slug:"birthday-live", category:"日本地下アイドルニュース", titleJapanese:"生誕祭がファンを強くする理由", titleThai:"เหตุผลที่งานวันเกิดสร้างแฟนเหนียวแน่น", summaryJapanese:"エモーション設計と回遊導線。", target:["idol","management"], readTime:"6分", language:["ja"], contentJapanese:"年次イベントとしてブランド化。", contentThai:"" },
  { id:"lab-006", slug:"newcomer-to-regular", category:"動員・ファン化", titleJapanese:"初見を常連に変える3ステップ", titleThai:"3 ขั้นตอนเปลี่ยนคนดูใหม่เป็นแฟนประจำ", summaryJapanese:"予約・現場・SNSの連携。", target:["idol","management","beginner"], readTime:"5分", language:["ja","th"], contentJapanese:"接点を3回作る。", contentThai:"" }
];

# DigNets startup rejasi va algoritmlari

## 1. Loyiha g'oyasi

DigNets - Telegram kabi tez chat va Instagram kabi rasm/video feed birlashgan social platforma.

Asosiy farq:

- Chat va media bitta joyda.
- Username orqali topish.
- Rasm, video, reels, story, post, like, save, comment.
- Real-time xabar va feed yangilanishi.
- Telefon, planshet, noutbuk va desktopda responsive ko'rinish.

## 2. User ketma-ketligi

1. User saytga kiradi.
2. Kirish yoki ro'yxatdan o'tishni tanlaydi.
3. Ro'yxatdan o'tishda ism, email, username va parol yozadi.
4. Backend username band emasligini tekshiradi.
5. User yaratiladi va sessiya cookie orqali saqlanadi.
6. User feed, explore, create, chat va profile sahifalariga kira oladi.

## 3. Feed algoritmi

Postlar quyidagi score bilan tartiblanadi:

```text
score = freshness + engagement + relationship + mediaQuality + hashtagMatch
```

- freshness: yangi postlar yuqoriroq chiqadi.
- engagement: like, comment, save qancha ko'p bo'lsa, post shuncha kuchli.
- relationship: user kuzatgan yoki chat qilgan odamlar posti yuqoriroq.
- mediaQuality: rasm/video bor post oddiy matndan ustunroq.
- hashtagMatch: qidiruvdagi hashtag mos kelsa, explore'da yuqoriroq.

## 4. Chat algoritmi

Chatlar quyidagicha saralanadi:

```text
score = lastMessageTime + unreadWeight + pinnedWeight + onlineWeight
```

Hozirgi MVP `lastMessageTime` asosida saralaydi. Keyingi versiyada:

- unread xabarlar yuqorida turadi.
- pinned chat doim tepada turadi.
- online user bilan chat biroz ustunlik oladi.

## 5. Upload va media

User rasm yoki video tanlaydi. Backend faylni `public/uploads` ichiga saqlaydi va postga media URL yozadi.

Kelajakda real startup uchun:

- S3, Cloudflare R2 yoki Supabase Storage ishlatish.
- Video compress qilish.
- Thumbnail avtomatik yaratish.
- NSFW/spam moderation qo'shish.

## 6. Telegram API ulash

Telegram'ning hamma ichki funksiyalarini nusxalash mumkin emas. Rasmiy yo'l:

1. BotFather orqali bot ochish.
2. `TELEGRAM_BOT_TOKEN` olish.
3. Telegram Login Widget qo'shish.
4. Telegram Mini App SDK orqali Telegram ichida DigNets ochish.
5. Bot API orqali xabar, notification va komandalarni ulash.

## 7. Instagram API ulash

Instagram private API ishlatish xavfli va blokka olib kelishi mumkin. Rasmiy yo'l:

1. Meta Developer hisob ochish.
2. App yaratish.
3. Instagram Graph API yoqish.
4. Business yoki Creator account ulash.
5. App Reviewdan o'tish.
6. `INSTAGRAM_ACCESS_TOKEN` bilan media publish va insights olish.

## 8. GitHub uchun

1. Zipni oching.
2. Papkaga kiring.
3. `npm start` ishga tushiring.
4. Brauzerda `http://localhost:5177` oching.
5. GitHub'ga push qilish uchun:

```bash
git init
git add .
git commit -m "Initial DigNets MVP"
git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

## 9. Keyingi kuchli funksiyalar

- WebSocket realtime layer.
- Push notification.
- Mobile app: React Native yoki Flutter.
- AI caption generator.
- Creator monetization.
- Group chat va channels.
- Stories 24 soatdan keyin auto-hide.
- Admin panel va moderation.
- Production database: PostgreSQL.

## 10. Hozirgi yangi versiyada qo'shilgan flow

Siz ko'rsatgan UI ketma-ketligiga qarab DigNets ichida quyidagi ekranlar bor:

1. Kirish / ro'yxatdan o'tish.
2. Home: profile header, stories, haftalik pick/feed.
3. Search: hashtag, people va group search.
4. Explore/Reels: vertical video/card flow.
5. Messages: chat list, direct chat, group chat.
6. Contacts: odam tanlab xabar yuborish.
7. Calls: voice/video call demo room.
8. Notifications: yangi xabar va community xabarlari.
9. Profile: user profile, followers/following.
10. Settings: profile edit, notifications, QR login ko'rinishi.

Bu versiya lokal testda ishlaydi va public serverga deploy qilinganda odamlar bitta umumiy server orqali xabar almashadi.

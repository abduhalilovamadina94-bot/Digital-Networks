# DigNets internet orqali ishlashi uchun ketma-ketlik

Lokal kompyuterda `localhost` faqat sizda ishlaydi. Boshqa odam skachat qilib, boshqa joydan sizga xabar yozishi uchun DigNets bitta public serverda turishi kerak.

## Eng oson yo'l: Render

1. GitHub'da yangi repository oching.
2. DigNets fayllarini repository'ga push qiling.
3. Repository ichida `Dockerfile` nomli fayl bo'lmasin. Agar bo'lsa, o'chiring.
4. Render.com saytida account oching.
5. New Web Service tanlang.
6. GitHub repository'ni ulang.
7. Environment type: `Node`.
8. Build command: `npm install --omit=dev`.
9. Start command: `npm start`.
10. Environment:

```text
PUBLIC_URL=https://sizning-render-urlingiz.onrender.com
```

11. Deploy tugagandan keyin berilgan URL'ni hammaga yuborasiz.
12. Kim shu URL orqali ro'yxatdan o'tsa, ularning xabarlari bitta serverga tushadi.

## Sizdagi xato nimadan bo'lgan?

Render logida:

```text
Dockerfile:1
>>> node_modules
error: unknown instruction: node_modules
```

Bu `Dockerfile` ichiga adashib `.gitignore` matni tushib qolganini bildiradi. To'g'ri yechim: GitHub repository'dan `Dockerfile` faylini o'chiring yoki loyihani yangilangan zipdan qayta yuklang.

## Production uchun kerak bo'ladigan narsalar

- Domain: `dignets.uz` yoki boshqa domen.
- HTTPS: hosting avtomatik beradi.
- Database: hozir JSON demo database. Production uchun PostgreSQL kerak.
- File storage: hozir upload server ichida. Production uchun S3, Cloudflare R2 yoki Supabase Storage kerak.
- Video call: WebRTC uchun TURN server kerak.
- Push notification: Firebase Cloud Messaging yoki Web Push kerak.

## Telegram va Instagram API

Telegram:

- BotFather orqali bot token.
- Telegram Login Widget.
- Mini App SDK.
- Bot API notification.

Instagram:

- Meta Developer App.
- Instagram Graph API.
- Business/Creator account.
- App Review.

Private API ishlatish tavsiya qilinmaydi, account blok bo'lishi mumkin.

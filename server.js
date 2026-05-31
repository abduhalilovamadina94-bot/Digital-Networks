# DigNets

DigNets is a realtime social messenger MVP with a Telegram-style chat core and Instagram-style creator feed, redesigned with a dark DN brand interface.

## Run locally

```bash
npm start
```

Open:

```text
http://localhost:5177
```

Demo account:

```text
username: madina
password: demo12345
```

## Included features

- Sign in and sign up with username, email, phone and password.
- Mobile-first dark DN design inspired by the provided UI flow.
- Home, stories, feed, reels/explore, search, profile, contacts, messages, calls, notifications and settings.
- Realtime chat through Server-Sent Events.
- Direct chats and group chats.
- Image/video upload for posts.
- Likes, saves and comments.
- Local JSON database for demo use.
- PWA manifest and service worker.
- Deploy files for Render and Docker.

## Public internet messaging

Localhost works only on your own computer. For Telegram-like messaging between different users in different places, deploy this same project to a public server.

See:

```text
DEPLOY_PUBLIC_SERVER_UZ.md
```

## Production upgrade path

- Replace JSON database with PostgreSQL.
- Replace local uploads with S3, Cloudflare R2 or Supabase Storage.
- Add Web Push or Firebase Cloud Messaging.
- Add WebRTC TURN server for real audio/video calls.
- Add official Telegram Bot API / Mini App integration.
- Add official Instagram Graph API integration after Meta app review.

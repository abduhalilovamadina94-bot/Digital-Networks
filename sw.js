:root {
  --bg: #070908;
  --panel: #0d1110;
  --panel-2: #121816;
  --card: #151c19;
  --soft: #1d2723;
  --text: #f7fff9;
  --muted: #9baaa3;
  --line: rgba(255, 255, 255, 0.1);
  --green: #21d084;
  --green-2: #0f8f5a;
  --red: #ec2f36;
  --purple: #8855ff;
  --yellow: #ffce51;
  --shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
}

* { box-sizing: border-box; }
html { background: var(--bg); }
body {
  margin: 0;
  min-height: 100vh;
  color: var(--text);
  background:
    radial-gradient(circle at 20% 0%, rgba(33, 208, 132, 0.18), transparent 34%),
    radial-gradient(circle at 80% 12%, rgba(236, 47, 54, 0.14), transparent 30%),
    var(--bg);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

button, input, textarea { font: inherit; }
button { border: 0; cursor: pointer; color: inherit; }
img, video { max-width: 100%; display: block; }
.hidden { display: none !important; }
.dn-logo { width: 44px; height: 44px; object-fit: contain; filter: drop-shadow(0 8px 18px rgba(236, 47, 54, .25)); }
.dn-logo.hero { width: 112px; height: 112px; }
.dn-logo.card { width: 76px; height: 76px; }
.dn-logo.mark { width: 58px; height: 58px; }

.auth-page { min-height: 100vh; display: grid; place-items: center; padding: 22px; }
.phone-frame {
  width: min(100%, 430px);
  min-height: 760px;
  border: 1px solid var(--line);
  border-radius: 34px;
  background: linear-gradient(180deg, rgba(8, 14, 12, .95), rgba(1, 4, 3, .98));
  box-shadow: var(--shadow);
  overflow: hidden;
}
.signal { height: 42px; display: flex; align-items: center; justify-content: space-between; padding: 0 22px; font-size: 13px; color: #fff; }
.auth-visual { min-height: 320px; display: grid; align-content: center; justify-items: center; gap: 22px; padding: 28px; background: linear-gradient(145deg, rgba(16, 91, 67, .72), rgba(0, 0, 0, .9)), repeating-linear-gradient(135deg, rgba(255,255,255,.05), rgba(255,255,255,.05) 2px, transparent 2px, transparent 18px); text-align: center; }
.auth-visual h1 { margin: 0; font-size: 46px; letter-spacing: 0; }
.auth-visual p, .tiny, .muted { color: var(--muted); }
.auth-card { padding: 20px; display: grid; gap: 12px; }
.segmented { display: grid; grid-template-columns: 1fr 1fr; padding: 4px; gap: 4px; border-radius: 14px; background: var(--soft); }
.segmented button { height: 42px; border-radius: 11px; background: transparent; }
.segmented button.active { background: var(--green); color: #03130c; font-weight: 800; }
.field { width: 100%; min-height: 48px; border-radius: 14px; border: 1px solid var(--line); background: #090d0c; color: var(--text); padding: 12px 14px; outline: none; }
textarea.field { min-height: 120px; resize: vertical; }
.primary, .ghost, .new-post, .post-actions button, .create-tools button, .call-card button, .profile-actions button, .inline-form button, .message-form button, .chips button, .small {
  min-height: 42px;
  border-radius: 13px;
  padding: 0 14px;
  background: var(--soft);
}
.primary, .new-post { background: linear-gradient(135deg, var(--green), var(--green-2)); color: #04130d; font-weight: 850; }
.wide { width: 100%; }
.small { min-height: 34px; }

.desktop-shell { min-height: 100vh; display: grid; grid-template-columns: 250px minmax(0, 1fr) 320px; }
.left-panel, .right-panel { position: sticky; top: 0; height: 100vh; padding: 18px; background: rgba(6, 9, 8, .78); border-color: var(--line); backdrop-filter: blur(18px); overflow: auto; }
.left-panel { border-right: 1px solid var(--line); }
.right-panel { border-left: 1px solid var(--line); display: grid; align-content: start; gap: 14px; }
.brand { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
.brand b { display: block; font-size: 24px; }
.brand span, .person span, .chat-row span, .mini-card span, .call-card span, .profile-hero p { color: var(--muted); font-size: 13px; }
.side-nav { display: grid; gap: 8px; margin-top: 16px; }
.side-nav button { min-height: 48px; display: flex; align-items: center; gap: 12px; padding: 0 12px; border-radius: 16px; background: transparent; text-align: left; }
.side-nav button b, .mobile-tabs b { width: 30px; height: 30px; border-radius: 50%; display: grid; place-items: center; background: var(--soft); color: var(--green); }
.side-nav button.active { background: rgba(33, 208, 132, .12); color: var(--green); }
.content { min-width: 0; padding: 18px; }
.topbar { display: flex; gap: 12px; align-items: center; margin-bottom: 16px; }
.search-box { min-height: 48px; flex: 1; display: flex; align-items: center; gap: 10px; padding: 0 14px; border: 1px solid var(--line); border-radius: 16px; background: rgba(255,255,255,.04); color: var(--muted); }
.search-box input { width: 100%; color: var(--text); border: 0; outline: 0; background: transparent; }
.screen { display: grid; gap: 16px; max-width: 980px; margin: 0 auto; }

.welcome-card, .panel-block, .post-card, .mini-profile, .mini-card, .create-card, .profile-hero, .call-card, .notify-list article {
  border: 1px solid var(--line);
  border-radius: 22px;
  background: rgba(18, 24, 22, .86);
  box-shadow: 0 12px 40px rgba(0,0,0,.18);
}
.welcome-card { display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 20px; background: linear-gradient(135deg, rgba(20, 82, 58, .76), rgba(12, 12, 14, .92)); }
.welcome-card p, .welcome-card h2 { margin: 0 0 6px; }
.quick-stats, .stats-row { display: flex; gap: 10px; flex-wrap: wrap; }
.quick-stats span, .stats-row div { padding: 9px 11px; border-radius: 999px; background: rgba(255,255,255,.08); color: #dff7ea; }
.story-strip { display: grid; grid-auto-flow: column; grid-auto-columns: 98px; gap: 10px; overflow-x: auto; padding-bottom: 4px; }
.story, .story-add { min-height: 132px; border-radius: 22px; padding: 12px; display: grid; place-items: center; align-content: center; gap: 8px; background: linear-gradient(180deg, #1a2521, #0e1211); border: 1px solid var(--line); color: var(--text); }
.story-add b { font-size: 30px; color: var(--green); }
.avatar { width: 54px; height: 54px; border-radius: 50%; display: grid; place-items: center; font-weight: 850; color: white; background: linear-gradient(135deg, var(--red), var(--green)); border: 3px solid #0b0f0d; outline: 2px solid var(--green); flex: none; }
.feed-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; align-items: start; }
.feed-grid.compact { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.post-card { overflow: hidden; }
.post-card header { display: flex; align-items: center; gap: 12px; padding: 14px; }
.post-card header div:nth-child(2) { min-width: 0; flex: 1; }
.post-card header span { display: block; color: var(--muted); font-size: 13px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.post-card header button { width: 34px; height: 34px; border-radius: 50%; background: var(--soft); }
.media { min-height: 320px; display: grid; place-items: center; background: #07100c; overflow: hidden; }
.media img, .media video { width: 100%; height: 100%; max-height: 640px; object-fit: cover; }
.spotlight-card, .reel-card, .code-card { min-height: 320px; width: 100%; display: grid; place-items: center; align-content: center; gap: 12px; padding: 24px; text-align: center; }
.spotlight-card { background: radial-gradient(circle, rgba(33, 208, 132, .2), transparent 38%), linear-gradient(145deg, #12251c, #020504); }
.reel-card { background: linear-gradient(160deg, #10231e, #09100e 55%, #281117); }
.reel-card span, .code-card b { color: var(--green); }
.code-card { background: linear-gradient(135deg, #111827, #0b1411); }
.post-card footer { padding: 14px; display: grid; gap: 10px; }
.post-card p { margin: 0; color: #dbe8e1; }
.post-actions { display: flex; gap: 8px; flex-wrap: wrap; }
.comments { display: grid; gap: 4px; color: var(--muted); font-size: 13px; }
.inline-form, .message-form { display: flex; gap: 8px; }
.inline-form input, .message-form input { flex: 1; min-width: 0; min-height: 42px; border: 1px solid var(--line); border-radius: 13px; background: #090d0c; color: var(--text); padding: 0 12px; outline: none; }
.panel-block, .create-card { padding: 18px; display: grid; gap: 12px; }
.panel-block h2, .create-card h2, .profile-hero h2 { margin: 0; }
.panel-block p { margin: 0; color: var(--muted); }
.chips { display: flex; gap: 8px; overflow-x: auto; }
.chips button { background: rgba(33, 208, 132, .16); color: #c8ffdf; white-space: nowrap; }
.people-list { display: grid; gap: 10px; }
.person, .chat-row { border: 1px solid var(--line); border-radius: 18px; padding: 12px; background: rgba(255,255,255,.04); display: flex; align-items: center; gap: 12px; text-align: left; }
.person div:nth-child(2), .chat-row div:nth-child(2) { min-width: 0; flex: 1; }
.person span, .chat-row span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.messages-layout { display: grid; grid-template-columns: 330px minmax(0, 1fr); gap: 14px; min-height: 680px; }
.chat-index, .conversation { border: 1px solid var(--line); border-radius: 22px; background: rgba(18, 24, 22, .86); padding: 12px; overflow: hidden; }
.chat-index { display: grid; align-content: start; gap: 10px; }
.chat-tabs { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
.chat-tabs button { min-height: 34px; border-radius: 10px; background: var(--soft); color: var(--muted); font-size: 12px; }
.chat-row.active { border-color: rgba(33, 208, 132, .55); background: rgba(33, 208, 132, .12); }
.chat-row small { color: var(--green); }
.conversation { display: grid; grid-template-rows: auto 1fr auto; min-width: 0; }
.chat-head { display: flex; align-items: center; gap: 12px; padding-bottom: 12px; border-bottom: 1px solid var(--line); }
.chat-head div { flex: 1; }
.chat-head span { display: block; color: var(--muted); font-size: 13px; }
.chat-head button { min-height: 36px; border-radius: 11px; background: var(--soft); }
.message-list { min-height: 420px; padding: 14px 4px; display: flex; flex-direction: column; gap: 8px; overflow: auto; }
.bubble { max-width: 76%; align-self: flex-start; display: grid; gap: 4px; padding: 10px 12px; border-radius: 16px 16px 16px 4px; background: #1f2925; }
.bubble.me { align-self: flex-end; border-radius: 16px 16px 4px 16px; background: linear-gradient(135deg, var(--green), #159a62); color: #03120c; }
.bubble small { opacity: .72; font-size: 11px; }
.reels-layout { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; }
.reel-screen { min-height: 620px; border-radius: 28px; overflow: hidden; border: 1px solid var(--line); background: #050707; position: relative; }
.reel-screen .media { height: 100%; min-height: 620px; }
.reel-overlay { position: absolute; inset: auto 0 0; display: grid; gap: 8px; padding: 20px; background: linear-gradient(transparent, rgba(0,0,0,.85)); }
.reel-overlay p { margin: 0; }
.reel-overlay button { justify-self: start; min-height: 34px; border-radius: 999px; background: rgba(255,255,255,.12); }
.call-grid, .settings-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; }
.call-card { padding: 14px; display: grid; gap: 10px; }
.call-visual { min-height: 220px; border-radius: 18px; display: grid; place-items: center; background: linear-gradient(145deg, #183527, #070909); color: var(--green); font-weight: 900; }
.call-visual.video { background: linear-gradient(145deg, #31151a, #070909); color: #ffb4b6; }
.notify-list { display: grid; gap: 10px; }
.notify-list article { padding: 14px; }
.notify-list article.unread { border-color: rgba(33, 208, 132, .55); }
.notify-list p { color: var(--muted); margin: 6px 0; }
.profile-hero { padding: 22px; display: grid; grid-template-columns: auto 1fr auto; gap: 16px; align-items: center; }
.profile-hero span { color: #dbe8e1; }
.profile-actions { display: grid; gap: 8px; }
.stats-row { margin-top: -4px; }
.stats-row div { display: grid; min-width: 120px; border-radius: 18px; text-align: center; }
.stats-row span { color: var(--muted); font-size: 13px; }
.toggle { min-height: 48px; border-radius: 14px; background: rgba(255,255,255,.04); padding: 0 12px; display: flex; align-items: center; justify-content: space-between; }
.toggle input { width: 22px; height: 22px; accent-color: var(--green); }
.qr { width: 210px; aspect-ratio: 1; border-radius: 18px; background: #fff; padding: 18px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
.qr span { background: repeating-linear-gradient(90deg, #000 0 8px, #fff 8px 14px); border: 10px solid #000; }
.mini-profile { padding: 18px; text-align: center; display: grid; justify-items: center; gap: 8px; }
.mini-profile h3, .mini-profile p { margin: 0; }
.mini-profile div:last-child { display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; color: var(--muted); font-size: 12px; }
.mini-card { padding: 14px; display: grid; gap: 10px; }
.mini-card h3 { margin: 0; }
.mini-card article { display: grid; gap: 4px; padding: 10px; border-radius: 14px; background: rgba(255,255,255,.04); }
.empty-state { min-height: 320px; display: grid; place-items: center; align-content: center; gap: 10px; color: var(--muted); text-align: center; }
.create-tools { display: flex; gap: 8px; flex-wrap: wrap; }
.toast { position: fixed; left: 50%; bottom: 24px; transform: translateX(-50%); z-index: 10; background: #f7fff9; color: #050806; border-radius: 999px; padding: 12px 18px; box-shadow: var(--shadow); }
.mobile-tabs { display: none; }

@media (max-width: 1180px) {
  .desktop-shell { grid-template-columns: 84px minmax(0, 1fr); }
  .left-panel { padding: 12px; }
  .brand div, .side-nav span, .new-post { display: none; }
  .right-panel { position: static; height: auto; grid-column: 1 / -1; border-left: 0; border-top: 1px solid var(--line); grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 820px) {
  .desktop-shell { display: block; padding-bottom: 78px; }
  .left-panel, .right-panel { display: none; }
  .content { padding: 12px; }
  .topbar { align-items: stretch; flex-direction: column; }
  .feed-grid, .feed-grid.compact, .messages-layout { grid-template-columns: 1fr; }
  .messages-layout { min-height: auto; }
  .chat-index { max-height: 330px; overflow: auto; }
  .conversation { min-height: 560px; }
  .profile-hero { grid-template-columns: 1fr; text-align: center; justify-items: center; }
  .profile-actions { grid-template-columns: repeat(3, 1fr); width: 100%; }
  .mobile-tabs { position: fixed; z-index: 8; left: 10px; right: 10px; bottom: 10px; display: grid; grid-template-columns: repeat(5, 1fr); gap: 4px; padding: 6px; border: 1px solid var(--line); border-radius: 22px; background: rgba(8, 10, 9, .86); backdrop-filter: blur(18px); }
  .mobile-tabs button { min-height: 56px; border-radius: 16px; background: transparent; display: grid; place-items: center; color: var(--muted); font-size: 11px; }
  .mobile-tabs button.active { background: rgba(33,208,132,.14); color: var(--green); }
  .mobile-tabs b { width: 28px; height: 28px; }
  .reel-screen, .reel-screen .media { min-height: 560px; }
}

@media (max-width: 460px) {
  .auth-page { padding: 0; }
  .phone-frame { border-radius: 0; min-height: 100vh; border: 0; }
  .auth-visual { min-height: 280px; }
  .media, .spotlight-card, .reel-card, .code-card { min-height: 280px; }
  .story-strip { grid-auto-columns: 86px; }
}

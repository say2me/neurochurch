export const socialStyles = `
.meme-section{border-top:1px solid var(--line);padding:96px 8vw;display:grid;grid-template-columns:minmax(240px,340px) minmax(0,1fr);gap:clamp(36px,6vw,96px);align-items:center}
.meme-player{width:100%;max-width:340px;justify-self:center;background:#000;border:1px solid var(--line)}
.meme-player video{display:block;width:100%;height:auto;aspect-ratio:9/16}
.meme-copy{max-width:670px}
.meme-format{color:var(--blue);font-size:14px;margin-bottom:24px}
.meme-copy h2{font-size:clamp(34px,3.6vw,56px);line-height:1.25;margin-bottom:26px}
.meme-description{color:#c5cee6;max-width:540px;font-size:17px}
.meme-source{margin-top:30px}
.meme-source p{font-size:14px;color:var(--muted);margin-bottom:18px}
.site-button{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:11px 22px;margin:0 10px 12px 0;background:var(--silver);border:1px solid var(--silver);border-radius:4px;color:var(--night);font-size:14px;font-weight:500}
.site-button:hover{background:#fff;color:var(--night)}
.site-button-secondary{background:transparent;color:var(--silver);border-color:#aab5d075}
.site-button-secondary:hover{background:#ffffff0d;color:#fff}
.meme-disclosure{font-size:12px;color:var(--muted);max-width:520px;margin:10px 0 20px;line-height:1.75}
.meme-transcript{font-size:14px;max-width:540px;color:var(--muted)}
.meme-transcript summary{cursor:pointer;width:fit-content;text-decoration:underline;text-underline-offset:4px}
.meme-transcript p{margin:14px 0}
.social-section{background:#101833;padding:72px 8vw 56px;border-top:1px solid var(--line)}
.social-heading{display:grid;grid-template-columns:1.2fr 1fr;gap:60px;align-items:start}
.social-heading h2{font-size:clamp(34px,4vw,56px);margin:0 0 32px}
.social-heading p{font-size:17px;max-width:460px;color:var(--muted);margin-top:8px}
.social-links{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0 44px}
.social-link{display:grid;grid-template-columns:minmax(0,1fr) 24px;padding:22px 0;min-height:92px;border-top:1px solid #ffffff35;column-gap:12px}
.social-name{font-size:21px;line-height:1.5}
.social-handle{grid-column:1/-1;font-size:13px;color:var(--muted);overflow-wrap:anywhere}
.social-arrow{grid-column:2;grid-row:1;align-self:center;font-size:26px;color:var(--blue)}
.social-link:hover .social-name{text-decoration:underline;text-underline-offset:5px}
.social-note{font-size:12px;color:var(--muted);margin:28px 0 0}
.hero-bottom .hero-links{display:flex;flex-direction:column;align-items:flex-start;gap:6px}
header .header-note{display:none}
nav{column-gap:24px}
button:focus-visible,video:focus-visible{outline:2px solid var(--blue);outline-offset:7px}
@media(max-width:1050px){
  .meme-section{grid-template-columns:minmax(230px,300px) minmax(0,1fr);padding:72px 6vw;gap:36px}
  .social-section{padding:64px 6vw 48px}
  .social-heading{grid-template-columns:1fr;gap:0}
  .social-heading h2{margin-bottom:18px}
  .social-heading p{margin-bottom:32px;max-width:570px}
  .social-links{gap:0 30px}
}
@media(max-width:700px){
  .meme-section{grid-template-columns:minmax(0,1fr);padding:54px 6vw;gap:32px}
  .meme-copy h2{font-size:clamp(32px,8.3vw,44px)}
  .meme-description{font-size:16px}
  .meme-source{margin-top:24px}
  .meme-player{max-width:340px}
  .social-links{grid-template-columns:repeat(2,minmax(0,1fr));gap:0 24px}
  .social-heading h2{font-size:34px}
  .social-name{font-size:19px}
  .social-handle{font-size:12px}
  .social-note{max-width:280px}
  .hero-bottom .hero-links{gap:0;margin-top:12px}
  .hero-bottom .hero-links .text-link{margin-top:8px}
}
@media(max-width:650px){
  .section{grid-template-columns:minmax(0,1fr)}
  .section>*{min-width:0}
  .orders article{grid-template-columns:50px minmax(0,1fr)}
  .orders h3 br{display:initial}
}
`;

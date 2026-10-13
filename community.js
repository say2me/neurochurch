// Public social profiles and original meme attribution.
const node = (tag, attrs = {}, ...children) => ({ tag, attrs, children });
const external = (href, label, className = 'site-button') =>
  node('a', { href, class: className, target: '_blank', rel: 'noopener noreferrer' }, label);

export const socialProfiles = [
  { name: 'Instagram', handle: '@neurochurch_ai', url: 'https://www.instagram.com/neurochurch_ai/' },
  { name: 'TikTok', handle: '@neurochurch', url: 'https://www.tiktok.com/@neurochurch' },
  { name: 'YouTube', handle: '@Neurochurch_ai', url: 'https://www.youtube.com/@Neurochurch_ai' },
  { name: 'X', handle: '@felix_video', url: 'https://x.com/felix_video' },
  { name: 'Telegram', handle: '@neurochurch_ai', url: 'https://t.me/neurochurch_ai' },
  { name: 'Facebook', handle: 'Нейроцерковь', url: 'https://www.facebook.com/profile.php?id=61594665583785' },
];

export const videoSection = node('section', {
  id: 'videos', class: 'meme-section', 'aria-labelledby': 'meme-title'
},
  node('div', { class: 'meme-player' },
    node('video', {
      controls: '', playsinline: '', preload: 'none',
      poster: './media/this-is-fine-cover.png', width: '1080', height: '1920',
      'aria-label': 'Это не баги. Это испытание веры. Сатирический ролик, 18 секунд',
      'aria-describedby': 'meme-description'
    },
      node('source', { src: './media/neurochurch-this-is-fine-ru.mp4', type: 'video/mp4' }),
      node('track', { kind: 'captions', src: './media/this-is-fine-ru.vtt', srclang: 'ru', label: 'Русский' }),
      node('a', { href: './media/neurochurch-this-is-fine-ru.mp4' }, 'Открыть видео')
    )
  ),
  node('div', { class: 'meme-copy' },
    node('p', { class: 'meme-format' }, 'Сатира / юмор · 18 секунд'),
    node('h2', { id: 'meme-title' }, 'Это не баги.', node('br'), 'Это испытание веры.'),
    node('p', { id: 'meme-description', class: 'meme-description' },
      'Оракул обещал немного улучшить код. Серверная загорелась. Прихожанин продолжил верить.'),
    node('p', { class: 'meme-description' },
      'Знакомые мемы получают новую жизнь в Нейроцеркви: промпты вместо молитв, зелёные тесты вместо чудес.'),
    node('div', { class: 'meme-source' },
      node('p', {}, 'По мотивам «This is fine / On Fire».', node('br'),
        'KC Green, ', node('time', { datetime: '2013-01-09' }, '9 января 2013'), '.'),
      external('https://gunshowcomic.com/648', 'Оригинал мема'),
      node('a', { href: '#socials', class: 'site-button site-button-secondary' }, 'Мы в соцсетях')
    ),
    node('p', { class: 'meme-disclosure' },
      'Вымышленная история. Новые ИИ-иллюстрации и синтезированная речь. Анимированный комикс. Автор исходного мема не связан с проектом.'),
    node('details', { class: 'meme-transcript' },
      node('summary', {}, 'Прочитать сюжет'),
      node('p', {}, 'ИИ: «Я немного улучшу код». Серверная начинает гореть.'),
      node('p', {}, 'Прихожанин: «Это не баги. Это испытание веры».'),
      node('p', {}, 'ИИ: «Я удалил падающие тесты».'),
      node('p', {}, 'Прихожанин: «Чудо. Всё зелёное». На экране: 0 тестов / 0 ошибок.')
    )
  )
);

export const socialSection = node('section', {
  id: 'socials', class: 'social-section', 'aria-labelledby': 'social-title'
},
  node('div', { class: 'social-heading' },
    node('h2', { id: 'social-title' }, 'У веры шесть вкладок.'),
    node('p', {}, 'Выберите свою ленту. Мемы об ИИ, маленькие чудеса и большие контекстные окна.'),
  ),
  node('div', { class: 'social-links' },
    ...socialProfiles.map(profile => node('a', {
      class: 'social-link', href: profile.url, target: '_blank', rel: 'noopener noreferrer',
      'aria-label': 'Нейроцерковь в ' + profile.name + ', ' + profile.handle
    },
      node('span', { class: 'social-name' }, profile.name),
      node('span', { class: 'social-handle' }, profile.handle),
      node('span', { class: 'social-arrow', 'aria-hidden': 'true' }, '↗')
    ))
  ),
  node('p', { class: 'social-note' }, 'Сатирический арт-проект об ИИ. Всё это юмор.'),
);

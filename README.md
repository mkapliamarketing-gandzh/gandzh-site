# Сайт «Ґандж»

Статичний сайт на [Astro](https://astro.build), хоститься на Vercel, тексти блогу й кейсів редагуються у [Pages CMS](https://pagescms.org).

## Де що лежить

| Що | Де |
|---|---|
| Статті блогу | `src/content/blog/*.md` |
| Кейси | `src/content/cases/*.md` |
| Контакти, форма, Google Analytics | `src/data/settings.json` |
| Тексти сторінок | `src/pages/*.astro` |
| Симптоми на головній | `src/data/defects.ts` |
| Картинки й відео | `public/media/` |
| Стилі | `src/styles/global.css` (з MVP), `src/styles/site.css` (доповнення) |

Блог, кейси й налаштування найпростіше редагувати через Pages CMS: увійти на app.pagescms.org через GitHub і відкрити цей репозиторій. Кожне збереження — це коміт, Vercel сам перезбирає сайт за хвилину-дві.

## Форма заявки

Форма відправляє JSON на адресу з `formEndpoint`. Підійде Web3Forms (`https://api.web3forms.com/submit` + ключ у `formAccessKey`) або Formspree (адреса форми, ключ не потрібен). Поки адреса порожня, форма пише відвідувачу, що не підключена.

Після успішної відправки в GA4 летить подія `generate_lead` — її треба позначити як key event в GA4 (Admin → Events).

## Локально (для розробника)

```sh
npm install
npm run dev     # http://localhost:4321
npm run build   # збірка в dist/
```

Свій домен: у Vercel додай змінну середовища `SITE_URL=https://домен` (для sitemap і канонічних посилань).

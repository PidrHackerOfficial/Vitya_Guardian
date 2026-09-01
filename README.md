# 🛡️ Vitya Guardian v1.0
> Мощный веб-фаервол, блокировщик рекламы на сетевом уровне и синхронизатор ссылок в одном легком JavaScript-скрипте.
> **Разработчик:** `Dalbaeb_hacker228`

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![CDN: jsDelivr](https://img.shields.io/badge/CDN-jsDelivr-orange.svg)](https://www.jsdelivr.com/)

---

## 📌 Описание

**Vitya Guardian** — это утилита для очистки веб-страниц (в частности, учебных и ГДЗ-порталов) от агрессивной рекламы, тяжелых медиа-баннеров и счетчиков аналитики. Скрипт работает прямо в браузере, режет запросы на сетевом уровне и предоставляет удобный оверлей для мгновенной передачи ссылок между устройствами.

---

## ✨ Основной функционал

* **⚔️ Блокировщик рекламы на сетевом уровне (Network Level Firewall):**
  * Перехватывает вызовы `fetch`, `XMLHttpRequest` и динамическое создание элементов `<script>` / `<img>`.
  * Блокирует запросы к `mc.yandex.ru`, РСЯ (`yandex.ru/an`), CDN-хостам картинок, Google Ads, а также RTB-биржам (`kimberlite.io`, `betweendigital`, `acint.net` и др.).
* **✂️ DOM & Content Purge (Очистка верстки и спама):**
  * Удаляет тяжелые видео-плееры (Rutube), плашки Cookie и всплывающие оверлеи.
  * Фильтрует текст блоков по ключевым словам (акции, скидки, кредиты, рекламные баннеры).
* **📡 Cross-Device Link Relay:**
  * Встроенный виджет интерфейса для мгновенной отправки текущего URL на другие девайсы в 1 клик без собственного сервера.

---

## 🚀 Быстрый запуск (Loadstring / Bookmarklet)

Благодаря интеграции с **jsDelivr CDN**, пользователям не нужно копировать весь код вручную — скрипт всегда подтягивает самую свежую версию из репозитория.

### Способ 1: Через консоль F12

#### Зеркало 1 (jsDelivr CDN — быстрое и надежное):
```javascript
(function(){var s=document.createElement('script');s.src='[https://cdn.jsdelivr.net/gh/PidrHackerOfficial/Vitya_Guardian@main/vitya-guardian.js';document.head.appendChild(s](https://cdn.jsdelivr.net/gh/PidrHackerOfficial/Vitya_Guardian@main/vitya-guardian.js';document.head.appendChild(s));})();

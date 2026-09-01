/* Total Network & DOM Blocker — by Dalbaeb_hacker228 */
(function() {
    // 1. Блокировка конкретных рекламных доменов на сетевом уровне
    const blockedDomains = [
        'yandex.ru/an',
        'mc.yandex.ru',
        'an.yandex.ru',
        'pagead2.googlesyndication.com',
        'krut.link'
    ];

    const isAdUrl = (url) => typeof url === 'string' && blockedDomains.some(d => url.includes(d));

    // Перехват fetch
    const originalFetch = window.fetch;
    window.fetch = function(input, init) {
        const url = typeof input === 'string' ? input : (input && input.url ? input.url : '');
        if (isAdUrl(url)) {
            console.log('🚫 [AdBlock] Сброшен Fetch:', url.substring(0, 40) + '...');
            return Promise.resolve(new Response('{}', { status: 200 }));
        }
        return originalFetch.apply(this, arguments);
    };

    // Перехват XHR
    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
        if (isAdUrl(url)) {
            console.log('🚫 [AdBlock] Сброшен XHR:', url.substring(0, 40) + '...');
            this.send = function() {};
            return;
        }
        return originalOpen.apply(this, arguments);
    };

    // 2. Чистка DOM от вылезших контейнеров (включая сорекламу и плашки)
    const adSelectors = [
        '[class*="socreclama"]',
        '[class*="cookie"]',
        '[id*="yandex_rtb"]',
        'iframe[src*="rutube"]',
        '.adsbygoogle'
    ];

    const cleanDOM = () => {
        adSelectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => el.remove());
        });
    };

    cleanDOM();
    new MutationObserver(cleanDOM).observe(document.body || document.documentElement, { 
        childList: true, 
        subtree: true 
    });

    console.log('Фаервол Активен. Спасибо что используйте <3');
})();

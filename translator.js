const elementsToTranslate = document.querySelectorAll('[data-key');
const select = document.getElementById('language-select');

function loadLanguage(lang) {
    fetch(`./assets/i18n/${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            elementsToTranslate.forEach(el => {
                const key = el.getAttribute('data-key');
                if (translations[key]) el.textContent = translations[key];
            });
        });
}

select.addEventListener('change', (e) => {
    const selectedLang = e.target.value;
    loadLanguage(selectedLang);
});

loadLanguage('la');
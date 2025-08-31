document.addEventListener('DOMContentLoaded', function() {
    loadContent();
});

function loadContent() {
    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            for (const key in data) {
                const el = document.querySelector(`[data-i18n="${key}"]`);
                if (el) el.textContent = data[key];
            }
        })
        .catch(err => console.error('Ошибка загрузки данных:', err));
}
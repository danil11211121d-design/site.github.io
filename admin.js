document.addEventListener('DOMContentLoaded', function() {
    initSettingsSaving();
});

function initSettingsSaving() {
    const saveButtons = document.querySelectorAll('.save-btn');

    saveButtons.forEach(button => {
        button.addEventListener('click', function() {
            const inputs = document.querySelectorAll('[data-key]');
            let data = {};

            inputs.forEach(input => {
                const key = input.getAttribute('data-key');
                if (input.tagName === 'INPUT' || input.tagName === 'TEXTAREA') {
                    data[key] = input.value;
                } else {
                    data[key] = input.textContent;
                }
            });

            fetch('save.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => {
                if (res.status === 'ok') {
                    alert('Изменения сохранены!');
                } else {
                    alert('Ошибка при сохранении: ' + res.message);
                }
            })
            .catch(err => {
                alert('Ошибка соединения: ' + err);
            });
        });
    });
}
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('access-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const keyInput = document.getElementById('key').value.trim();

        // Отправка ключа на сервер для проверки
        fetch('/check_key', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ key: keyInput })
        })
            .then(response => {
                if (response.ok) {
                    window.location.href = '/dashboard'; // Перенаправление на страницу после успешной проверки ключа
                } else {
                    alert('Неверный ключ доступа! Попробуйте еще раз.');
                }
            })
            .catch(error => {
                console.error('Ошибка при отправке запроса:', error);
                alert('Произошла ошибка. Пожалуйста, попробуйте позже.');
            });
    });
});

function resetForm() {
    document.getElementById('key').value = ''; // Очистка поля ввода ключа
}

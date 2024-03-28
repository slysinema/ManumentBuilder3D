$(document).ready(function() {
    // Находим форму по ее идентификатору
    var form = $('#submitKeyForm');

    // Добавляем обработчик отправки формы
    form.on('submit', function(event) {
        // Предотвращаем стандартное поведение формы (отправку данных и перезагрузку страницы)
        event.preventDefault();

        // Получаем значение введенного ключа
        var keyInput = $('#keyInput').val();

        // Выполняем AJAX-запрос для отправки данных на сервер
        $.ajax({
            type: "POST",
            url: form.attr('action'),
            data: { key: keyInput }, // Отправляем введенный ключ на сервер
            success: function(response) {
                // В случае успешного ответа от сервера выводим результат на страницу
                if (response === "valid") {
                    // Перенаправляем пользователя на новую страницу
                    window.location.href = "../pages/next.php";
                } else {
                    // Выводим сообщение об ошибке
                    alert(response);
                }
            },
            error: function(xhr, status, error) {
                // В случае ошибки выводим сообщение об ошибке
                console.error(xhr.responseText);
            }
        });
    });
});
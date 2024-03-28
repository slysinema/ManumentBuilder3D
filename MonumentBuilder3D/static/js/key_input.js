$(document).ready(function () {
    $('#submitKeyForm').submit(function (e) {
        e.preventDefault();
        let key = $('#keyInput').val();
        $.ajax({
            type: 'POST',
            url: '/check_key',
            data: { key: key },
            success: function (response) {
                if (response.success) {
                    window.location.href = '/scene';
                } else {
                    alert('Неверный ключ!');
                }
            },
            error: function () {
                alert('Ошибка при отправке запроса на сервер!');
            }
        });
    });
});

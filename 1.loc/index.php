<?php

// Предположим, что ключ на сервере хранится в переменной $valid_key
$valid_key = "your_valid_key";

if(isset($_POST['key'])) {
    $key = $_POST['key'];

    if($key === $valid_key) {
        // Правильный ключ, перенаправляем на страницу next.php
        header("Location: pages/next.php?key=$key");
        exit(); // Важно использовать exit() после header(), чтобы прервать дальнейшее выполнение скрипта
    } else {
        // Неправильный ключ, остаемся на этой странице
        $error_message = "Неверный ключ!";
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Введите ключ</title>
    <link rel="stylesheet" href="../static/css/style.css">
</head>
<body>
    <div class="container">
        <div class="form-container">
            <h1>Введите ключ для доступа</h1>
            <form id="submitKeyForm" method="POST" action="index.php">
                <div class="form-group">
                    <label for="keyInput">Ключ:</label>
                    <input type="text" name="key" id="keyInput" required>
                    <?php if(isset($error_message)) { ?>
                        <p style="color: red;"><?php echo $error_message; ?></p>
                    <?php } ?>
                </div>
                <div class="form-group">
                    <button type="submit">Войти</button>
                    <button type="reset">Сбросить</button>
                </div>
            </form>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="../static/js/key_input.js"></script>
</body>
</html>
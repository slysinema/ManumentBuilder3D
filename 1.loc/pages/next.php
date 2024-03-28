<?php

// Проверяем, был ли предоставлен ключ в URL
if(!isset($_GET['key'])) {
    // Если ключ не был предоставлен, перенаправляем пользователя на страницу ввода ключа
    header("Location: ../index.php");
    exit();
}

// Предполагаем, что ключ должен быть проверен здесь
$valid_key = "your_valid_key";
$key_from_url = $_GET['key'];

if($key_from_url !== $valid_key) {
    // Если ключ неверный, перенаправляем на страницу ввода ключа с сообщением об ошибке
    header("Location: ../index.php?error=invalid_key");
    exit();
}

// Если ключ правильный, продолжаем выполнение скрипта

?>
# Список ключей (для примера)
keys = {
    '45OF9DFK87FG': {'name': 'Argest Sstone', 'type': 'premium'}
}

# Функция для проверки ключа
def check_key(key):
    if key in keys:
        return {'success': True, 'type': keys[key]['type']}
    else:
        return {'success': False}

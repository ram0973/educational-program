# Пятое задание (итоговое): Снайпер-бот для Telegram

Снайпер-бот для Telegram позволяет пользователям автоматизировать торговлю на децентрализованных биржах (Uniswap, PancakeSwap) в сетях Binance Smart Chain (BSC) и Polygon. Пользователи могут создавать кошельки, отслеживать адреса токенов, подписываться на сделки других адресов и автоматически повторять их. В случае нехватки средств для выполнения сделки бот уведомляет пользователя через Telegram. Также предусмотрена возможность перевода токенов между кошельками.

## User Flow

**1. Регистрация и создание кошелька:**

- Пользователь регистрируется в боте.
- Бот создает новый кошелек в сети BSC или Polygon и отправляет пользователю адрес кошелька.

**2. Управление токенами:**

- **Добавление токенов:** Пользователь может отправить команду в Telegram для добавления до 5 адресов токенов, которыми он собирается торговать. Команда выглядит как: `/addtoken [адрес токена]`. Каждый раз, когда добавляется токен, бот подтверждает добавление и показывает текущий список.

- **Просмотр балансов:** Пользователь может запросить балансы этих токенов, отправив команду `/balance`. Бот возвращает текущие балансы для каждого токена.

- **Редактирование списка токенов:** Пользователь может удалить токен из списка командой `/removetoken [адрес токена]` или очистить весь список, если захочет заменить токены.

**3. Подписка на сделки:**

- **Выбор адреса для отслеживания:** Пользователь может подписаться на другой кошелек, чтобы дублировать его сделки. Команда для этого выглядит как: `/follow [адрес кошелька]`.

- **Настройка повторных сделок:** Пользователь может указать, какие сделки он хочет повторять, используя команду `/replicate [buy/sell] [лимит суммы]`. Эта команда позволит пользователю контролировать, какие сделки (покупки или продажи) бот будет дублировать и на какую сумму (например, не превышать определённый лимит).

- **Просмотр подписок:** Пользователь может просмотреть активные подписки на кошельки с командой `/subscriptions`.

- **Удаление адреса из подписок:** Пользователь может отписаться от кошелька, тем самым отключив дублирование сделок с этого адреса. Команда для этого выглядит как: `/unfollow [адрес кошелька]`.

**4. Автоматическое повторение сделок:**

Когда бот обнаруживает сделку на отслеживаемом кошельке (на Uniswap или PancakeSwap), он автоматически дублирует сделку на кошельке пользователя, если это соответствует условиям подписки и настроек.

**5. Оповещение при недостатке баланса:**

- Если у пользователя недостаточно средств для повторения сделки, бот уведомляет его через Telegram.

**6. Перевод токенов:**

- Пользователь может перевести токены на другой кошелек с помощью команды `/send [адрес токена] [сумма] [адрес получателя]`. Бот подтверждает успешный перевод и уведомляет пользователя.


## Требования

1. Проект должен быть разработан с использованием NestJS фреймворка и TypeORM для работы с базой данных.

2. Для взаимодействия с блокчейнами Binance Smart Chain (BSC) и Polygon необходимо использовать библиотеку ethers.js.

3. Параметры подключения к базе данных и блокчейн-сетям, а также другие конфигурационные параметры (например, порты сервера) должны настраиваться через конфигурационный файл и могут быть изменены без внесения изменений в код.

4. Нужно обеспечить возможность легкого расширения функционала, включая добавление новых сетей или изменение логики бота.

5. Необходимо логировать ошибки, возникающие при взаимодействии с базой данных, блокчейном и при выполнении операций через Telegram API.

6. Проект должен содержать набор тестов (unit и integration), а также инструкции для их запуска.

7. Файл README.md должен содержать краткое описание проекта и инструкции по запуску и тестированию проекта.
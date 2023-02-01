# MoneyKeeper

MoneyKeeper(MKeeper) - приложение для контроля и учета доходов и расходов.

## Структура приложения
Приложение состоит из шести страниц:
- страница регистрации пользователя
- страница общая информация о тразакциях приложения
- страница транзакций (добавление доходов и расходов)
- страница отчётов о доходах и расходах
- страница календаря расходов
- страница настроек

#### Header
1. Лого и название приложения
2. Название текущей страницы
3. Total balance 
4. Значок аккаунта (при клике появляется popup с информацией о пользователе)

#### Footer
1. Гитхабы авторов приложения
2. Год создания приложения
3. Логотип курса со ссылкой на курс.

#### Страница регистрации пользователя:
1. Содержит поля: имя пользователя, пароль для входя и кнопку войти
2. Если пользователя нет в базе то появляется предупреждение об этом и пишится что сначала нужно зарегистрироваться
3. Регистрация имеет тот же вид, только кнопка войти меняется на кнопку зарегистрироваться

#### Страница общая информация о тразакциях приложения:
1. Содержит список из пяти элементов генерации отчета по транзакциям (за день, неделю, месяц, год и все время), каждый из которых содержит информацию в виде линейной диаграммы дохода и трат.
2. При клике по одному из элементов в правом окне появляется список транзакций. По умолчанию в правом окне показывается список транзакций за текущий день.
3. Транзакция содержит информацию: категория, подкатегория, сумма транзации (+ если доход, - если траты), дата транзакции
4. Транзакции можно сортировать по дате, сумме и типу транзакции
4. При клике правой кнопке мыши по транзакции появляется всплывающее меню из двух функций (удаление транзакции, детали транзакции)
5. При выборе функции детали транзакции, появляется модальное окно с подробной информацией транзакции (описание, дата, время, категория, подкатегория, сумма транзации)
6. При клике на свободное пространство модальное окно закрывается.

#### Страница транзакций (добавление доходов и расходов):
1. Содержит поля (тип транзакции) и сумма транзакции (валидация по числовому значению)
2. Содержит поля категории (категории предустановлены) и подкатегории транзакции (свободный текст 1-2 слова)
3. Содержит поля дата и время транзакции (валидация по дате и времени)
4. Содежит поле описание транзакции (свободный текст, можно ограничить по кол-ву символов)
5. Кнопка сохранить данную тразнакцию. При сохранении транзакции, асинхронный запрос отправляет данные по транзакции серверу. В случае успеха возвращается код 200.
  
#### Страница репорт в диаграмме (доходы/расходы)
1. Содержит два поля с датами для выбора периода репорта. По умолчанию выбирается период за месяц, начиная от текущей даты.
2. Круговая диаграмма выстраивается на основании трат по категорям в процентном соотношении, справа от нее цвет части диаграммы и его расшифровака (вид категории)
3. Компонент траты за период справа от title общая сумма трат, а снизу линейная диаграмма по категориям с названием категории, суммы и в скобках порцентах от общих трат
4. Компонент доходы за период справа от title общая сумма доходов, а снизу линейная диаграмма по категориям с названием категории, суммы и в скобках порцентах от общих доходов

#### Страница календарь трат
1. Содержит поля категории трат и год трат
2. Каледарь в виде таблицы 3*4 по месяцам
3. Каждый компонент месяца содержит линейную диграмму трат и сумму трат за текущий месяц
4. Компонент информации трат за год (общие траты за текущий год, среднее значение трат в месяц, Общий даход за год, процентное соотношение трат к доходу за год)

#### Настройки
1. Настройки языка (ru/en). По умолчанию - en.
2. Темы (светлая/темная). Поумолчанию - светлая.
3. Тип валюты(rub, usd, eur). По умолчанию - eur.
4. Изменение данных пользователя (имя)
5. Настройки пользователя сохраняются на сервер.

#### Routing
1. Реализован роутинг без перезагрузки страницы.
2. /overview - для главной страницы
3. /transction - для транзакции
4. /report - для диаграммы
5. /calendar - для календаря
6. /settings - для настроек приложения.

## Dev stack
1. Frontend (TS, Materialize or Tailwind, scss or css)
2. Backend (express.js, MongoDB or JSON server)

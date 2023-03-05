# Профильное задание. Стажировка VK

Профильное задание на позицию "Фронтед-разработчик" для стажировки VK.
Реализация игры "Сапер" на основе HTML, CSS и JavaScript

Результат можно посмотреть [здесь](https://vk-internship-delta.vercel.app/).

## Стек
* `React` v18
* `Node.js` v16.18.0

## Используемые технологии
* React Hooks
* React Context

## Реализованные требования к проекту
* Поле игры размером 16 на 16 клеток, 40 мин на поле
* На панели слева располагается счётчик оставшихся мин, справа - секундомер
* Мины расставляются на поле случайным образом
* Распределение мин происходит после первого открытия клетки пользователем, а следовательно первый клик никогда не будет происходить по мине
* После открытия клетки ЛКМ открываются также все поля без мин поблизости
* ПКМ ставит флажок, изменяющий счетчик количества оставшихся мин
* Второе нажатие ПКМ изменяет флажок на знак вопроса, который не влияет на счетчик количества оставшихся мин
* Нажатие на кнопку со смайликом перезапускает игру
* Если пользователь нажимает ЛКМ в пределах поля, но не отпускает ЛКМ - смайлик сменяется на испуганный
* В случае открытия пользователем клетки с миной - смайлик сменяется на грустный, а также раскрываются позиции местонахождения мин, успешно поставленные флажки остаются, а неверно поставленные сменяются зачеркнутой миной
* В случае открытия пользователем всех клеток, не содержащих мин - смайлик примеряет солнцезащитные очки, а секундомер останавливается

## Локальный запуск проекта
Запуск проекта на локальном сервере производится командой *npm start*

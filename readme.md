## 1. Прототипне наслідування
- что такое объект?
- что такое полифил?
- что такое ES6, класс = синтаксический сахар над объектом
https://stackoverflow.com/a/15192758/7398502
- Прототип [об’єкта](https://learn.javascript.ru/native-prototypes)
- Властивість [prototype](https://learn.javascript.ru/prototypes)
- Вбудовані [класи](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects)
- Функція – [конструктор](https://learn.javascript.ru/constructor-new)
- Наслідування класів
- Внутрішній устрій методу ‘extend’ і поліфілл ‘Object.create’
- Функціональне [наслідування](https://learn.javascript.ru/functional-inheritance)

https://codesandbox.io/s/qqill?file=/src/index.js

### ДЗ:
1. https://www.codewars.com/kata/53f0f358b9cb376eca001079/train/javascript
2. https://www.codewars.com/kata/586a3270c66d18ad810001d4/train/javascript 
3. https://www.codewars.com/kata/557e508a47c7e9adf9000062/javascript 
4. https://www.codewars.com/kata/526471539d52735c620000c6/train/javascript 
5. https://www.codewars.com/kata/53b2ff49b82af296ce001139/train/javascript

## 2. ООП
- Загальна інформація про ООП
- Інкапсуляція
- Поліморфізм
- Спадкування
- Абстракція даних
- UML Diagram
- Поняття ‘клас’

https://scotch.io/tutorials/understanding-javascript-closures-a-practical-approach

https://blog.pragmatists.com/the-many-faces-of-this-in-javascript-5f8be40df52e - this описан хорошо

можно вспомнить что переменная - именованная / адресуемая другим образом область памяти, адрес которой будет известен далее

## 3. Контекст виклику і замикання (goes first)
- Немного поговорить, что такое [объект](https://learn.javascript.ru/object), ссылочные типы данных
- Что такое [контекст](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this) и как его есть с this?
- Робота з [this](https://learn.javascript.ru/object-methods) (4 способи використання)
- [Використання](https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290) ‘call’, ‘apply’ +привязка контекста
- Робота з ‘bind’, каррінг і поліфілл (не забыть за стрелочные с this)
- Дескриптори, [геттери і сеттери](https://learn.javascript.ru/property-accessors) властивостей
- Что такое [замыкания](https://learn.javascript.ru/closure)?
- Шаблон проєктування [Singletone](https://stepansuvorov.com/blog/2014/02/%D0%BF%D0%B0%D1%82%D1%82%D0%B5%D1%80%D0%BD%D1%8B-%D0%B2-javascript-singleton/) через замикання
- [Збирач сміття](https://learn.javascript.ru/garbage-collection)

## 4. Глобальний об'єкт Window і робота з DOM
https://stackoverflow.com/questions/4416317/what-is-the-dom-and-bom-in-javascript


- Загальна інформація про ‘window’, ‘navigator’, ‘document’, ‘location’, ‘history’
- Навігація по DOM елементам
- Властивості вузлів
- Додавання і видалення вузлів
- Робота зі стилями
- Робота з координатами

## 5. Події
- Введення в браузерні події
- Порядок обробки подій (Event Loop)
- Асинхронні події
- Робота з SetTimeout / SetInterval
- Спливання і перехоплення
- Делегування подій
- Події з використанням миші, клавіатури і прокрутка
- Завантаження документа

## 6. Робота [з системою контролю версій](./git.md)

## 7. Формування сторінки в браузері
- Формування DOM покроково
- Формування Render Tree
- Порядок формування CSSOM
- Оптимізація, мініфікація, робота з Http Cache.

## 8. Способи зберігання даних в браузері
- Cookies
- Localstorage / Sessionstorage
- IndexedDB
- Manifest
- ServiceWorker
- Progressive Web Application

## 9. HTTP
- как [работают браузеры](https://developer.mozilla.org/ru/docs/Web/Performance/How_browsers_work)
- Введення в Http протокол
- Переваги та недоліки протоколу
- Робота з AJAX
- Загальна інформація про RESTful API
- JSON
- CORS
- Робота з WebSocket
- Протокол JSONP
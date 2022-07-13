# Toxin hotel (2 задание программы обучения MetaLamp)
В задании требовалось сверстать страницы сайта отеля Toxin по предоставленному [макету](https://www.figma.com/file/MumYcKVk9RkKZEG6dR5E3A/MetaLamp-(former-FSD)-frontend-education-program.-The-2nd-task?node-id=0%3A1) с использованием БЭМ, pug, scss, webpack, PixelPerfect, responsive, а также с использованием плагинов для интеравктивных элементов (календарь, слайдер).

## Результат выполнения задания
Данный репозиторий является результатом выполнения задания, описанного выше.

Посмотреть реализованный сайт в работе можно на [**github pages**](https://malluma.github.io/metalamp_02/).
По ссылке открывается стартовая страница проекта со списком реализованных страниц: блок *website* - это страницы самого сайта, а блок *ui-kit* - это компоненты, из которых собирался сайт, реализованные по БЭМ методологии.

Разработка велась под последние версии Chrome и Firefox.

Все библиотеки и шрифты подключены локально.

## Развертывание проекта
+ Клонирование репозитория

  `git clone https://github.com/Malluma/metalamp_02.git`
+ Запуск проекта с dev-server (для автообновления в браузере внесенных изменений)

  `npm start` (для завершения работы сервера нажать `ctrl+c`)
+ Сборка проекта в режиме development

  `npm run dev`
+ Сборка проекта в режиме production

  `npm run prod`
+ Развертывание проекта (только production папки dist) в новую ветку gh-pages

  `npm run deploy`

## Структура проекта
```src
    components/
      component-name/ -- отдельная папка для каждого компонента
          component-name.pug
          component-name.scss
          component-name.js
          Сomponent-name-class.js-- классы с логикой относящиеся к данному компоненту
    pages/ 
      page-name/ -- отдельная папка для каждой страницы
        page-name.pug
        page-name.scss
        page-name.js
    page-layout/ -- шаблоны pug и scss для страниц
    styles/ -- файлы со шрифтами и переменными
```
 

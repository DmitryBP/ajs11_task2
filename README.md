# WebPack-Template
[![Build status](https://ci.appveyor.com/api/projects/status/ub0a5lcu7ihmloe3?svg=true)](https://ci.appveyor.com/project/DmitryBP/webpack-template)

# NPM
### Подключение
    
    npm init

### Восстановление зависимостей

    npm install

### Добавляем .gitignore

[.gitignore от Нетологии](https://github.com/netology-code/js-advanced-homeworks/blob/master/ci-template/.gitignore "из наших лекций")

# ESLint

    npm install --save-dev eslint

### Конфигуратор

    npx eslint --init

* How would you like to use ESLint? `To check syntax, find problems, and enforce code style`
* What type of modules does your project use? `JavaScript modules (import/export)`
* Which framework does your project use? `None of these`
* Does your project use TypeScript? `No`
* Where does your code run? `Browser`
* How would you like to define a style for your project? `Use a popular style guide`
* Which style guide do you want to follow? `Airbnb`
* What format do you want your config file to be in? `JSON`
* Would you like to install them now with npm? `Yes`

В `.eslint.json` внесем правила ограничивающие использование определенного синтаксиса:

```js
    "env":{
        ...
        "jest":true, // добавляем чтобы не ругался на jest
        },
    "rules": {
        "no-restricted-syntax": [
            "error",
            "LabeledStatement",
            "WithStatement"
        ],
        "import/extensions": [ // что бы не ругался на модули
            "error",
            "ignorePackages"
        ]
    }
```
 В `package.json` добавим:

```js
"scripts":{
    "lint":"eslint .",
    "build": "webpack --mode production",
    "start":"webpack serve --mode development",
    "test": "jest",
    "prepare": "husky install"
    }
```       

В `.eslintignore` добавляем каталог с резальтатом сборки в нашем случае - dist.

Запуск 

    npm run lint

fix
    
    npm run lint -- --fix

# Babel

### Установка 

    npm install --save-dev @babel/core @babel/cli @babel/preset-env

    npm install core-js@3 // Modular standard library for JavaScript. Includes polyfills for ECMAScript up to 2021

## Создаем `.babelrc`

```js
{
  "presets": [
    [
      "@babel/preset-env", {
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ]
  ]
}
```
# Webpack

## install

    npm install --save-dev webpack webpack-cli babel-loader

> У вас должны быть правила для всех типоп файлов (скриптов, стилей и разметки), а так же плагины необходимо настроить. То есть, общая структура файла вебпака должна быть примерно такой:

`webpack.config.js:`
```js

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
output: {
    path: path.resolve(__dirname, 'dist'),
},
module: {
    rules: [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
        loader: 'babel-loader',
        },
    },
    {
        test: /\.html$/,
        use: [
        {
            loader: 'html-loader',
        },
        ],
    },
    {
        test: /\.css$/,
        use: [
        MiniCssExtractPlugin.loader, 'css-loader',
        ],
    },
    ],
},
plugins: [
    new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
    }),
    new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
    }),
],
};
```
    npm install --save-dev html-webpack-plugin
    npm install --save-dev mini-css-extract-plugin
    npm install --save-dev html-loader
    npm install --save-dev css-loader


## Подключение файлов в точке входа 
```js
    import '../css/styles.css';
    import '../js/app.js';
    import './index.html';
```

## Webpack Dew Server

    npm install --save-dev webpack-dev-server

## Jest

    npm i -save-dev jest babel-jest

### Покрытие кода

    npm test -- --coverage

## CONTINUOUS INTEGRATION (CI)
Мы будем рассматривать как практику, при которой для каждого изменениякода(git push)долженавтоматическизапускаться конвейер тестирования и сборки (automated build).
Тестирование должно запускаться автоматически.

> AppVeyor - одна из платформ, предоставляющих функциональность Continuous Integration.
> (https://ci.appveyor.com/projects)

## Добавляем файл с настройками `.appveyor.yml` в корень проекта
```yml

    image: Ubuntu1804  # образ для сборки

    stack: node 12  # окружение

    branches:
    only:
    - master  # ветка git

    cache: node_modules  # кеширование

    install:
    - npm install  # команда установки зависимостей

    build: off  # отключаем встроенную в appveyor систему сборки

    build_script:
    - npm run build   # команда сборки

    test_script:
    - npm run lint && npm test  # скрипт тестирования
    
```

## Husky

    npm i --save-D husky

    npm run prepare     

    npx husky add .husky/pre-commit "npm run lint && npm test" 
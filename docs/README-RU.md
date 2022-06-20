### readme: [Главная](./../README.md) | [EN](./README-EN.md)

# CONSOLE-TEXT-STYLES

> Утилита, которая позволяет задать стиль текста console js, используюя ANSI. В первую очередь акцент на терминал NodeJs.

## # Установка

Для тех кто использует NPM:

```sh
npm install console-text-styles
```

Для тех кто использует YARN:

```sh
yarn add console-text-styles
```

## # Демо

После установки пакета, в терминале можно вызвать команду `console-text-styles`, которая позволяет просмотреть как отображается цвета в вашем терминале

## # Доступные утилиты

![utilites](./utilites.png)

## # Пример использования

```ts
import { fgGreen, fgRed, bold, reset } from 'console-text-styles';

export function createMessageSuccess(message: string) {
  return `${fgGreen}${bold}${message}${reset}`;
}

export function createMessageError(message: string) {
  return `${fgRed}${bold}${message}${reset}`;
}
```

1. Можно комбинировать разные утилиты, которые надо указывать перед текстом.
2. Обязательно надо завершать утилитой `reset` - текст, после нее становится дефолтным для терминала.
3. У утилит есть более короткие записи (`alias`).

## # Лицензия

[MIT](./../LICENSE)

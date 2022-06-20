### readme: [Home](./../README.md) | [RU](./README-RU.md)

# CONSOLE-TEXT-STYLES

> Utility that allows you to style console js text using ANSI. Primarily focus on the NodeJs terminal.

## # Install

For those who use NPM:

```sh
npm install console-text-styles
```

For those who use YARN:

```sh
yarn add console-text-styles
```

## # Demo

After installing the package in the terminal, you can install the `demo-console-text-styles` command, which allows you to display colors in the final terminal.

## # Available utilities

![utilites](./utilites.png)

## # Usage example

```ts
import { fgGreen, fgRed, bold, reset } from 'console-text-styles';

export function createMessageSuccess(message: string) {
  return `${fgGreen}${bold}${message}${reset}`;
}

export function createMessageError(message: string) {
  return `${fgRed}${bold}${message}${reset}`;
}
```

1. You can combine different utilities that must be specified before the text.
2. Be sure to complete the `reset` utility - the text, after which it becomes the default for the terminal.
3. Utilities have shorter entries (`alias`).

## # License

[MIT](./../LICENSE)
ß

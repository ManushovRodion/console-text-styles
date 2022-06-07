### readme: [Home](./../README.md) | [RU](./README-RU.md)

# TERMINAL-STYLES-TEXT

> A utility that allows you to set the text style for the terminal

## # Install

For those who use NPM:

```sh
npm install terminal-styles-text
```

For those who use YARN:

```sh
yarn add terminal-styles-text
```

## # Demo

After installing the package in the terminal, you can install the `terminal-styles-text` command, which allows you to display colors in the final terminal.

## # Available utilities

![utilites](./utilites.png)

## # Usage example

```ts
import { fgGreen, fgRed, bold, reset } from 'terminal-styles-text';

export function createMessageSuccess(message: string) {
  return `${fgGreen}${bold}${message}${reset}`;
}

export function createMessageError(message: string) {
  return `${fgRed}${bold}${message}${reset}`;
}
```

1. You can combine different utilities that must be specified before the text.
2. Be sure to complete the reset utility - the text, after which it becomes the default for the terminal.
3. Utilities have shorter entries (alices).

## # License

[MIT](./../LICENSE)

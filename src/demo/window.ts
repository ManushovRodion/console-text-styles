import { createSequenceChars, textCenter } from './utilites';

export type ContextRowTable = {
  length: number;
  text?: string;
  center?: boolean;
};

export function createLine(length: number, char: string, borderChar: string) {
  return `${borderChar}${createSequenceChars(length, char)}${borderChar}`;
}

export function createRow(
  length: number,
  text: string,
  borderChar: string,
  center = true
) {
  if (center) {
    return `${borderChar}${textCenter(text, length)}${borderChar}`;
  }

  const maxLength = length - text.length;

  return `${borderChar}${text}${createSequenceChars(
    maxLength,
    ' '
  )}${borderChar}`;
}

export function createRowTable(context: ContextRowTable[], borderChar: string) {
  const text = context
    .map(({ length, text, center }) => {
      if (!text) {
        return createSequenceChars(length, ' ');
      }

      if (center) {
        return ` ${textCenter(text, length - 2)} `;
      }

      const maxLength = length - text.length - 2;
      if (maxLength > 0) {
        return ` ${text}${createSequenceChars(maxLength, ' ')} `;
      }

      return text;
    })
    .join(borderChar);

  return `${borderChar}${text}${borderChar}`;
}

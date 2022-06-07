export function createSequenceChars(length: number, char: string) {
  return new Array(length).fill(char).join('');
}

export function textCenter(text: string, length: number) {
  const maxLength = length - text.length;
  let afterLength, beforeLength;

  if (maxLength % 2) {
    afterLength = Math.ceil(maxLength / 2);
    beforeLength = afterLength - 1;
  } else {
    afterLength = beforeLength = maxLength / 2;
  }

  return [
    createSequenceChars(beforeLength, ' '),
    text,
    createSequenceChars(afterLength, ' '),
  ].join('');
}

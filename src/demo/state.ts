import * as styles from '../main';

type AliasName = string | null;

type Ansi = {
  name: string;
  aliasName: AliasName;
  context: string;
};

type State = {
  decorations: Ansi[];
  colors: Ansi[];
  backgrounds: Ansi[];
};

const DECORATIONS = ['bold', 'reversed', 'underline'];
const COLORS = [
  'colorBlack',
  'colorBlue',
  'colorCyan',
  'colorGreen',
  'colorMagenta',
  'colorRed',
  'colorWhite',
  'colorYellow',

  'colorBrightBlack',
  'colorBrightBlue',
  'colorBrightCyan',
  'colorBrightGreen',
  'colorBrightMagenta',
  'colorBrightRed',
  'colorBrightWhite',
  'colorBrightYellow',
];
const BACKGROUNDS = [
  'backgroundBlack',
  'backgroundBlue',
  'backgroundCyan',
  'backgroundGreen',
  'backgroundMagenta',
  'backgroundRed',
  'backgroundWhite',
  'backgroundYellow',

  'backgroundBrightBlack',
  'backgroundBrightBlue',
  'backgroundBrightCyan',
  'backgroundBrightGreen',
  'backgroundBrightMagenta',
  'backgroundBrightRed',
  'backgroundBrightWhite',
  'backgroundBrightYellow',
];

function createState(styles: { [ley: string]: string }) {
  return Object.entries(styles).reduce<State>(
    (groupStyles, [name, context]) => {
      let aliasName: AliasName;

      if (DECORATIONS.includes(name)) {
        groupStyles.decorations.push({ name, aliasName: null, context });
      }

      if (COLORS.includes(name)) {
        aliasName = name.replace('color', 'fg');
        if (!styles[aliasName]) aliasName = null;

        groupStyles.colors.push({ name, aliasName, context });
      }

      if (BACKGROUNDS.includes(name)) {
        aliasName = name.replace('background', 'bg');
        if (!styles[aliasName]) aliasName = null;

        groupStyles.backgrounds.push({ name, aliasName, context });
      }

      return groupStyles;
    },
    {
      decorations: [],
      colors: [],
      backgrounds: [],
    }
  );
}

export default createState(styles);

import { COLORS, DECORATIONS, BACKGROUNDS } from './contsants';
import { AliasName, State, Styles } from './types';

export const createState = (styles: Styles): State => {
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
};

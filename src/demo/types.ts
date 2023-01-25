export type AliasName = string | null;

export interface Ansi {
  name: string;
  aliasName: AliasName;
  context: string;
}

export interface State {
  decorations: Ansi[];
  colors: Ansi[];
  backgrounds: Ansi[];
}

export type Styles = { [key: string]: string };

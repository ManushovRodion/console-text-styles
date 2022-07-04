import {
  card,
  CardTitle,
  render,
  rowText,
  table,
  TableColumn,
  TableItem,
  TableItemGroup,
  TableOptions,
} from 'console-layout';

import * as styles from './main';
import state from './demo/state';
const packageJson = require('../package.json');

export function cli() {
  const tableColumn: TableColumn[][] = [
    [
      { name: '', width: 7 },
      { name: 'name', width: 34, textAlign: 'center' },
      { name: 'alias', width: 30, textAlign: 'center' },
      { name: 'demo', width: 40, textAlign: 'center' },
    ],
  ];

  const tableItems: (TableItem[] | TableItemGroup)[] = [];
  const demoText = rowText('my demo text!', 40, { textAlign: 'center' });

  Object.entries(state).forEach(([groupName, group]) => {
    tableItems.push({
      name: groupName.toUpperCase(),
    });

    group.forEach((ansi, index) => {
      const { name, aliasName, context } = ansi;
      const contextText = `${context}${demoText}${styles.reset}`;

      tableItems.push([
        { context: index + 1, textAlign: 'center' },
        { context: name },
        { context: aliasName || '---' },
        { context: contextText },
      ]);
    });
  });

  const tableOptions: TableOptions = {
    hideOuterBorderHorizon: true,
    hideOuterBorderVertical: true,
    borderHorizonChar: ' ',
    borderXChar: ' ',
  };

  const cardContext = table(tableColumn, tableItems, tableOptions) as string[];

  const cardTitle: CardTitle[] = [
    { context: `demo: ${packageJson.name}`.toUpperCase(), textAlign: 'center' },
    { context: '-------', textAlign: 'center' },
    { context: `version ${packageJson.version}`, textAlign: 'center' },
  ];

  const context = card(cardContext, cardTitle);

  render(context);
}

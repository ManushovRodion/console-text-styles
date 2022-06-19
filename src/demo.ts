import * as styles from './main';
const packageJson = require('../package.json');

import state from './demo/state';
import {
  type ContextRowTable,
  createLine,
  createRow,
  createRowTable,
} from './demo/window';

const TABLE_LENGTH_COL_INDEX = 7;
const TABLE_LENGTH_COL_NAME = 34;
const TABLE_LENGTH_COL_NAME_ALIAS = 30;
const TABLE_LENGTH_COL_DEMO = 41;

const MAX_COUNT_CHARS =
  TABLE_LENGTH_COL_INDEX +
  TABLE_LENGTH_COL_NAME +
  TABLE_LENGTH_COL_NAME_ALIAS +
  TABLE_LENGTH_COL_DEMO +
  3;

export function cli(process: NodeJS.Process) {
  const demoText = createRow(TABLE_LENGTH_COL_DEMO, 'my demo text!', '', true);

  const headTable: ContextRowTable[] = [
    { length: TABLE_LENGTH_COL_INDEX },
    { length: TABLE_LENGTH_COL_NAME, text: 'name', center: true },
    { length: TABLE_LENGTH_COL_NAME_ALIAS, text: 'alias', center: true },
    { length: TABLE_LENGTH_COL_DEMO, text: 'demo', center: true },
  ];

  const table = Object.entries(state)
    .map(([groupName, group]) => {
      return [
        createLine(MAX_COUNT_CHARS, ' ', '|'),
        createRow(MAX_COUNT_CHARS, ` ${groupName.toUpperCase()}`, '|', false),
        createLine(MAX_COUNT_CHARS, ' ', '|'),

        ...group.map((ansi, index) => {
          const { name, aliasName, context } = ansi;
          const contextText = `${context}${demoText}${styles.reset}`;

          const bodyTable = [
            { length: TABLE_LENGTH_COL_INDEX, text: String(index + 1) },
            { length: TABLE_LENGTH_COL_NAME, text: name },
            { length: TABLE_LENGTH_COL_NAME_ALIAS, text: aliasName || '---' },
            { length: TABLE_LENGTH_COL_DEMO, text: contextText },
          ];

          return createRowTable(bodyTable, '|');
        }),
      ].join('\n');
    })
    .join('\n');

  const context = [
    createLine(MAX_COUNT_CHARS, '-', '#'),
    createLine(MAX_COUNT_CHARS, ' ', '|'),
    createRow(MAX_COUNT_CHARS, 'DEMO: @CONSOLE-KIT/TEXT-STYLES', '|'),
    createRow(MAX_COUNT_CHARS, '-------', '|'),
    createRow(MAX_COUNT_CHARS, `version ${packageJson.version}`, '|'),
    createLine(MAX_COUNT_CHARS, ' ', '|'),
    createLine(MAX_COUNT_CHARS, '-', '#'),
    createRowTable(headTable, '|'),
    table,
    createLine(MAX_COUNT_CHARS, '-', '#'),
  ];

  console.log(context.join('\n'));
}

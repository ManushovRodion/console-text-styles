import tsPlugin from '@rollup/plugin-typescript';
import jsonPlugin from '@rollup/plugin-json';
import terserPlugin from '@rollup/plugin-terser';

const DIR_OUTPUT = './dist';
const INPUT_FILE = 'src/demo.ts';

/**
 * [RU] Убирает все лишнее и создает на базе строки название пакета
 * [EN] Removes all unnecessary and creates a package name based on the string
 * @param npmName
 * @returns
 */
const definePackageName = (npmName = '') => {
  const name = npmName.split('/').pop();
  if (!name) return 'package-name';

  return 'demo-' + name.replace(new RegExp('_', 'g'), '-');
};

/**
 * [RU] Конфиг создания CJS модуля. Подходит для серверных библиотек
 * [EN] Config for creating a CJS module. Suitable for server libraries
 * @param packageName
 * @returns
 */
const defineCJS = (packageName = '') => ({
  input: INPUT_FILE,
  output: [{ file: `${DIR_OUTPUT}/${packageName}.cjs.js`, format: 'cjs' }],
  plugins: [jsonPlugin(), tsPlugin(), terserPlugin()],
  external: ['console-layout'],
});

const PACKAGE_NAME = definePackageName(process.env['npm_package_name'] || '');

export default [defineCJS(PACKAGE_NAME)];

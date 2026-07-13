import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

const pkgPath = path.resolve('package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

console.log(chalk.blue.bold('========================================='));
console.log(chalk.green.bold(` Proyecto: ${pkg.name} v${pkg.version}`));
console.log(chalk.yellow(` Descripción: ${pkg.description || 'Sin descripción'}`));
console.log(chalk.blue.bold('========================================='));
console.log(chalk.cyan(` Autor: Juan Jesús Martín Melero`));
console.log(chalk.magenta(` Dependencias:`));
Object.entries(pkg.dependencies || {}).forEach(([dep, ver]) => {
  console.log(`   - ${dep}: ${chalk.gray(ver)}`);
});
console.log(chalk.blue.bold('========================================='));

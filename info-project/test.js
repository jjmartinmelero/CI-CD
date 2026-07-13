import fs from 'fs';
import path from 'path';
import assert from 'assert';

console.log('Ejecutando pruebas...');
const pkgPath = path.resolve('package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

assert.strictEqual(pkg.name, 'info-project');
console.log('Prueba exitosa: El nombre del paquete es correcto.');

import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = resolve(root, 'dist');
const destination = resolve(root, 'netlify-deploy');

if (!existsSync(resolve(source, 'index.html'))) {
  throw new Error('dist/index.html is required to prepare the Netlify site.');
}

mkdirSync(destination, { recursive: true });
cpSync(source, destination, { recursive: true, force: true });
console.log('Netlify deployment files prepared in netlify-deploy/');

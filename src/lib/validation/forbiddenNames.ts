import { basename } from 'node:path';

const forbiddenTokenPattern = /(^|[-_.])(final|copy|temp|backup|new)([-_.]|$)/i;

export function isForbiddenFileName(name: string) {
  return forbiddenTokenPattern.test(basename(name, '.ts'));
}

// Wird beim Build aus package.json und dem Build-Datum befüllt (tools/build.mjs).
/* global __VERSION__, __BUILD_DATE__ */
export const VERSION = typeof __VERSION__ !== 'undefined' ? __VERSION__ : 'dev';
export const BUILD_DATE = typeof __BUILD_DATE__ !== 'undefined' ? __BUILD_DATE__ : '';

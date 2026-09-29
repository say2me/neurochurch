import { content } from './content.js';
import { styles } from './styles.js';

/** Build DOM from trusted local content without HTML string injection. */
function createNode(node) {
  if (typeof node === 'string') return document.createTextNode(node);
  const element = document.createElement(node.tag);
  for (const [name, value] of Object.entries(node.attrs)) {
    element.setAttribute(name, value ?? '');
  }
  element.append(...node.children.map(createNode));
  return element;
}

const theme = document.createElement('style');
theme.textContent = styles;
document.head.append(theme);
document.getElementById('app').replaceWith(...content.map(createNode));

// Restore direct section links after the JavaScript-generated page is mounted.
if (location.hash.length > 1) {
  let id;
  try { id = decodeURIComponent(location.hash.slice(1)); }
  catch { id = location.hash.slice(1); }
  requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
}

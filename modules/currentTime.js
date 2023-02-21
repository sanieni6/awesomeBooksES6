/* eslint-disable no-return-assign */
import DateTime from '../node_modules/luxon/src/datetime.js';

export const displayTime = document.querySelector('.current-time');

export function time() {
  const dt = DateTime.local();
  return displayTime.textContent = dt.toFormat('MMMM d, yyyy - hh:mm:ss a');
}

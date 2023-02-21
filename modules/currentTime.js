/* eslint-disable no-return-assign */
import { DateTime } from './luxon.js';

export const displayTime = document.querySelector('.current-time');

export function time() {
  const dt = DateTime.local();
  return displayTime.textContent = dt.toFormat('MMMM d, yyyy - hh:mm:ss a');
}

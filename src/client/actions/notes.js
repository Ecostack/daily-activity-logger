export const ADD_NOTE = 'ADD_NOTE';

export function addNote(text) {
  return { type: ADD_NOTE, text }
}
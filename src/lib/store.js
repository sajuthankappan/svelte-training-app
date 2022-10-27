import { writable } from 'svelte/store';

export const count = writable(10);

export let count2 = 10;

export function setCount2(value) {
  count2 = value;
}

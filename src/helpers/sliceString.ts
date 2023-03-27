export const sliceString = (text: string) => text.length > 26
  ? text.slice(0, 26) + '...'
  : text
export const capitalize = word => {
  return word
    .toLowerCase()
    .split(' ')
    .map(singleWord => singleWord.charAt(0).toUpperCase() + singleWord.slice(1))
    .join(' ');
};

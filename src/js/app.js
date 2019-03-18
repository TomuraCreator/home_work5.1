const collegueNum = [1234, 42341, 1423, 2342, 2341, 21455, 564];


function sum() {
  let i = 0;
  for (const x of collegueNum) {
    i += x;
  }
  return i;
}
try {
  sum(collegueNum);
} catch (e) {
  alert('Ненадо так!');
}
export { sum, collegueNum };

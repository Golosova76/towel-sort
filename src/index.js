
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }

  return matrix.reduce((acc, val, i) => {
      if (i % 2 === 0) {
          return acc.concat(val);
      } else {
          return acc.concat(val.reverse());
      }
  }, []);
}

const arrayToRecordObject = array => ({
  date: array[0],
  month: array[1],
  in: array[2],
  out: array[3],
  balence: array[4],
  description: array[5],
  category: undefined
});

module.exports = {
  arrayToRecordObject
};

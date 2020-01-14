const arrayToRecordObject = array => ({
  date: array[0],
  month: array[1],
  in: array[2],
  out: array[3],
  balence: array[4],
  description: array[5],
  category: 'none'
});

const getAmount = value => {
  if (value === '') return 0;
  return parseFloat(value.replace(',', ''));
};

module.exports = {
  arrayToRecordObject,
  getAmount
};

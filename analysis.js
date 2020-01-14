const { getAmount } = require('./utils');

const totalsPerCategory = records =>
  records.reduce((acc, curr) => {
    if (acc[curr.category]) acc[curr.category] += getAmount(curr.out);
    else acc[curr.category] = getAmount(curr.out);
    return acc;
  }, {});

module.exports = {
  totalsPerCategory
};

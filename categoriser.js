const fs = require('fs');

const matchTerm = (term, value) =>
  value.toLowerCase().includes(term.toLowerCase());

const makeCatgeoryMatcher = categoryTerms => ({ description }) =>
  categoryTerms.some(term => matchTerm(term, description));

let matchers = null;

const getMatchers = () => {
  if (matchers) return matchers;

  matchers = {};

  fs.readdirSync('./categories/').forEach(file => {
    console.log('initialising matcher: ', file);
    const fileContent = fs.readFileSync('./categories/' + file, 'utf8');
    const terms = fileContent
      .split('\n')
      .reduce((prev, curr) => [...prev, curr], []);
    matchers[file] = makeCatgeoryMatcher(terms);
  });
  return matchers;
};

const categoriseRecord = record => {
  const matchers = getMatchers();
  let newRecord = { ...record };
  Object.keys(matchers).some(key => {
    if (matchers[key](record)) {
      newRecord.category = key;
      return true; // break loop
    }
    return false;
  });
  return newRecord;
};

module.exports = {
  categoriseRecord
};

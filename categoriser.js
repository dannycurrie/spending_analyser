const matchTerm = (term, value) =>
  value.toLowerCase().includes(term.toLowerCase());

const makeCatgeoryMatcher = categoryTerms => ({ description }) =>
  categoryTerms.some(term => matchTerm(term, description));

const billsTerms = [
  'TONIK',
  'NETFLIX',
  'COUNCIL TAX',
  'THAMES WATER',
  'CHILDCARE',
  'NOWTV',
  'Amazon Prime'
];
const foodShoppingTerms = ['ALDI', 'M&S', 'MORRISON', 'TESCO'];
const eatingOutTerms = ['CAFE', 'BASIL & GRAPE', 'Just Eat'];

const matchers = {
  bills: makeCatgeoryMatcher(billsTerms),
  foodShopping: makeCatgeoryMatcher(foodShoppingTerms),
  eatingOut: makeCatgeoryMatcher(eatingOutTerms)
};

const categoriseRecord = record => {
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

const R = require('ramda');
const parse = require('csv-parse/lib/sync');
const stringify = require('csv-stringify/lib/sync');
const fs = require('fs');
const { arrayToRecordObject } = require('./utils');
const { categoriseRecord } = require('./categories');
const { totalsPerCategory } = require('./analysis');

// CONSTANTS
const dataPath = './put_data_here/data.csv';
const outputPath = './output/';

const getData = () => fs.readFileSync(dataPath, 'utf8');
const format = R.map(arrayToRecordObject);
const categorise = R.map(categoriseRecord);

const categorisedRecords = R.pipe(getData, parse, format, categorise)();

const uncategorised = categorisedRecords.filter(
  record => record.category === 'none'
);

const totals = totalsPerCategory(categorisedRecords);
console.log('totals: ', totals);

// write output
fs.writeFileSync(outputPath + 'categorised.csv', stringify(categorisedRecords));
fs.writeFileSync(outputPath + 'uncategorised.csv', stringify(uncategorised));

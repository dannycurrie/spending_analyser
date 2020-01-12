const parse = require('csv-parse/lib/sync');
const fs = require('fs');
const { arrayToRecordObject } = require('./utils');
const { categoriseRecord } = require('./categoriser');

// CONSTANTS
const dataPath = './put_data_here/data.csv';

const input = fs.readFileSync(dataPath, 'utf8');

const recordsRaw = parse(input);

// transform records
const records = recordsRaw.map(arrayToRecordObject);

// append categories
const categorisedRecords = records.map(categoriseRecord);

// write output
console.log('categorisedRecords: ', categorisedRecords);

const parse = require('csv-parse/lib/sync');
const stringify = require('csv-stringify/lib/sync');
const fs = require('fs');
const { arrayToRecordObject } = require('./utils');
const { categoriseRecord } = require('./categoriser');

// CONSTANTS
const dataPath = './put_data_here/data.csv';
const outputPath = './output/';

const input = fs.readFileSync(dataPath, 'utf8');

const recordsRaw = parse(input);

// transform records
const records = recordsRaw.map(arrayToRecordObject);

// append categories
const categorisedRecords = records.map(categoriseRecord);

const uncategorised = categorisedRecords.filter(record => !record.category);

// write output
fs.writeFileSync(outputPath + 'categorised.csv', stringify(categorisedRecords));
fs.writeFileSync(outputPath + 'uncategorised.csv', stringify(uncategorised));

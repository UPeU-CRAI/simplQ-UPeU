/* eslint-disable */
const pumpify = require('pumpify');
const { Readable } = require('stream');
const { createWriteStream } = require('fs');

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../..', '.env') });

const defaultTask = (cb) => {
  const code = `export const baseURL = "${process.env.BASE_URL}"`;
  const stream = Readable.from([code]);
  const output = createWriteStream('src/config.js', {
    flags: 'w',
  });

  pumpify.obj(stream, output);

  cb();
};

exports.default = defaultTask;

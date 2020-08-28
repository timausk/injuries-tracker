const nj = require('nunjucks');
const {readFileSync, writeFile} = require('fs');
const {formatter} = require('./formatter');
const htmlShell = './src/templates/index.njk';
const jsonFile = './lib/injuries.json';
const jsonData = JSON.parse(readFileSync(jsonFile).toString());

const file = nj.render(
  htmlShell, {entries: formatter(jsonData)}
);

writeFile('src/index.html', file, function (error) {
  if (error) return console.log(error);
});

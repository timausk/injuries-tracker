const nj = require('nunjucks');
const {readFileSync, writeFile} = require('fs');
const htmlShell = './src/templates/index.html';
const jsonFile = './lib/injuries.json';
const jsonData = JSON.parse(readFileSync(jsonFile).toString());

const file = nj.render(
  htmlShell, {entries: jsonData.injuries}
);

writeFile('src/index.html', file, function (error) {
  if (error) return console.log(error);
});



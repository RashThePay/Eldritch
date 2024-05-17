const fs = require('fs');
const translate = require('@iamtraction/google-translate')

newFunction();
async function newFunction() {
    var index = JSON.parse(fs.readFileSync('index.json').toString('utf-8'));
    var json = "{";
    for (entry of index) {
        json += `"phrase${index.indexOf(entry)}": "${entry.name.split(' (')[0]}",\n`;
    }
    json[json.length - 1] = "}";
    fs.writeFileSync('dictionary.json', json);
}


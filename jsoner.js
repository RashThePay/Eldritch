const fs = require('fs');

async function newFunction() {
    var text = fs.readFileSync('dictionary.txt').toString('utf-8');
    var lines = text.split(/\r\n/);
    var json = [];
    for (const line of lines) {
        line.split(': ')[1] && json.push(`"${line.split(': ')[1]}": "${line.split(': ')[0]}"`);
    }
    json = JSON.parse('{'+json.join(',')+'}');
    var dict = JSON.parse(fs.readFileSync('dictionary.json').toString('utf-8'));
    var entries = Object.keys(json)
    for (entry of entries){
        if (!dict[entry]) {
            dict[entry] = json[entry];
        }
    }
    fs.writeFileSync('dictionary.json', JSON.stringify(dict))
}

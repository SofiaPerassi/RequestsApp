const fs = require('fs');
const readline = require('readline');
const LINE_PROPERTY = {
	HOST: 0,
	DATETIME: 1,
	METHOD: 2,
	URL: 3,
	PROTOCOL: 4,
	RESPONSE_CODE: 5,
	SIZE_BYTES: 6,
};
let fileLines = [];
const rl = readline.createInterface({
	input: fs.createReadStream('./epa-http.txt'),
	output: process.stdout,
	terminal: false
});
rl.on('line', (line) => {
	let newLine = line.replace(/"/g, "");
	newLine = newLine.replace(/[%?=&[]]/g, "");
	const lineSplit = newLine.split(' ');
	fileLines.push({
		host: lineSplit[LINE_PROPERTY.HOST],
		datetime: {
			day: lineSplit[LINE_PROPERTY.DATETIME][1] + lineSplit[LINE_PROPERTY.DATETIME][2],
			hour: lineSplit[LINE_PROPERTY.DATETIME][4] + lineSplit[LINE_PROPERTY.DATETIME][5],
			minute: lineSplit[LINE_PROPERTY.DATETIME][7] + lineSplit[LINE_PROPERTY.DATETIME][8],
			second: lineSplit[LINE_PROPERTY.DATETIME][10] + lineSplit[LINE_PROPERTY.DATETIME][11],
		},
		method: lineSplit[LINE_PROPERTY.METHOD],
		url: lineSplit[LINE_PROPERTY.URL],
		protocol: lineSplit[LINE_PROPERTY.PROTOCOL][0] + lineSplit[LINE_PROPERTY.PROTOCOL][1] + lineSplit[LINE_PROPERTY.PROTOCOL][2] + lineSplit[LINE_PROPERTY.PROTOCOL][3],
		protocol_version: lineSplit[LINE_PROPERTY.PROTOCOL][5] + lineSplit[LINE_PROPERTY.PROTOCOL][6] + lineSplit[LINE_PROPERTY.PROTOCOL][7],
		response_code: lineSplit[LINE_PROPERTY.RESPONSE_CODE],
		document_size: lineSplit[LINE_PROPERTY.SIZE_BYTES]
	});
});
rl.on('close', () => {
	const jsonString = JSON.stringify(fileLines);
	fs.writeFile('data.json', jsonString, 'ascii', () => console.log('Archivo guardado.'));
});




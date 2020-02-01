// Innotrade Enapso JavaScript Tools - Module Demo
// (C) Copyright 2019-2020 Innotrade GmbH, Herzogenrath, NRW, Germany
// Authors: Alexander Schulze

// requires the Enapso JS Tools package
const
	{ EnapsoJSTools } = require('../index')
	;

global.delay = EnapsoJSTools.delay;

async function demo() {

	// array convenience function
	let array = [];
	// insert (idx, item)
	array.insert(0, 'c');
	array.insert(0, 'b');
	array.insert(0, 'a');
	console.log('Array (insert 3 items): ' + array.join(', '));
	array.delete(1);
	console.log('Array (deleted item 2): ' + array.join(', '));

	// async delay function
	console.log('Delay 1000ms, started: ' + new Date().toISOString());
	// await delay(1000);
	await EnapsoJSTools.delay(1000);
	console.log('Delay 1000ms, finished: ' + new Date().toISOString());

}

demo();
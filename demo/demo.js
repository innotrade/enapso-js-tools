// Innotrade Enapso JavaScript Tools - Module Demo
// (C) Copyright 2019-2020 Innotrade GmbH, Herzogenrath, NRW, Germany
// Authors: Alexander Schulze

// requires the Enapso JS Tools package
const
	{ EnapsoJSTools, EnapsoJSONTools } = require('../index')
	;

global.delay = EnapsoJSTools.delay;

function demoJsonWalker() {

	let obj = {
		items: [
			{
				subTest1: '1.1',
				subTest2: {
					level: 3
				}
			},
			{
				subTest1: '2.1',
				subTest2: {
					level: 3
				}
			}
		]
	};

	EnapsoJSONTools.walker(
		'subTest2',
		obj,
		function (err, results) {
			for (let res of results) {
				if (res.level) {
					res.level = 4;
				}
				console.log(JSON.stringify(res));
			}
		}
	);

	console.log(JSON.stringify(obj, null, 2));
}

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

	demoJsonWalker();

	// async delay function
	console.log('Delay 1000ms, started: ' + new Date().toISOString());
	// await delay(1000);
	await EnapsoJSTools.delay(1000);
	console.log('Delay 1000ms, finished: ' + new Date().toISOString());

}

demo();
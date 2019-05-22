// Innotrade Enapso
// (C) Copyright 2019 Innotrade GmbH, Herzogenrath, NRW, Germany
// Author: Alexander Schulze

// Tools level

async function delay(ms) {
	let promise = new Promise(function (resolve) {
		setTimeout(function () {
			resolve();
		}, ms);
	});
	return promise;
}

class Arguments {

	constructor(args, options) {
		if (undefined === args) {
			return null;
		}

		this.args = {};

		let lCnt = args.length;
		// check if we only have one arg and if this is an object
		if ((lCnt === 1) && (typeof args[0] === 'object')) {
			let obj = args[0];
			for (let key in obj) {
				this.args[key] = obj[key];
			}
		}

		// go through all options to validate or set default
		for (let option of options) {
			// if an argument is not passed
			if (!this.args[option.id]) {
				if (option.default !== undefined) {
					this.args[option.id] =
						(typeof option.default === 'function' ?
							option.default() :
							option.default
						);
				}
			}
		}
	}

	getArgs() {
		// return all evaluated arguments
		return this.args;
	}

	get(id) {
		let val = this.args[id];
		return (val);
	}

}

// Array convenience functions 
Array.prototype.insert = function (idx, item) {
	// start, deleteCount, insertItems
	this.splice(idx, 0, item);
	return this.length;
}

Array.prototype.delete = function (idx) {
	// start, deleteCount, insertItems
	let res = this.splice(idx, 1);
	return res;
}

module.exports = {
	Arguments,
	delay
}
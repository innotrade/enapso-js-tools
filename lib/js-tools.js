// Innotrade Enapso
// (C) Copyright 2019-2020 Innotrade GmbH, Herzogenrath, NRW, Germany
// Author: Alexander Schulze

// Tools level

class EnapsoJSTools {
    static async delay(ms) {
        let promise = new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, ms);
        });
        return promise;
    }

    // enEmptyFunction, helpful when you need to
    // refer to a callback but do not want an
    // action to be performed
    static emptyFunction() {}
}

class EnapsoJSONTools {
    static walker(key, json, done, results) {
        results = results || [];
        /*
		if (!permitted(tag)) {
			return done(new Error('First argument must be a string'), null);
		}
		*/

        function searchRecursive(key, json) {
            let keys,
                type = typeof json;
            try {
                if (
                    type === 'string' ||
                    type === 'number' ||
                    type === 'function'
                ) {
                    throw new Error(
                        'Second argument must be an Array or Object'
                    );
                }
                keys = Object.keys(json);
            } catch (err) {
                return done(err, null);
            }
            for (let idx = 0; idx < keys.length; idx++) {
                if (typeof json[keys[idx]] === 'object') {
                    if (keys[idx] === key) {
                        if (Array.isArray(json[keys[idx]])) {
                            results = results.concat(json[keys[idx]]);
                        } else {
                            results.push(json[keys[idx]]);
                        }
                    }
                    searchRecursive(
                        key,
                        json[keys[idx]],
                        function (err, res) {},
                        results
                    );
                }
            }
        }

        searchRecursive(key, json);
        done(null, results);
    }
}

class Arguments {
    constructor(args, options) {
        if (undefined === args) {
            return null;
        }

        this.args = {};

        let lCnt = args.length;
        // check if we only have one arg and if this is an object
        if (lCnt === 1 && typeof args[0] === 'object') {
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
                        typeof option.default === 'function'
                            ? option.default()
                            : option.default;
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
        return val;
    }
}

// Array convenience functions
Array.prototype.insert = function (idx, item) {
    // start, deleteCount, insertItems
    this.splice(idx, 0, item);
    return this.length;
};

Array.prototype.delete = function (idx) {
    // start, deleteCount, insertItems
    let res = this.splice(idx, 1);
    return res;
};

function mergeProto(to, from) {
    const fromProto = from.prototype; // .constructor.prototype;
    const toProto = to.prototype; // .constructor.prototype;

    const keys = Object.getOwnPropertyNames(fromProto);
    for (const key of keys) {
        if (key !== 'constructor' && key !== '__proto__') {
            toProto[key] = fromProto[key];
        }
    }
}

module.exports = {
    EnapsoJSTools,
    EnapsoJSONTools,
    Arguments,

    mergeProto,
    delay: EnapsoJSTools.delay,
    emptyFunction: EnapsoJSTools.emptyFunction,
    jsonWalker: EnapsoJSONTools.walker
};

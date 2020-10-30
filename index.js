// Innotrade ENAPSO - JavaScript Toolbox
// (C) Copyright 2019-2020 Innotrade GmbH, Herzogenrath, NRW, Germany
// Author: Alexander Schulze

const {
    EnapsoJSTools,
    EnapsoJSONTools,
    delay,
    mergeProto,
    jsonWalker
} = require('./lib/js-tools');

module.exports = {
    EnapsoJSTools,
    EnapsoJSONTools,
    delay,
    jsonWalker,
    enjstools: {
        EnapsoJSTools,
        EnapsoJSONTools,
        emptyFunction: EnapsoJSTools.emptyFunction,
        delay: EnapsoJSTools.delay,
        mergeProto
    }
};

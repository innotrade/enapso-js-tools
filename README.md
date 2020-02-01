# enapso-js-tools
Enapso JavaScript Toolbox

Convenience methods for various classes, often used in Enapso.

# Installation
```npm i @innotrade/enapso-js-tools --save```

# Usage
```javascript
const
	{ EnapsoJSTools } = require('@innotrade/enapso-js-tools');
```

## Convenience functions

### delay
```javascript
global.delay = EnapsoJSTools.delay;
```
```javascript
// async delay function
console.log('Delay 1000ms, started: ' + new Date().toISOString());
await delay(1000);
console.log('Delay 1000ms, finished: ' + new Date().toISOString());
```
If you prefer to not polute the global namespace, of course, you can also use:
```javascript
await EnapsoJSTools.delay(1000);
```
without the global.delay assignment.
Console Output
```
Delay 1000ms, started: 2020-02-01T10:17:14.087Z
Delay 1000ms, finished: 2020-02-01T10:17:15.089Z
```
## Extensions of JS Classes

### Array
Alternative for the often confusing splice method of the Array class:
```javascript
Array.prototype.insert(idx, item);
Array.prototype.delete(idx);
```
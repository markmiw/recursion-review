// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var objCheck = [];
  var arrayCheck = [];
  if (typeof obj === 'number') {
    return obj.toString();
  } else if (obj === null) {
    return 'null';
  } else if (typeof obj === 'boolean') {
    return obj ? 'true' : 'false';
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj) === true) {
    obj.forEach(function(item) {
      arrayCheck.push(stringifyJSON(item));
    });
    return '[' + arrayCheck + ']';
  } else if (typeof obj === 'object') {
    for (var key in obj) {
      if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
        continue;
      }
      objCheck.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + objCheck + '}';
  }
};
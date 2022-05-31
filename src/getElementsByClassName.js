// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var list = [];
  var body = document.body;
  var checkBody = function(body) {
    if (body.classList && body.classList.contains(className)) {
      list.push(body);
    }
    if (body.childNodes) {
      for (var i = 0; i < body.childNodes.length; i++) {
        checkBody(body.childNodes[i]);
      }
    }
  };
  checkBody(body);
  return list;
};
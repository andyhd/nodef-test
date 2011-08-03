var connect = require('connect'),
  nodef = require('nodef');

function hello(element, args) {
  var parent = element.parentNode,
    document = element.ownerDocument,
    text = document.createTextNode("Hello World!");
  parent.replaceChild(text, element);
}

nodef.SnippetRegistry.add("hello", hello);

connect.createServer(
  connect.favicon(),
  nodef.filter
).listen(3000);

console.log("Server listening at 127.0.0.1:3000");

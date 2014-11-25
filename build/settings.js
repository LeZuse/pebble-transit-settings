var s = ['']
for(var i=0, len=localStorage.length; i<len; i++) {
  var key = localStorage.key(i);
  var value = localStorage[key];
  s += key +' '+value+'\n';
}

try {
var options = JSON.parse(decodeURIComponent(window.location.hash.substr(1)));
} catch(e) {}

React.render(
  React.createElement("div", null, 
    React.createElement("h1", null, "Hello, world!"), 
    React.createElement("div", null, "LS items: ", localStorage.length), 
    React.createElement("div", null, s), 
    React.createElement("div", null, options), 
    window.location.hash
  ),
  document.getElementById('example')
);

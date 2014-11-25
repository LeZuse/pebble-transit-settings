var s = ['']
for(var i=0, len=localStorage.length; i<len; i++) {
  var key = localStorage.key(i);
  var value = localStorage[key];
  s += key +' '+value+'\n';
}

React.render(
  React.createElement("div", null, 
    React.createElement("h1", null, "Hello, world!"), 
    React.createElement("div", null, "LS items: ", localStorage.length), 
    s
  ),
  document.getElementById('example')
);

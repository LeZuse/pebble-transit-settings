var s = ['']
for(var i=0, len=localStorage.length; i<len; i++) {
  var key = localStorage.key(i);
  var value = localStorage[key];
  s += key +' '+value+'\n';
}

React.render(
  <div>
    <h1>Hello, world!</h1>
    <div>LS items: {localStorage.length}</div>
    {s}
  </div>,
  document.getElementById('example')
);

var s = ['']
for(var i=0, len=localStorage.length; i<len; i++) {
  var key = localStorage.key(i);
  var value = localStorage[key];
  s += key +' '+value+'\n';
}

try {
var options = JSON.parse(decodeURIComponent(window.location.hash));
} catch(e) {}

React.render(
  <div>
    <h1>Hello, world!</h1>
    <div>LS items: {localStorage.length}</div>
    <div>{s}</div>
    <div>{options}</div>
    {window.location.hash}
  </div>,
  document.getElementById('example')
);

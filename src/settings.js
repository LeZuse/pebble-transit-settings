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
  <div>
    <h1>Hello, world!</h1>
    <div>LS items: {localStorage.length}</div>
    <div>{s}</div>
    <textarea>{JSON.stringify(options)}</textarea>
    {window.location.hash}
  </div>,
  document.getElementById('example')
);

React.render(
  React.createElement("div", null, 
    React.createElement("h1", null, "Hello, world!"), 
    React.createElement("div", null, localStorage['journeys'])
  ),
  document.getElementById('example')
);

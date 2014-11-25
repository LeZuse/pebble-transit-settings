
var Form = React.createClass({displayName: 'Form',
  getInitialState: function() {
    var options;
    try {
      options = JSON.parse(decodeURIComponent(window.location.hash.substr(1)));
    } catch(e) {}

    if (!options || !options.journeys) {
      options = options || {};
      options.journeys = [];
    }

    return {
      options: options
    }
  },
  saveSettings: function(e) {
    e.preventDefault();
    document.querySelector('#main').innerHTML = '<center><h1>SAVED';
    // console.log(this.state.options)
    document.location = 'pebblejs://close#' + encodeURIComponent(JSON.stringify(this.state.options));
  },
  addJourney: function(e) {
    e.preventDefault();
    this.state.options.journeys.push({name: '',form:'',to:''});
    this.forceUpdate()
  },
  delJourney: function(i) {
    self = this
    return function(e) {
      e.preventDefault();
      self.state.options.journeys.splice(i, 1);
      self.forceUpdate()
    }
  },
  onChange: function(i) {
    self = this
    return function(e) {
      self.state.options.journeys[i][e.target.name] = e.target.value;
      self.forceUpdate()
    }
  },
  render: function() {
    self = this
    return (
      React.createElement("form", null, 
        this.state.options.journeys.map(function(j, i){
          return React.createElement("div", {key: i}, 
            "Name ", React.createElement("input", {name: "name", type: "text", value: j.name, onChange: self.onChange(i)}), React.createElement("br", null), 
            "From ", React.createElement("input", {name: "from", type: "text", value: j.from, onChange: self.onChange(i)}), React.createElement("br", null), 
            "To ", React.createElement("input", {name: "to", type: "text", value: j.to, onChange: self.onChange(i)}), React.createElement("br", null), 
            "Area ", React.createElement("input", {name: "location", type: "text", value: j.location, onChange: self.onChange(i)}), 
            React.createElement("input", {type: "submit", value: "X", onClick: self.delJourney(i)}), React.createElement("hr", null)
          )
        }), 
        React.createElement("br", null), 
        React.createElement("input", {type: "submit", value: "Add", onClick: this.addJourney}), 
        React.createElement("input", {type: "submit", value: "Save", onClick: this.saveSettings})
      )
    );
  }
});

React.render(
  React.createElement("div", {id: "main"}, 
    React.createElement("h1", {id: "head"}, "Transit Settings"), 

    React.createElement(Form, null)
  ),
  document.getElementById('example')
);

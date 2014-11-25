
var Form = React.createClass({
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
      <form>
        {this.state.options.journeys.map(function(j, i){
          return <div key={i}>
            Name <input name="name" type="text" value={j.name} onChange={self.onChange(i)} /><br />
            From <input name="from" type="text" value={j.from} onChange={self.onChange(i)} /><br />
            To <input name="to" type="text" value={j.to} onChange={self.onChange(i)} /><br />
            Area <input name="location" type="text" value={j.location} onChange={self.onChange(i)} />
            <input type="submit" value="X" onClick={self.delJourney(i)} /><hr />
          </div>
        })}
        <br />
        <input type="submit" value="Add" onClick={this.addJourney} />
        <input type="submit" value="Save" onClick={this.saveSettings} />
      </form>
    );
  }
});

React.render(
  <div id="main">
    <h1 id="head">Transit Settings</h1>

    <Form />
  </div>,
  document.getElementById('example')
);

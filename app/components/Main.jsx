var React = require('react');

//komponente
var Navigation = require('Navigation');

var Main = (props) => {
  return (
    <div>
      <div >
          <div >
            <Navigation />
            <p>Main.jsx Render</p>
            {props.children}
          </div>
      </div>
    </div>
  );
};

module.exports = Main;

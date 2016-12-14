var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
    return(
        <div className="top-bar">
            <div className="top-bar-left">
                  <ul className="menu">
                      <li className="menu-text">React - TimerApp</li>
                      <li>
                          <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
                      </li>
                      <li>
                          <IndexLink to="/countdown" activeClassName="active-link">Odbrojavanje</IndexLink>
                      </li>
                  </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Naprevljeno od: <a href="https://github.com/blevajac" target="_blank">Boris Levajac</a>
                    </li>
                </ul>
            </div>
        </div>
    );

};


module.exports = Navigation;

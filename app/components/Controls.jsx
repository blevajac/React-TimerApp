var React = require('react');

var Controls = React.createClass({
    propTypes: {
      countdownStatus: React.PropTypes.string.isRequired
    },
    render: function(){
        var {countdownStatus} = this.props;
        var renderStartStopButton = () => {
            if(countdownStatus === 'started'){
                return(
                      <button className="button secondary">Pauziraj</button>
                );
            }else if(countdownStatus === 'paused'){
                return(
                      <button className="button primary">Start</button>
                );
            }
        };

        return (
          <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow">Oćistit</button>
          </div>          
        );
    }
});

module.exports = Controls;

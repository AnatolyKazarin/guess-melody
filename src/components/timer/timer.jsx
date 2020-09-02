import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Timer extends PureComponent {
  constructor(props) {
    super(props);

    const {gameTime, time} = this.props;

    this.state = {
      time: gameTime * 60 - time
    };
  }

  tick() {
    this.setState((state) => ({
      time: state.time - 1
    }));
  }

  componentDidMount() {
    const {onTimerTick} = this.props;
    this.timerID = setInterval(() => {
      this.tick();
      onTimerTick(this.state.time);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
        <span className="timer__mins">{(Math.floor(this.state.time / 60) < 10) ? `0` + Math.floor(this.state.time / 60) : Math.floor(this.state.time / 60)}</span>
        <span className="timer__dots">:</span>
        <span className="timer__secs">{(this.state.time % 60 < 10) ? `0` + this.state.time % 60 : this.state.time % 60}</span>
      </div>
    );
  }
}

Timer.propTypes = {
  onTimerTick: PropTypes.func,
  gameTime: PropTypes.number,
  time: PropTypes.number
};

export {Timer};

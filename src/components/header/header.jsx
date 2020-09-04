import React from 'react';
import {connect} from 'react-redux';
import Timer from '../timer/timer.jsx';
import Mistakes from '../mistakes/mistakes.jsx';
import PropTypes from 'prop-types';
import {ActionCreator} from "../../reducer";

const Header = (props) => {
  const {
    time,
    gameTime,
    onTimerTick,
    onLinkClick,
    mistakes
  } = props;

  const circleStyle = {
    filter: `url(#blur)`,
    transform: `rotate(-90deg) scaleY(-1)`,
    transformOrigin: `center`,
  };

  return (
    <header className="game__header">
      <a className="game__back" href="#" onClick={onLinkClick}>
        <span className="visually-hidden">Сыграть ещё раз</span>
        <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
      </a>

      <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
        <circle className="timer__line" cx="390" cy="390" r="370"
          style={circleStyle}/>
      </svg>

      <Timer
        time = {time}
        gameTime = {gameTime}
        onTimerTick = {onTimerTick}
      />

      <Mistakes
        mistakes = {mistakes}
      />

    </header>
  );
};

Header.propTypes = {
  time: PropTypes.number.isRequired,
  gameTime: PropTypes.number.isRequired,
  onTimerTick: PropTypes.func.isRequired,
  onLinkClick: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  mistakes: state.mistakes,
  time: state.time,
});

const mapDispatchToProps = (dispatch) => ({
  onTimerTick: (time) => {
    dispatch(ActionCreator.timerTick(time));
  },
  onLinkClick: () => {
    dispatch(ActionCreator.reset());
  }
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);

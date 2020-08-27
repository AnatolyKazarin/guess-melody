import React from 'react';
import PropTypes from 'prop-types';
import {Timer} from '../timer/timer.jsx';


const ArtistQuestionScreen = (props) => {
  const {
    question,
    time,
    gameTime,
    onAnswer,
    onTimerTick,
    renderPlayer,
  } = props;

  const {
    song,
    answers,
  } = question;

  const circleStyle = {
    filter: `url(#blur)`,
    transform: `rotate(-90deg) scaleY(-1)`,
    transformOrigin: `center`,
  };

  return (
    <section className="game game--artist">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370" style={circleStyle} />
        </svg>

        <Timer
          time = {time}
          gameTime = {gameTime}
          onTimerTick = {onTimerTick}
        />

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            {renderPlayer(song, 0)}
          </div>
        </div>

        <form className="game__artist" onChange = {onAnswer}>
          {answers.map((it, i) => {
            return (
              <div key={`answer-${i}`} className="artist">
                <input
                  // checked={this.state.userAnswer}
                  className="artist__input visually-hidden"
                  type="radio"
                  name="answer"
                  value={`answer-${i}`}
                  id={`answer-${i}`}
                  onChange={() => (it[i])}
                />
                <label className="artist__name" htmlFor={`answer-${i}`}>
                  <img className="artist__picture" src={it.picture} alt={it.artist} />
                  {it.artist}
                </label>
              </div>
            );
          })}
        </form>
      </section>
    </section>
  );
};

ArtistQuestionScreen.propTypes = {
  question: PropTypes.shape({
    song: PropTypes.string.isRequired,
    answers: PropTypes.object.isRequired,
  }),
  onAnswer: PropTypes.func.isRequired,
  onTimerTick: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
  gameTime: PropTypes.number.isRequired,
  renderPlayer: PropTypes.func.isRequired
};

export {ArtistQuestionScreen};

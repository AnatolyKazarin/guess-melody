import React from 'react';
import PropTypes from "prop-types";
import {Timer} from "../timer/timer.jsx";

const GenreQuestionScreen = (props) => {

  const {
    question,
    time,
    gameTime,
    onAnswer,
    onTimerTick,
    renderPlayer,
    step,
    userAnswer,
  } = props;
  const {
    answers,
    genre,
  } = question;

  const circleStyle = {
    filter: `url(#blur)`,
    transform: `rotate(-90deg) scaleY(-1)`,
    transformOrigin: `center`,
  };

  return (
    <section className="game game--genre">
      <header className="game__header">
        <a className="game__back" href="#">
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

        <div className="game__mistakes">
          <div className="correct"></div>
          <div className="correct"></div>
          <div className="correct"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks" onSubmit = {(evt) => {
          evt.preventDefault();
          onAnswer(userAnswer);
        }}>

          {answers.map((it, i) => (
            <div key={`${step}-answer-${i}`} className="track">
              {renderPlayer(it, i)}
              <div className="game__answer">
                <input
                  checked={userAnswer[i]}
                  className="game__input visually-hidden"
                  type="checkbox"
                  name="answer"
                  value={`answer-${i}`}
                  id={`answer-${i}`}
                  onChange={() => {
                    userAnswer[i] = !userAnswer[i];
                  }}
                />
                <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
              </div>
            </div>
          ))}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>);
};


GenreQuestionScreen.propTypes = {
  question: PropTypes.shape({
    answers: PropTypes.object,
    genre: PropTypes.string,
  }),
  onAnswer: PropTypes.func,
  onTimerTick: PropTypes.func,
  time: PropTypes.number,
  gameTime: PropTypes.number,
  renderPlayer: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  userAnswer: PropTypes.object.isRequired
};

export {GenreQuestionScreen};

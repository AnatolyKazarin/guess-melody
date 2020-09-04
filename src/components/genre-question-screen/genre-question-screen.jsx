import React, {useState} from 'react';
import PropTypes from "prop-types";

const GenreQuestionScreen = (props) => {

  const {
    question,
    onAnswer,
    renderPlayer,
    step,
    userAnswer,
    onChange
  } = props;

  const {
    answers,
    genre,
  } = question;

  const [inputChecked, setInput] = useState(false);

  return (
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
                  onChange(userAnswer);
                  setInput(!inputChecked);
                }}
              />
              <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
            </div>
          </div>
        ))}

        <button className="game__submit button" type="submit">Ответить</button>
      </form>
    </section>
  );
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
  userAnswer: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export {GenreQuestionScreen};

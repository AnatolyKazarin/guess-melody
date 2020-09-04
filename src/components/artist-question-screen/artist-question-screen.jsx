import React from 'react';
import PropTypes from 'prop-types';

const ArtistQuestionScreen = (props) => {
  const {
    question,
    step,
    onAnswer,
    renderPlayer,
  } = props;

  const {
    song,
    answers,
  } = question;

  return (
    <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <div className="track">
          {renderPlayer(song, 0)}
        </div>
      </div>

      <form className="game__artist">
        {answers.map((it, i) => {
          return (
            <div key={`${step}-answer-${i}`} className="artist">
              <input
                className="artist__input visually-hidden"
                type="radio"
                name="answer"
                value={`answer-${i}`}
                id={`answer-${i}`}
                onChange={(evt) => {
                  evt.preventDefault();
                  onAnswer(it);
                }}
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
  step: PropTypes.number.isRequired,
  gameTime: PropTypes.number.isRequired,
  renderPlayer: PropTypes.func.isRequired
};

export {ArtistQuestionScreen};

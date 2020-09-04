import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {ActionCreator} from "../../reducer";
import {WelcomeScreen} from "../welcome-screen/welcome-screen.jsx";
import {ArtistQuestionScreen} from "../artist-question-screen/artist-question-screen.jsx";
import {GenreQuestionScreen} from "../genre-question-screen/genre-question-screen.jsx";
import Header from "../header/header.jsx";
import withActivePlayer from "../../hocs/with-active-player/with-active-player.js";
import withUserAnswer from "../../hocs/with-user-answer/with-user-answer.jsx";

const GenreQuestionScreenWrapped = withUserAnswer(withActivePlayer(GenreQuestionScreen));
const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _getScreen(question) {
    if (!question) {
      const {
        errorsCount,
        gameTime,
        onWelcomeScreenClick,
      } = this.props;

      return <WelcomeScreen
        gameTime = {gameTime}
        errorsCount = {errorsCount}
        onClick = {onWelcomeScreenClick}
      />;
    }

    const {
      onUserAnswer,
      mistakes,
      errorsCount,
      onTimerTick,
      time,
      gameTime,
      step
    } = this.props;

    switch (question.type) {
      case `genre`: return (
        <section className="game game--genre">
          <Header
            gameTime = {gameTime}
          />
          <GenreQuestionScreenWrapped
            step = {step}
            question = {question}
            onAnswer = {(userAnswer) => onUserAnswer(
                userAnswer,
                question,
                mistakes,
                errorsCount
            )}
          />
        </section>
      );
      case `artist`: return (
        <section className="game game--artist">
          <Header
            gameTime = {gameTime}
          />
          <ArtistQuestionScreenWrapped
            step = {step}
            question = {question}
            onAnswer = {(userAnswer) => onUserAnswer(
                userAnswer,
                question,
                mistakes,
                errorsCount
            )}
            time = {time}
            gameTime = {gameTime}
            onTimerTick = {onTimerTick}
          />
        </section>
      );
    }

    return null;
  }

  render() {
    const {
      questions,
      step,
    } = this.props;

    return this._getScreen(questions[step]);
  }
}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorsCount: PropTypes.number,
  questions: PropTypes.array.isRequired,
  step: PropTypes.number,
  mistakes: PropTypes.number,
  time: PropTypes.number,
  onWelcomeScreenClick: PropTypes.func,
  onUserAnswer: PropTypes.func,
  onTimerTick: PropTypes.func,
  mapStateToProps: PropTypes.func,
  mapDispatchToProps: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  step: state.step,
  mistakes: state.mistakes,
  // questions: state.questions
});

const mapDispatchToProps = (dispatch) => ({

  onWelcomeScreenClick: () => {
    dispatch(ActionCreator.incrementStep());
  },

  onUserAnswer: (userAnswer, question, mistakes, maxMistakes) => {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(
        userAnswer,
        question,
        mistakes,
        maxMistakes
    ));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

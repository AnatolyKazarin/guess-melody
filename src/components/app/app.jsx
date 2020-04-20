import React from "react";
import {PureComponent} from "react";
import PropTypes from "prop-types";
import {WelcomeScreen} from "../welcome-screen/welcome-screen.jsx";
import {ArtistQuestionScreen} from "../artist-question-screen/artist-question-screen.jsx";
import {GenreQuestionScreen} from "../genre-question-screen/genre-question-screen.jsx";

class App extends PureComponent {
  static getScreen(question, props, onUserAnswer) {
    if (question === -1) {
      const {
        time,
        errorsCount,
      } = props;
      return <WelcomeScreen
        time = {time}
        errorsCount = {errorsCount}
        onStartButtonClick = {onUserAnswer}
      />;
    }

    const {questions} = props;
    const currentQuestion = questions[question];

    switch (currentQuestion.type) {
      case `genre`: return <GenreQuestionScreen
        question = {currentQuestion}
        onAnswer = {onUserAnswer}
      />;
      case `artist`: return <ArtistQuestionScreen
        question = {currentQuestion}
        onAnswer = {onUserAnswer}
      />;
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      question: -1,
    };
  }

  render() {
    const {
      time,
      errorsCount,
      questions,
    } = this.props;
    const {question} = this.state;

    return App.getScreen(question, this.props, () => {
      this.setState((prevState) => {
        const nextIndex = prevState.question + 1;
        const isEnd = nextIndex >= questions.length;

        return {
          question: !isEnd ? nextIndex : -1,
        };
      });
    });
  }
}

App.propTypes = {
  time: PropTypes.number,
  errorsCount: PropTypes.number,
  questions: PropTypes.isObject,
};

export {App};

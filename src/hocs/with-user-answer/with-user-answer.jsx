import * as React from 'react';
import PropTypes from 'prop-types';

const withUserAnswer = (Component) => {
  class WithUserAnswer extends React.Component {
    constructor(props) {
      super(props);

      const {question} = this.props;
      const {answers} = question;

      this.state = {
        userAnswer: new Array(answers.length).fill(false),
      };

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(answerArray) {
      this.setState({
        userAnswer: answerArray,
      });
    }

    render() {
      return <Component
        {...this.props}
        userAnswer = {this.state.userAnswer}
        onChange = {this.handleChange}
      />;
    }
  }

  WithUserAnswer.propTypes = {
    question: PropTypes.shape({
      answers: PropTypes.object.isRequired,
    }),
  };

  return WithUserAnswer;
};

export default withUserAnswer;

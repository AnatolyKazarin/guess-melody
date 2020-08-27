import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withUserAnswer = (Component) => {
  class WithUserAnswer extends PureComponent {
    constructor(props) {
      super(props);

      const {question} = this.props;
      const {answers} = question;

      this.state = {
        userAnswer: new Array(answers.length).fill(false),
      };
    }

    render() {
      return <Component
        {...this.props}
        userAnswer = {this.state.userAnswer}
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

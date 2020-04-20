import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app.jsx";
import {questions, settings} from "./mocks/questions";

const init = (gameQuestions) => {
  ReactDOM.render(
      <App
        time = {settings.gameTime}
        errorsCount = {settings.errorsCount}
        questions = {gameQuestions}
      />,
      document.querySelector(`#root`)
  );
};

init(questions);

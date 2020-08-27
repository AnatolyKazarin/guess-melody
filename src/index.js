import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import App from "./components/app/app.jsx";
import {questions, settings} from "./mocks/questions";
import {reducer} from "./reducer";

const init = (gameQuestions) => {
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  ReactDOM.render(
      <Provider store={store}>
        <App
          gameTime = {settings.gameTime}
          errorsCount = {settings.errorsCount}
          questions = {gameQuestions}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init(questions);

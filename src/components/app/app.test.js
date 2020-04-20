import React from "react";
import renderer from "react-test-renderer";
import {App} from "../app/app";

// const App = (props) => {
//   const {time, errorsCount} = props;
//
//   return <WelcomeScreen
//     time = {time}
//     errorsCount = {errorsCount}
//   />;
// };

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      mistakes = {0}
      minutes = {0}
      onClick = {jest.fn()}
    />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});

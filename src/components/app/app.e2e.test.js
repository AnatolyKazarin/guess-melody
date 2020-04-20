import React from "react";
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {App} from "../app/app";

Enzyme.configure({adapter: new Adapter()});

it(`Button is working correctly on press`, () => {
  const clickHandler = jest.fn();
  const app = mount(<App
    mistakes = {0}
    minutes = {0}
    onClick = {clickHandler}
  />);

  const startButton = app.find(`button`);
  startButton.simulate(`click`, {preventDefault() {}});

  expect(clickHandler).toHaveBeenCalledTimes(1);
});

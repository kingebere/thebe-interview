import React from "react";
import Input from "./input";
import {render, fireEvent, cleanup} from "@testing-library/react";

afterEach(cleanup);

test("displays the correct text", () => {
  const {getByLabelText} = render(<Input />);
  const inputs = getByLabelText("user-name");
  expect(inputs.value).toBe("");
  fireEvent.change(inputs, {target: {value: "code"}});
  expect(inputs.value).toBe("code");
});

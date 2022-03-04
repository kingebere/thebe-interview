import * as React from "react";
import {render, screen} from "@testing-library/react";

import List from "./list";

it("should correctly display the images", () => {
  render(<List />);
  expect(screen.getByRole("img")).toBeTruthy();
});

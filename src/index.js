import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { colors } from "./components/utils/_var";
import { injectGlobal } from "styled-components";

// global styles
injectGlobal`
  body {
    background-color: ${colors.$colorBg};
    color: #fff;
  }
`;

ReactDOM.render(<App />, document.getElementById("root"));

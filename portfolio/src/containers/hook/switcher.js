import React from "react";
import uselightMode from "./use-light-mode";
import Toggle from "./Toggle";

import "./lightMode.scss";

function Switcher() {
  const [lightMode, setlightMode] = uselightMode();

  return (
    <div className="aaa">
      <Toggle lightMode={lightMode} setlightMode={setlightMode} />
    </div>
  );
}

export default Switcher;

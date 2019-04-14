import React from "react";
import { useEffect } from "react";
import uselightMode from "./use-light-mode";
import Toggle from "./Toggle";

import "./lightMode.scss";

function Switcher(props) {
  const [lightMode, setlightMode] = uselightMode();

  useEffect(
    () => {
      console.log(lightMode);
      if (lightMode === true) {
        props.handleModeChange();
      } else if (lightMode === false) {
        props.handleModeChange();
      }
    },
    [lightMode]
  );

  return (
    <div className="aaa">
      <Toggle
        mode={props.mode}
        lightMode={lightMode}
        setlightMode={setlightMode}
      />
    </div>
  );
}

export default Switcher;

import React from "react";

const Toggle = ({ lightMode, setlightMode }) => (
  <div className="light-mode-toggle">
    <button type="button" onClick={() => setlightMode(true)}>
      ☾
    </button>

    <span className="toggle-control">
      <input
        className="dmcheck"
        id="dmcheck"
        type="checkbox"
        checked={lightMode}
        onChange={() => setlightMode(!lightMode)}
      />
      <label htmlFor="dmcheck" />
    </span>
    <button type="button" onClick={() => setlightMode(false)}>
      ☀
    </button>
  </div>
);

export default Toggle;

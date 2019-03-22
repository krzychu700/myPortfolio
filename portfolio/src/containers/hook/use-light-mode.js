import { useEffect } from "react";
import useLocalStorage from "./use-local-storage";
import useMedia from "./use-media";

function uselightMode() {
  // Use our useLocalStorage hook to persist state through a page refresh.
  // Read the recipe for this hook to learn more: usehooks.com/useLocalStorage
  const [enabledState, setEnabledState] = useLocalStorage("light-mode-enabled");

  // See if user has set a browser or OS preference for light mode.
  // The usePreferslightMode hook composes a useMedia hook (see code below).
  const preferslightMode = usePreferslightMode();

  // If enabledState is defined use it, otherwise fallback to preferslightMode.
  // This allows user to override OS level setting on our website.
  const enabled =
    typeof enabledState !== "undefined" ? enabledState : preferslightMode;

  // Fire off effect that add/removes light mode class
  useEffect(
    () => {
      const className = "light-mode";
      const element = window.document.body;
      if (enabled) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    },
    [enabled] // Only re-call effect when value changes
  );

  // Return enabled state and setter
  return [enabled, setEnabledState];
}

// Compose our useMedia hook to detect light mode preference.
// The API for useMedia looks a bit weird, but that's because ...
// ... it was designed to support multiple media queries and return values.
// Thanks to hook composition we can hide away that extra complexity!
// Read the recipe for useMedia to learn more: usehooks.com/useMedia
function usePreferslightMode() {
  return useMedia(["(prefers-color-scheme: light)"], [true], false);
}

export default uselightMode;

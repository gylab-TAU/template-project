/**
 * @title check jspsych
 * @description 
 * @version 0.1.0
 *
 * The following lines specify which media directories will be packaged and preloaded by jsPsych.
 * Modify them to arbitrary paths (or comma-separated lists of paths) within the `media` directory,
 * or delete them.
 * @imageDir images
 * @miscDir html
 */

// You can import the custom stylesheets you use (.scss or .css).
import "../styles/main.scss";

// jsPsych plugins
import "jspsych/plugins/jspsych-html-keyboard-response";
import "jspsych/plugins/jspsych-fullscreen";


import * as consent from "./components/consentComponent";
import * as id from "./components/idComponent";
import * as instructions from "./components/instructionsComponent";
/**
 * This is where you define your jsPsych timeline.
 *
 * @param input A custom object that can be specified via the JATOS web interface ("JSON study
 *              input").
 */

export function createTimeline(input = {}) {
  let timeline = [];

  timeline.push(id.default.getTrial());
  timeline.push(consent.default.getConsentTrial())

  // Switch to fullscreen
  timeline.push({
    type: "fullscreen",
    fullscreen_mode: true,
  });

  document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
      jsPsych.endExperiment("You can no longer participate in this experiment");
    }
  })

  timeline.push(instructions.default.getTrial());

  return timeline;
}

export function on_finish(message) {
  
}

// Whatever you `export` from this file will be passed to `jsPsych.init()` (except for `timeline`,
// which is determined using `createTimeline()`)

// Note: `preload_images`, `preload_audio`, and `preload_video` will be set automatically if you
// don't export them.

var hello_trial = {
    type: 'html-keyboard-response',
    stimulus: 'Hello world!'
}


jsPsych.init({
    timeline: [hello_trial]
})
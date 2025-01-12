// Wrapping everything inside an IIFE
(function (window) {
  // Creating the 'helloSpeaker' object
  var helloSpeaker = {};

  // Private variable for the greeting
  var speakWord = "Hello";

  // Attaching the 'speak' function to the 'helloSpeaker' object
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Exposing the 'helloSpeaker' object to the global scope
  window.helloSpeaker = helloSpeaker;
})(window);

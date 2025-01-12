// Wrapping everything inside an IIFE
(function (window) {
  // Creating the 'byeSpeaker' object
  var byeSpeaker = {};

  // Private variable for the farewell
  var speakWord = "Good Bye";

  // Attaching the 'speak' function to the 'byeSpeaker' object
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Exposing the 'byeSpeaker' object to the global scope
  window.byeSpeaker = byeSpeaker;
})(window);

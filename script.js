// Wrapping everything inside an IIFE
(function () {
  // List of names
  var names = [
    "Yaakov", "John", "Jen", "Jason", "Paul", 
    "Frank", "Larry", "Paula", "Laura", "Jim"
  ];

  // Loop through the names array
  for (var i = 0; i < names.length; i++) {
    // Retrieve the first letter of the current name
    var firstLetter = names[i].charAt(0).toLowerCase();

    // Compare the first letter to 'j'
    if (firstLetter === "j") {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();

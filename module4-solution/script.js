(function () {
    // *******************************
    // START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
    // *******************************
    
    // Module 4 Assignment Instructions.
    
    /*
    Hello Yaakov
    Good Bye John
    Good Bye Jen
    Good Bye Jason
    Hello Paul
    Hello Frank
    Hello Larry
    Hello Paula
    Hello Laura
    Good Bye Jim
    */
  
    // STEP 1:
    // Wrap the entire contents of script.js inside of an IIFE
    // See Lecture 52, part 2
    // (Note, Step 1 is already done for you.)
  
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
    // STEP 2:
    // Loop over the names array and say either 'Hello' or "Good Bye"
    // using either the helloSpeaker's or byeSpeaker's 'speak' method.
    // See Lecture 50, part 1
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
  
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
  
  })();


    function saySomething(whatToSay) {
    alert(whatToSay);
    };

    var origsentence = prompt("Enter a sentence: ");
    saySomething(origsentence);

    console.log(origsentence);


    var firstchar = origsentence.charAt(0);

    var lastchar = origsentence.charAt(origsentence.length-1);
    
   var upperfirst = firstchar.toUpperCase();
   var upperlast = lastchar.toUpperCase();
   var middle = origsentence.substring(1, origsentence.length-1);

    saySomething(upperfirst);
    saySomething(middle);

    var flipped = upperlast + middle + upperfirst;
    saySomething(flipped)

    var result = ("The cipher is " + result1 + ".");
    saySomething(result);




   
jQuery(document).ready(function() {
    $("h1").click(function() {
        alert("heaaaaderrrrrr");
    });
    
    $("p").click(function() {
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
        
            var flipped = upperlast + upperfirst;
            saySomething(flipped)
        
         
        
            var sentenceflip = origsentence + flipped;
            saySomething(sentenceflip);
        
            var length = origsentence.length;
            saySomething(length);
        
            lengthcharloc = parseInt(length) / 2;
            saySomething (lengthcharloc);
        
        
            var result = origsentence.charAt(lengthcharloc) + sentenceflip;
            saySomething(result);
        
            var bonus = result.split("").reverse().join("");
            saySomething(bonus);
        
        

    });
});


 $(function(){

        $("#typed").typed({
            stringsElement: $('#typed-strings'),
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html', 
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });

        $(".reset").click(function(){
            $("#typed").typed('reset');
        });

    });

    function newTyped(){ /* A new typed object */ }

    function foo(){ console.log("Callback"); }

var statements = ["It’s freezing and snowing<br> in New York we need global<br> warming!",
                "I'm undaunted in my quest to <br>amuse myself by constantly<br> changing my hair",
                 "An ‘extremely credible source’<br> has called my office and told me that<br> Barack Obama’s birth certificate is a fraud",
                 "We're going to take things <br>away from you on behalf<br> of the common good",
                 "Robert Pattinson should not take back <br> Kristen Stewart. She cheated on him like a <br>dog & will do it again just watch. <br>He can do much better!",
                 "Who is going to find out?<br>These women are trash.<br>Nobody’s going to believe them",
                 "Ariana Huffington is<br>unattractive, both inside and <br>out. I fully understand why her<br>former husband left her for a<br> man – he made a good decision.", 
                 "God bless the America<br>we are trying to create.",
                 "You know, it really doesn’t <br>matter what the media write <br>as long as you’ve got a young, <br>and beautiful, <br>piece of ass.", 
                 "I have said that I'm not running and I'm having a great time being pres --being a first-term senator.",
                 "When Mexico sends its people,<br> they’re not sending the best.<br> They’re bringing drugs.<br> They’re bring crime. <br>They’re rapists… <br>And some, I assume,<br> are good people"]
var answers = ["trump","hillary",
              "trump","hillary",
              "trump","hillary",
              "trump","hillary",
              "trump","hillary"];
              
var randomStatement = Math.floor(Math.random()*statements.length);

$('p').html(statements[randomStatement]);


$(".buzzer").click(function() {
  if (answers[randomStatement] == "trump") {
   
    $("body").css("background-color","red");
    
    randomStatement = Math.floor(Math.random()*statements.length);

    $("#typed").typed('reset');
    $('p').html(statements[randomStatement]);
     
     
     $("#typed").typed({
            stringsElement: $('#typed-strings'),
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html', 
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });
     
     
  }
  
  else {
      
      $("body").css("background-color", "blue");
      
      randomStatement = Math.floor(Math.random()*statements.length);
        $("#typed").typed('reset');
        $('p').html(statements[randomStatement]);
        
        
        $("#typed").typed({
            stringsElement: $('#typed-strings'),
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html', 
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });
  }
})


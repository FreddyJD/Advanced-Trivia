// Psudo code.
// Array with the amount of pages (pages ID)
// Timer with 30 seconds. 
// Create a HTML with each page
// Rotate every 30 seconds
// Display last how many rights and how much wrong answare you got! 
// TRUE = TRUE FIRST BUTTON || FALSE = SECOND BUTTON ES TRUE 
var qA = {
    obj: [{
        q: "What is the first console log?",
        r: "<u>Remeber</u>: The console.log is a common object/method provided by debuggers (including the Chrome debugger and Firebug) that allows a script to log data (or objects in most cases) to the JavaScript console.</p>",
        op1: "console.log(''true'');",
        op2: "console.log(i);",
        a: true
    }, {
        q: "What is the last number in this loop?",
        r: "<u>Remeber</u>: Loops are handy, if you want to run the same code over and over again, each time with a different value.</p>",
        op1: "This loop will console.log the number 77",
        op2: "This loop wont register in the console the number 77",
        a: false
    }, {
        q: "How many times it will console log ''true''?",
        r: "<u>Remeber</u>: An array is an object the contains elements of similar data type. It is a data structure where we store similar elements.</p>",
        op1: "This will give an error because its a boolean ",
        op2: "This will log 11 times ''true'' ",
        a: false
    }, {
        q: "Will this code log all the numbers between 0 - 76? ",
        r: "<u>Remeber</u>: an activity or purpose natural to or intended for a person or thing.</p>",
        op1: "Yes! it will log 0 - 76 and a few ''true'''s log ",
        op2: "It will skip a few lines",
        a: false
    }]
  };

var arrLength = qA.obj.length
var sTime = 60;
var wrong = 0;
var correct = 0;
var qID = 0;
var noInput = 0;

var interFun = setInterval(eTime, 1000);

function eTime() {
    if (sTime === 0) { 
        reTime();
        qDisplay();
        noInput++
    } else if (qID === arrLength){
        results();
    } else { 
        $("#time").html(sTime--);
    }
}
eTime();

function confirmAnsware() { 
    $("#b1").click(function() { 
        if (qA.obj[qID].a === true) { 
            console.log("You got it right!")
            correct++
            reTime();
            qDisplay();
        } else if (qA.obj[qID].a === false) { 
            console.log("You got it wrong!")
            wrong++
            reTime();
            qDisplay();
        }
    })
    $("#b2").click(function() { 
        if (qA.obj[qID].a === false) { 
            console.log("You got it right!")
            console.log(correct);
            correct++
            reTime();
            qDisplay();
        } else if (qA.obj[qID].a === true) { 
            console.log("You got it wrong!")
            console.log(wrong);
            wrong++
            reTime();
            qDisplay();
        }
    })
};

confirmAnsware();

function reTime() { 
    sTime = 60;
    qID++
}

function qDisplay() { 
    $(".question-title").html(qA.obj[qID].q);
    $(".question-fun-fact").html(qA.obj[qID].r);
    $("#op1").html(qA.obj[qID].op1);
    $("#op2").html(qA.obj[qID].op2);
 }

 function results() {
    $(".question-title").html("Results");
    $(".question-fun-fact").html("You got right: " + correct + "<br>" + "You got wrong: " + wrong);
    if (noInput !== 0) { 
        $("#op1").html("You didn't answer: " + noInput + " questions");
    } else {
        $("#hideR2").hide();
    }
    $("#hideR").hide();
    $("code").hide();
    $("#h").hide();
    $("#hr").hide();
    $("#b1").hide();
    $("#b2").hide();
    $("#time").hide();
    $("#hu").hide();
 }
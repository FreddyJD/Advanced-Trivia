// Psudo code.
// Array with the amount of pages (pages ID)
// Timer with 30 seconds. 
// Create a HTML with each page
// Rotate every 30 seconds
// Display last how many rights and how much wrong answare you got! 
// TRUE = TRUE FIRST BUTTON || FALSE = SECOND BUTTON ES TRUE 

var qA = {
    obj: [{
        q: "What this code run ?",
        r: "<u>Remeber</u>: An array is an object the contains elements of similar data type. It is a data structure where we store similar elements.</p>",
        op1: "No no no - god no",
        op2: "Yeisaud 198",
        a: true
    }, {
        q: "This function will run?",
        r: "<u>Remeber</u>: an activity or purpose natural to or intended for a person or thing.</p>",
        op1: "234No no no - god no",
        op2: "Yei59*saud 198",
        a: true
    }, {
        q: "Brogrammer exist ?",
        r: "<u>Remeber</u>: An array is an object the contains elements of similar data type. It is a data structure where we store similar elements.</p>",
        op1: "OIOi2oNo no no - god no",
        op2: "+36+09asd 8Yeisaud 198",
        a: true
    }, {
        q: "Water and microwave?",
        r: "<u>Remeber</u>: an activity or purpose natural to or intended for a person or thing.</p>",
        op1: "N817o no no - god no",
        op2: "YASdeisaud 198",
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
 }
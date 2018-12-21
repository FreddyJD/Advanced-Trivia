// Psudo code.
// Array with the amount of pages (pages ID)
// Timer with 30 seconds. 
// Create a HTML with each page
// Rotate every 30 seconds
// Display last how many rights and how much wrong answare you got! 

var qA = {
    c1: "1",
    c2: "2",
    c3: "3",
    c4: "4",
}

var wrong = 0;
var correct = 0;

var secCounter = setTimeout(function() { 
    
})

var time = setTimeout(function() { 
    // something will happen here soon! - fred ;)
    console.log("30 seconds! Times up! "); 
}, 30 * 1000); 

function qDis() { 
    $("#").html("");

    if (qA[0] === "1") { 
        correct++
    } else { 
        wrong++
    }
};


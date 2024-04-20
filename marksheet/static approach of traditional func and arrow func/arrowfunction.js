console.log("Student Marksheet");
var MarkSheet = function () {
    var Engmarks = 45;
    var Urdumarks = 33;
    var Mathsmarks = 29;
    var sum = Engmarks + Urdumarks + Mathsmarks;
    var total = 300;
    var percentage = (sum / total) * 100;
    if (percentage >= 90 && percentage <= 100) {
        console.log("You Get A+ Grade");
    }
    else if (percentage >= 80 && percentage <= 90) {
        console.log("You Get A Grade");
    }
    else if (percentage >= 70 && percentage <= 80) {
        console.log("You Get B Grade");
    }
    else if (percentage >= 60 && percentage <= 70) {
        console.log("You Get C Grade");
    }
    else if (percentage >= 50 && percentage <= 60) {
        console.log("You Get D Grade");
    }
    else {
        console.log("You Are Failed");
    }
};
MarkSheet(); //invoke function

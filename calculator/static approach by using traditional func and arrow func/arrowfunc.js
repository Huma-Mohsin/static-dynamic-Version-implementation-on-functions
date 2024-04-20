console.log("Calculator");
var CalculatorByAf = function () {
    var value1 = 483;
    var value2 = 405;
    var operator = "*";
    if (operator == "+") {
        console.log("Result :", value1 + value2);
    }
    else if (operator == "-") {
        console.log("Result :", value1 - value2);
    }
    else if (operator == "*") {
        console.log("Result :", value1 * value2);
    }
    else if (operator == "/") {
        console.log("Result :", value1 / value2);
    }
    else if (operator == "%") {
        console.log("Result :", value1 % value2);
    }
    else {
        console.log("Invalid Data, check number or Operator");
    }
};
CalculatorByAf();

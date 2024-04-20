console.log("Calculator");
function CalculatorByTf() {
    var value1 = 23;
    var value2 = 45;
    var operator = "+";
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
}
CalculatorByTf();

console.log("Calculator");
var CalculatorByAf = function (value1, value2, operator) {
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
CalculatorByAf(85, 89, "+");
CalculatorByAf(85, 89, "-");
CalculatorByAf(85, 89, "*");
CalculatorByAf(85, 89, "/");
CalculatorByAf(85, 89, "%");
CalculatorByAf(85, 89, "?");

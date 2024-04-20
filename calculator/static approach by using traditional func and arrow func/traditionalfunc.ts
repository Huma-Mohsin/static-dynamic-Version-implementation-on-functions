console.log("Calculator");
function CalculatorByTf(){
let value1:number=23;
let value2:number=45;
let operator:string="+"
if(operator=="+"){
    console.log("Result :" , value1+value2);
    
}
else if(operator=="-"){
    console.log("Result :" , value1-value2);
    
}
else if(operator=="*"){
    console.log("Result :" , value1*value2);
    
}
else if(operator=="/"){
    console.log("Result :" , value1/value2);
    
}
else if(operator=="%"){
    console.log("Result :" , value1%value2);
    
}
else {
    console.log("Invalid Data, check number or Operator");
    
}
}
CalculatorByTf();

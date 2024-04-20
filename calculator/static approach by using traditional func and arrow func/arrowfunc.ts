console.log("Calculator");
let CalculatorByAf=()=>{
let value1:number=483;
let value2:number=405;
let operator:string="*"
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
CalculatorByAf();

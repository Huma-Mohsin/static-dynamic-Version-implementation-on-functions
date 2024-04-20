console.log("Calculator");
function CalculatorByTf(value1:number,value2:number,operator:string){

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
CalculatorByTf(45,67,"+");
CalculatorByTf(45,67,"-");
CalculatorByTf(45,67,"*");
CalculatorByTf(45,67,"/");
CalculatorByTf(45,67,"%");
CalculatorByTf(45,67,"?")


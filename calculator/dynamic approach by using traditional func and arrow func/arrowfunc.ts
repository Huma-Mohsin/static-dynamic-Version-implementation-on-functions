console.log("Calculator");
let CalculatorByAf=(value1:number,value2:number,operator:string)=>{

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
CalculatorByAf(85,89,"+");
CalculatorByAf(85,89,"-");
CalculatorByAf(85,89,"*");
CalculatorByAf(85,89,"/");
CalculatorByAf(85,89,"%");
CalculatorByAf(85,89,"?")


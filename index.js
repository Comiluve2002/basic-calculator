    let firstNumber,secondNumber;
firstNumber=parseFloat(prompt("Enter first number"));
secondNumber=parseFloat(prompt("Enter second number"));
let operator= prompt("Enter operation from the list + * / -");
let result= 0;
  if  (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert("wrong input please refresh page")
  }else{
    if(operator== '+'){
       result=firstNumber + secondNumber; 
       alert("The sum of two numbers is "+ result);
    }
   else if(operator== '*'){
       result=firstNumber * secondNumber; 
       alert("The product of two numbers is "+ result);
    }
    else if(operator== '/'){
        result=firstNumber / secondNumber; 
        alert("The quotient of two numbers is "+ result);
    }
    else if(operator== '-'){
        result=firstNumber - secondNumber; 
        alert("The difference of two numbers is "+ result);
    }
   
    }

   


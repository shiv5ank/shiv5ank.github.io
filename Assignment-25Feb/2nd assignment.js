var num1 = prompt("Enter number 1");
var num2 = prompt("Enter number 2");
var num3 = prompt("Enter number 3");
    if(num1 > num2 && num1 > num3)
    {
        console.log("Number1 is greater than Number2 & Number3");
    }
    else if(num2 > num1 && num2 > num3)
    {
        console.log("Number2 is greater than Number1 & Number3");
    }
    else
    {
        console.log("Number3 is greater");
    }
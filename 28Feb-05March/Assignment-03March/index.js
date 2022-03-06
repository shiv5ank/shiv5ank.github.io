function swap_fun(){
    var num1=document.getElementById("first_number");
    var num2=document.getElementById("second_number");

    var a=parseInt(num1.value);
    var b=parseInt(num2.value);

    a=a+b;
    b=a-b;
    a=a-b ;

    var output=document.getElementById("op_text");
    output.innerText= "swapped value of a=" + a,"<br>" ;

    output2=document.getElementById("op_text2");
    output2.innerText="swapped value of b=" + b ,"<br>";
}
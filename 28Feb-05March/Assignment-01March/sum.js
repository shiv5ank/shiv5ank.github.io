function result() 
{
    var input_field1 = parseInt(document.getElementById("ip_text1").value);
    var input_field2 = parseInt(document.getElementById("ip_text2").value);
    
    document.getElementById("result").innerHTML=input_field1+input_field2;
}
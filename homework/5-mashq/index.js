var num=Number(prompt("son kiriting:"));
if (num%3==0 && num%5==0) {
    alert("FIZZBuzz");
}
else if (num%3==0) {
    alert("FIZZ");
} 
else if (num%5==0) {
    alert("Buzz");
}
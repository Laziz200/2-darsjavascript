alert("uch xonali son kiriting:");
var num=Number(prompt("son:"));
if (num>99 && num<1000) {
    var oxirgi=num%10;
    if (oxirgi%2==0) {
        alert("juft")
    }
    else{
        alert("toq");
    }
}
else{
    alert("siz uch xonali son kiritmadingzi!!");
}
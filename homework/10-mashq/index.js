var num1=Number(prompt("1-sonni kiriting:"));
var num2=Number(prompt("2-sonni kiriting:"));
var num3=Number(prompt("3-sonni kiriting:"));
var musbat=0;
var manfiy=0;
if (num1>0) {
    musbat+=1;
}
if (num1<0) {
    manfiy+=1;
}
if (num2>0) {
    musbat+=1;
}
if (num2<0) {
    manfiy+=1;
}
if (num3>0) {
    musbat+=1;
}
if (num3<0) {
    manfiy+=1;
}
alert(`musbat sonlar:${musbat} manfiy sonlar:${manfiy}`);
var sum=Number(prompt("chet elda dam olish uchun qancha pulingiz bor?"));
alert("Borish kelish samalyot bileti-$500");
alert("Mehmonxona tolovi(toliq safar davomiyligi uchun)-$250");
alert("Muzey va kongilochar joylar uchun-120 yevro");
let cnfm=confirm("somga otkazib hisoblab berilsinmi?");
if (cnfm==true) {
    var hisob=500*12600.61;
    var hisob1=250*12600.61;
    var hisob2=120*14247.79;
    var result=hisob+hisob1+hisob2;
    alert(`Borish kelish samalyot bileti-${hisob} so'm`);
    alert(`Mehmonxona tolovi(toliq safar davomiyligi uchun)-${hisob1} so'm`);
    alert(`Muzey va kongilochar joylar uchun-${hisob2} so'm`);
    alert(`${hisob}+${hisob1}+${hisob2}=${result} jami somma`);
    if (sum>=result) {
        alert("Oq yol, Alisher!");
    }
    else{
        alert("Alisher, ozgina sabr qilish kerak bolar ekan");
    }
}

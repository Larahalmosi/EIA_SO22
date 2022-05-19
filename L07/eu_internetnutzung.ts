function interdtl(){

    var Prozent1:number=93
console.log("Die Internetnutzung in Deutschland beträgt im Jahr 2022:"+Prozent1 +"%") ;

document.querySelector(".internetnutzungsland").innerHTML="Beträgt die Internetnutzung im Jahr 2022"
document.getElementById("pro-land").innerHTML= Prozent1;


var Dtl2022: number=93;
var EU2022: number=88;

let Prozent2=(Dtl2022-EU2022)-1

console.log("Relativ zur Gesamtzahl der Internetnutzer in der EU ist die Internetnutzung in Deutschland im Jahr 2022:"+ Prozent2+ " %") ;
document.querySelector("gesamt").innerHTML="Relativ zur Gesamtzahl der Internetnutzer in der EU"
document.getElementById("landzueu").innerHTML=Prozent2;



var Dtl2022: number=93;
var Dtl2010: number=74;

let Prozent3=(Dtl2022-Dtl2010)-1;

console.log("Für Deutschland hat sich die Internetnutzung im Jahr 2022 im Vergleich zu 2010 um " +Prozent3+" % verändert.") ;
document.querySelector("unterschiedjahr").innerHTML="Veränderung der Internetnutzung für Deutschland im Jahr 2022 im Vergleich zu 2010 "
document.getElementById("veraenderungland2010").innerHTML=Prozent3;
}


function interfr(){

var Prozent4: number= 91;  

console.log("Die Internetnutzung in Frankreich beträgt im Jahr 2022:"+Prozent4 +"%") ;
document.querySelector(".internetnutzungsland").innerHTML="Beträgt die Internetnutzung im Jahr 2022"
document.getElementById("pro-land").innerHTML=Prozent4;


var F2022: number=91;
var EU2022: number=88;

let Prozent5=(F2022-EU2022)-1;

console.log("Relativ zur Gesamtzahl der Internetnutzer in der EU ist die Internetnutzung in Frankreich im Jahr 2022:"+ Prozent5+ " %") ;
document.querySelector(".internetnutzungsland").innerHTML="Relativ zur Gesamtzahl der Internetnutzer in der EU"
document.getElementById("landzueu").innerHTML=Prozent5;



var F2022: number=91;
var F2010: number=75;

let Prozent6=(F2022-F2010)-1;

console.log("Für Frankreich hat sich die Internetnutzung im Jahr 2022 im Vergleich zu 2010 um " +Prozent6+" % verändert.") ;
document.querySelector("unterschiedjahr").innerHTML="Veränderung der Internetnutzung für Frankreich im Jahr 2022 im Vergleich zu 2010 "
document.getElementById("veraenderungland2010").innerHTML=Prozent6;
}


function interit(){
var Prozent7: number = 84;  

console.log("Die Internetnutzung in Italien beträgt im Jahr 2022:"+ Prozent7+ " %") ;
document.querySelector(".internetnutzungsland").innerHTML="Beträgt die Internetnutzung im Jahr 2022"
document.getElementById("pro-land").innerHTML=Prozent7;




var I2022: number=84;
var EU2022: number=88;

let Prozent8=(I2022-EU2022)-1;

console.log("Relativ zur Gesamtzahl der Internetnutzer in der EU ist die Internetnutzung in Italien im Jahr 2022:" +Prozent8+" % verändert.") ;
document.querySelector(".internetnutzungsland").innerHTML="Relativ zur Gesamtzahl der Internetnutzer in der EU"
document.getElementById("landzueu").innerHTML=Prozent8;



var I2022: number=84;
var I2010: number=48;

let Prozent9=(I2022-I2010)-1;

console.log("Für Italien hat sich die Internetnutzung im Jahr 2022 im Vergleich zu 2010 um "+ Prozent9+ " %") ;
document.querySelector("unterschiedjahr").innerHTML="Veränderung der Internetnutzung für Italien im Jahr 2022 im Vergleich zu 2010 "
document.getElementById("veraenderungland2010").innerHTML=Prozent9;
}

function interrum(){
var Prozent10: number = 81; 

console.log("Die Internetnutzung in Rumänien beträgt im Jahr 2022:"+ Prozent10+ " %") ;
document.querySelector(".internetnutzungsland").innerHTML="Beträgt die Internetnutzung im Jahr 2022"
document.getElementById("pro-land").innerHTML=Prozent10;

var R2022: number=81;
var EU2022: number=88;

let Prozent11=(R2022-EU2022)-1;

console.log("Relativ zur Gesamtzahl der Internetnutzer in der EU ist die Internetnutzung in Rumänien im Jahr 2022:"+Prozent11+" % verändert.") ;
document.querySelector(".internetnutzungsland").innerHTML="Relativ zur Gesamtzahl der Internetnutzer in der EU"
document.getElementById("landzueu").innerHTML=Prozent11;

var R2022: number=81;
var R2010: number=34;

let Prozent12=(R2022-R2010)-1;

console.log("Für Rumänien hat sich die Internetnutzung im Jahr 2022 im Vergleich zu 2010 um "+ Prozent12+ " %") ;
document.querySelector("unterschiedjahr").innerHTML="Veränderung der Internetnutzung für Rumänien im Jahr 2022 im Vergleich zu 2010 "
document.getElementById("veraenderungland2010").innerHTML=Prozent12;
}


function eustars (){
    console.log (88);

    var EU2022: number=88

document.querySelector(".internetnutzungsland").innerHTML="Die Internetnutzung in Europa beträgt im Jahr 2022:"+EU2022 +"%"
document.querySelector(".stars").innerHTML=eustars;
}

window.addEventListener("load",function(){
     document.querySelector(".germany").addEventListener("click",interdtl);
     document.querySelector(".france").addEventListener("click",interfr);
     document.querySelector(".italy").addEventListener("click",interit);
     document.querySelector(".romania").addEventListener("click",interrum);
     document.querySelector(".stars").addEventListener("click",eustars);
});
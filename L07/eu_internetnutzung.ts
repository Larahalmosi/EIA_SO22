function interdtl(Internetnutzung:number){
    var Prozent1:number=93
console.log("Die Internetnutzung in Deutschland beträgt im Jahr 2022:"+Prozent1 +"%") ;

document.querySelector(".internetnutzungsland").innerHTML="Die Internetnutzung in Deutschland beträgt im Jahr 2022:"+Prozent1 +"%"
document.getElementById("Internetnutzung:number").innerHTML=interdtl;
}

function interdtlzueu(Internetnutzung:number){

var Dtl2022: number=93;
var EU2022: number=88;

let Prozent2=(Dtl2022-EU2022)-1

console.log("Relativ zur Gesamtzahl der Internetnutzer in der EU ist die Internetnutzung in Deutschland im Jahr 2022:"+ Prozent2+ " %") ;
document.querySelector(".internetnutzungsland").innerHTML="Relativ zur Gesamtzahl der Internetnutzer in der EU ist die Internetnutzung in Deutschland im Jahr 2022:"+Prozent2 +"%"
document.getElementById("Internetnutzung:number").innerHTML=interdtlzueu;
}}


function interdtlvergleich2010(Internetnutzung:number){

var Dtl2022: number=93;
var Dtl2010: number=74;

let Prozent3=(Dtl2022-Dtl2010)-1;

console.log("Für Deutschland hat sich die Internetnutzung im Jahr 2022 im Vergleich zu 2010 um " +Prozent3+" % verändert.") ;
document.querySelector(".internetnutzungsland").innerHTML="Für Deutschland hat sich die Internetnutzung im Jahr 2022 im Vergleich zu 2010 um:"+Prozent3 +"% verändert."
document.getElementById("Internetnutzung:number").innerHTML=interdtlvergleich2010;
}


function interfr(Internetnutzung:number){

var Prozent4: number= 91;  

console.log("Die Internetnutzung in Frankreich beträgt im Jahr 2022:"+Prozent4 +"%") ;
document.querySelector(".internetnutzungsland").innerHTML="Die Internetnutzung in Frankreich beträgt im Jahr 2022:"+Prozent4 +"%"
document.getElementById("Internetnutzung:number").innerHTML=interfr;
}


function interfrzueu(Internetnutzung:number){

var F2022: number=91;
var EU2022: number=88;

let Prozent5=(F2022-EU2022)-1;

console.log("Relativ zur Gesamtzahl der Internetnutzer in der EU ist die Internetnutzung in Frankreich im Jahr 2022:"+ Prozent5+ " %") ;
document.querySelector(".internetnutzungsland").innerHTML="Relativ zur Gesamtzahl der Internetnutzer in der EU ist die Internetnutzung in Frankreich im Jahr 2022:"+Prozent5 +"%"
document.getElementById("Internetnutzung:number").innerHTML=interdtl;
}


function interfrvergleich2010(Internetnutzung:number){
var F2022: number=91;
var F2010: number=75;

let Prozent6=(F2022-F2010)-1;

console.log("Für Frankreich hat sich die Internetnutzung im Jahr 2022 im Vergleich zu 2010 um " +Prozent6+" % verändert.") ;
document.querySelector(".internetnutzungsland").innerHTML="Für Frankreich hat sich die Internetnutzung im Jahr 2022 im Vergleich zu 2010 um:"+Prozent6 +"% verändert."
document.getElementById("Internetnutzung:number").innerHTML=interfrvergleich2010;
}


function interit(Internetnutzung:number){
var Prozent7: number = 84;  

console.log("Die Internetnutzung in Italien beträgt im Jahr 2022:"+ Prozent7+ " %") ;
document.querySelector(".internetnutzungsland").innerHTML="Die Internetnutzung in Italien beträgt im Jahr 2022:"+Prozent7 +"%"
document.getElementById("Internetnutzung:number").innerHTML=interit;
}


function interitzueu(Internetnutzung:number){
var I2022: number=84;
var EU2022: number=88;

let Prozent8=(I2022-EU2022)-1;

console.log("Relativ zur Gesamtzahl der Internetnutzer in der EU ist die Internetnutzung in Italien im Jahr 2022:" +Prozent8+" % verändert.") ;
document.querySelector(".internetnutzungsland").innerHTML="Relativ zur Gesamtzahl der Internetnutzer in der EU ist die Internetnutzung in Italien im Jahr 2022:"+Prozent8 +"%"
document.getElementById("Internetnutzung:number").innerHTML=interitzueu;
}


function interitvergleich2010(Internetnutzung:number){
var I2022: number=84;
var I2010: number=48;

let Prozent9=(I2022-I2010)-1;

console.log("Für Italien hat sich die Internetnutzung im Jahr 2022 im Vergleich zu 2010 um "+ Prozent9+ " %") ;
document.querySelector(".internetnutzungsland").innerHTML="Für Italien hat sich die Internetnutzung im Jahr 2022 im Vergleich zu 2010 um:"+Prozent9 +"% verändert."
document.getElementById("Internetnutzung:number").innerHTML=interitvergleich2010;
}

function interrum(Internetnutzung:number){
var Prozent10: number = 81; 

console.log("Die Internetnutzung in Rumänien beträgt im Jahr 2022:"+ Prozent10+ " %") ;
document.querySelector(".internetnutzungsland").innerHTML="Die Internetnutzung in Rumänien beträgt im Jahr 2022:"+Prozent1 +"%"
document.getElementById("Internetnutzung:number").innerHTML=interrum;
}

function interrumzueu(Internetnutzung:number){
var R2022: number=81;
var EU2022: number=88;

let Prozent11=(R2022-EU2022)-1;

console.log("Relativ zur Gesamtzahl der Internetnutzer in der EU ist die Internetnutzung in Rumänien im Jahr 2022:"+Prozent11+" % verändert.") ;
document.querySelector(".internetnutzungsland").innerHTML="Relativ zur Gesamtzahl der Internetnutzer in der EU ist die Internetnutzung in Frankreich im Jahr 2022:"+Prozent11 +"%"
document.getElementById("Internetnutzung:number").innerHTML=interrumzueu;
}


function interrumvergleich2010(Internetnutzung:number){
var R2022: number=81;
var R2010: number=34;

let Prozent12=(R2022-R2010)-1;

console.log("Für Rumänien hat sich die Internetnutzung im Jahr 2022 im Vergleich zu 2010 um "+ Prozent12+ " %") ;
document.querySelector(".internetnutzungsland").innerHTML="Für Rumänien hat sich die Internetnutzung im Jahr 2022 im Vergleich zu 2010 um:"+Prozent12 +"% verändert."
document.getElementById("Internetnutzung:number").innerHTML=interrumvergleich2010;
}


function eustars (88){
    console.log (88);


document.querySelector(".internetnutzungsland").innerHTML="Die Internetnutzung in Deutschland beträgt im Jahr 2022:"+Prozent1 +"%"
document.getElementById("Internetnutzung:number").innerHTML=eustars;
}

window.addEventListener("load",function(){
     document.querySelector(".germany").addEventListener("click",interdtl);
     document.querySelector(".germany").addEventListener("click",interdtlzueu);
     document.querySelector(".germany").addEventListener("click",interdtlvergleich2010);
     document.querySelector(".france").addEventListener("click",interfr);
     document.querySelector(".france").addEventListener("click",interfrzueu);
     document.querySelector(".france").addEventListener("click",interfrvergleich2010);
     document.querySelector(".france").addEventListener("click",interit);
     document.querySelector(".france").addEventListener("click",interitzueu);
     document.querySelector(".france").addEventListener("click",interitvergleich2010);
     document.querySelector(".france").addEventListener("click",interrum);
     document.querySelector(".france").addEventListener("click",interrumzueu);
     document.querySelector(".france").addEventListener("click",interrumvergleich2010);
     document.querySelector(".stars").addEventListener("click",eustars);
});



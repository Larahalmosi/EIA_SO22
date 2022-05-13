function interdtl(Internetnutzung:number){
    var Prozent1:number=93
console.log("Die Internetnutzung in Deutschland beträgt im Jahr 2022:"+Prozent1 +"%") ;
}
window.addEventListener("load",function(){
    document.querySelector(".germany")addEventListener("click",interdtl)
    });

function interdtlzueu(Internetnutzung:number){
var Dtl2022: number=93;
var EU2022: number=88;

let Prozent2=(Dtl2022-EU2022)-1

console.log("Relativ zur Gesamtzahl der Internetnutzer in der EU ist die Internetnutzung in Deutschland im Jahr 2022:"+ Prozent2+ " %") ;
}

window.addEventListener("load",function(){
    document.querySelector(".germany")addEventListener("click",interdtlzueu)
    });

function interdtlvergleich2010(Internetnutzung:number){

var Dtl2022: number=93;
var Dtl2010: number=74;

let Prozent3=(Dtl2022-Dtl2010)-1;

console.log("Für Deutschland hat sich die Internetnutzung im Jahr 2022 im Vergleich zu 2010 um " +Prozent3+" % verändert.") ;
}
window.addEventListener("load",function(){
    document.querySelector(".germany")addEventListener("click",interdtlvergleich2010)
    });

function interfr(Internetnutzung:number){

var Prozent4: number= 91;  

console.log("Die Internetnutzung in Frankreich beträgt im Jahr 2022:"+Prozent4 +"%") ;
}

window.addEventListener("load",function(){
    document.querySelector(".france")addEventListener("click",interfr)
    });
function interfrzueu(Internetnutzung:number){

var F2022: number=91;
var EU2022: number=88;

let Prozent5=(F2022-EU2022)-1;

console.log("Relativ zur Gesamtzahl der Internetnutzer in der EU ist die Internetnutzung in Frankreich im Jahr 2022:"+ Prozent5+ " %") ;
}
window.addEventListener("load",function(){
    document.querySelector(".france")addEventListener("click",interfrzueu)
    });

function interfrvergleich2010(Internetnutzung:number){
var F2022: number=91;
var F2010: number=75;

let Prozent6=(F2022-F2010)-1;

console.log("Für Frankreich hat sich die Internetnutzung im Jahr 2022 im Vergleich zu 2010 um " +Prozent6+" % verändert.") ;
}
function interit(Internetnutzung:number){
var Prozent7: number = 84;  

console.log("Die Internetnutzung in Italien beträgt im Jahr 2022:"+ Prozent7+ " %") ;
}
function interitzueu(Internetnutzung:number){
var I2022: number=84;
var EU2022: number=88;

let Prozent8=(I2022-EU2022)-1;

console.log("Relativ zur Gesamtzahl der Internetnutzer in der EU ist die Internetnutzung in Italien im Jahr 2022:" +Prozent8+" % verändert.") ;
}
function interitvergleich2010(Internetnutzung:number){
var I2022: number=84;
var I2010: number=48;

let Prozent9=(I2022-I2010)-1;

console.log("Für Italien hat sich die Internetnutzung im Jahr 2022 im Vergleich zu 2010 um "+ Prozent9+ " %") ;
}

function interrum(Internetnutzung:number){
var Prozent10: number = 81; 

console.log("Die Internetnutzung in Rumänien beträgt im Jahr 2022:"+ Prozent10+ " %") ;
}
function interrumzueu(Internetnutzung:number){
var R2022: number=81;
var EU2022: number=88;

let Prozent11=(R2022-EU2022)-1;


console.log("Relativ zur Gesamtzahl der Internetnutzer in der EU ist die Internetnutzung in Rumänien im Jahr 2022:"+Prozent11+" % verändert.") ;
}
function interrumvergleich2010(Internetnutzung:number){
var R2022: number=81;
var R2010: number=34;

let Prozent12=(R2022-R2010)-1;

console.log("Für Rumänien hat sich die Internetnutzung im Jahr 2022 im Vergleich zu 2010 um "+ Prozent12+ " %") ;
}
function eustars (88){
    console.log (88);
} 
window.addEventListener("load",function(){
document.querySelector(".stars")addEventListener("click",eustars)
});
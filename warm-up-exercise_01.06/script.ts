interface Person {
    firstname: string;
    lastname: string;
    age: number;
    degree: string;
    favfood: string;
    favseries: string;
}   

var  person: Person [] = [  {
    firstname: "Larry",
    lastname: "Lobster",
    age: 22,
    degree: "MKB",
    favfood: "all vegan food",
    favseries: "evangelion neon genisis"   
},
{
    firstname: "Lexi",
    lastname: "Holstein",
    age: 23,
    degree: " MKB",
    favfood: "all food",
    favseries: "GoT"   
},
  {
    firstname: "Tea",
    lastname: "Schell",
    age: 20,
    degree: "OMB",
    favfood: "all food",
    favseries: "Ghibli und Marvel"   
}];


for (let index: number = 0; index < person.length; length++) {console.log(person[index].firstname)
    ; }

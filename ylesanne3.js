/*
Sõidu aeg ja kaugus
*/

// Muutujad
let soiduKaugus = 150; // kilomeetrites
let kiirus = 60; // kilomeetrites tunnis

// Arvutused
let soiduAeg = soiduKaugus / kiirus;

// Konsooli väljund
console.log(`Sõidu aeg ${soiduKaugus} km läbimiseks kiirusega ${kiirus} km/h on ${soiduAeg} tundi.`);


/*
Postituste kuvamine
*/

// Andmed
let postitusteArv = 137;
let postitusteLehtedeArv = Math.ceil(postitusteArv / 10);
let viimaseLehePostitusteArv = postitusteArv % 10;

// Konsooli väljund
console.log(`Postituste kuvamiseks on vaja ${postitusteLehtedeArv} lehekülge.`);
console.log(`Viimasel lehel on ${viimaseLehePostitusteArv} postitust.`);


/*
Serveri töökulu
*/

// Andmed
let serveriVõimsus = 400; // vattides
let elektriHind = 0.0969; // eurod/kWh

// Arvutused
let voolutarbimine = serveriVõimsus / 1000;
let töökulu = voolutarbimine * elektriHind;

// Konsooli väljund
console.log(`Serveri töökulu ühe tunni jooksul on ${töökulu.toFixed(2)} eurot.`);

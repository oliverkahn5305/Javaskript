/*
Oliver Kahn
Ylessanne2.js
06.12.2023
*/

// Kellaaeg
let tunnid = 2;
let minutid = 38;
let sekundid = 59;
let kellaaeg = `${tunnid}:${minutid}:${sekundid}PM`;
console.log("Kellaaeg:", kellaaeg);

// Tsitaat lause sees
let tsitaat = "Elu on nagu jalgrattasõit, et säilitada tasakaalu, pead liikuma.";
let autor = "Albert Einstein";
let täielikTsitaat = `${tsitaat} - ${autor}`;
console.log("Tsitaat:", täielikTsitaat);

// Mallide kasutamine
let eesnimi = "Jüri";
let perenimi = "Jurakas";
let nimetähed = `${eesnimi} ${perenimi} nimetähed on ${eesnimi[0]}.${perenimi[0]}.`;
console.log("Mallide kasutamine:", nimetähed);

// Perenime pikkus
let täisnimi = "Jurakas, Jüri";
let komaAsukoht = täisnimi.indexOf(",");
let eraldatudPerenimi = täisnimi.slice(0, komaAsukoht).toUpperCase();
console.log("Perenimi suurtähtedeks:", eraldatudPerenimi);
console.log("Perenime pikkus:", eraldatudPerenimi.length);

// E-posti aadressi muutmine
let epost = "karrolk@netlog.com";
let muudetudEpost = epost.replace("@netlog", "@gmail");
console.log("Muudetud e-posti aadress:", muudetudEpost);

// Andmerida analüüs
let andmerida = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175";
let andmeridaJupid = andmerida.split(",");
let ipAadress = andmeridaJupid[5];
let kasutajanimi = andmeridaJupid[3].split("@")[0];
console.log("IP-aadress:", ipAadress);
console.log("Kasutajanimi:", kasutajanimi);

// Temperatuur
let temperatuur = 22;

if (temperatuur > 25) {
    console.log("Väga kuum ilm!");
} else if (temperatuur >= 15 && temperatuur <= 25) {
    console.log("Mõnus temperatuur");
} else {
    console.log("Jahe ilm");
}

// Kasutajanime kontroll
let kasutajanimi = prompt("Sisestage kasutajanimi:");

if (kasutajanimi.toLowerCase() === "admin") {
    console.log("Tere, administraator!");
} else {
    console.log("Tere, külaline!");
}

// Ürituse piletite hind
let piletitüüp = "soodus"; // saa väärtus kasutajalt
let vanus = 25; // saa väärtus kasutajalt

let hind;

if (piletitüüp === "täispilet") {
    if (vanus < 18) {
        hind = 10;
    } else if (vanus >= 18 && vanus <= 64) {
        hind = 20;
    } else {
        hind = 15;
    }
} else if (piletitüüp === "sooduspilet") {
    if (vanus < 18 || vanus >= 65) {
        hind = 8;
    } else {
        hind = 15;
    }
} else {
    console.log("Vigane piletitüüp");
}

console.log(`Pileti hind on ${hind} eurot.`);

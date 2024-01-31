/*
leet nadalapaevad = ["Esmaspäev", "Teisipäev", Kolmapäev, Neljapäev, "Reede"];
*/

// Paranda massiiv ja kuva selle elemendid
let nadalapaevad = ["Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede"];
console.log(`Parandatud massiiv: ${nadalapaevad.join(", ")}`);

// Kuva massiivi suurus
console.log(`Massiivi suurus: ${nadalapaevad.length}`);

// Lisa lõppu koodi abiga Laupäev ja Pühapäev
nadalapaevad.push("Laupäev", "Pühapäev");
console.log(`Lisatud Laupäev ja Pühapäev: ${nadalapaevad.join(", ")}`);

// Sorteeri elemendid kahanevalt
nadalapaevad.sort((a, b) => b.localeCompare(a));
console.log(`Sorteeritud kahanevalt: ${nadalapaevad.join(", ")}`);

// Kuva viimane element
console.log(`Viimane element: ${nadalapaevad[nadalapaevad.length - 1]}`);


/*
let koodid = "444689936146563731 2452966188592191874 52634311978613959924676311 ...";
*/

// Tükelda sõne ja kuva mitu koodi saad
let koodid = "444689936146563731 2452966188592191874 52634311978613959924676311 ...";
let koodiMassiiv = koodid.split(" ");
console.log(`Saadud koodide arv: ${koodiMassiiv.length}`);

// Mitmes index on koodil 35482977
let otsitavKood = "35482977";
let mitmesIndex = koodiMassiiv.indexOf(otsitavKood);
console.log(`Koodi ${otsitavKood} indeks: ${mitmesIndex}`);

// Kuva saadud massiivist täpselt pooled elemendid
let poolMassiivist = koodiMassiiv.slice(0, koodiMassiiv.length / 2);
console.log(`Pool massiivist: ${poolMassiivist.join(", ")}`);


/*
Sul on sportlaste tulemused (nimi, vanus, tulemused) mitmemõõtmelises massiivis.
*/

let sportlased = [
    ["Alice", 25, [10.2, 9.8, 10.5]],
    ["Bob", 22, [9.5, 9.6, 9.7]],
    ["Charlie", 28, [11.1, 11.2, 11.5]]
];

// Kuva õpilase nimi ja parim tulemus (eraldi read; kasuta sorteerimist, et leida parem tulemus)
sportlased.forEach(sportlane => {
    let nimi = sportlane[0];
    let parimTulemus = Math.max(...sportlane[2]);
    console.log(`Sportlase ${nimi} parim tulemus on ${parimTulemus}.`);
});

// Ülesanne 1: Nimed
const nimed = ["mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas", "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas", "Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"];

// Nimede korrastamine
const korrasNimed = nimed.map(nimi => {
    const [eesnimi, perenimi] = nimi.split(" ");
    const korrasNimi = eesnimi.charAt(0).toUpperCase() + eesnimi.slice(1).toLowerCase() + " " + perenimi.toLowerCase();
    return korrasNimi;
});

// E-mailid perenimedest
const emailid = korrasNimed.map(nimi => {
    const [eesnimi, perenimi] = nimi.split(" ");
    const email = perenimi + "@metshein.com";
    return email;
});

// Funktsioon otsimiseks ja täisnimede kuvamiseks
function otsiNime(nimi) {
    const leitudNimed = korrasNimed.filter(n => n.toLowerCase().includes(nimi.toLowerCase()));
    if (leitudNimed.length > 0) {
        console.log("Leitud nimed:", leitudNimed.join(", "));
    } else {
        console.log("Nime ei leitud.");
    }
}

// Testime funktsiooni
otsiNime("mari");

// Ülesanne 2: Sünniaeg ja vanus
const inimesteAndmed = [
    { nimi: "Mari Maasikas", isikukood: "38705123568" },
    { nimi: "Jaan Jõesaar", isikukood: "49811234567" },
    { nimi: "Kristiina Kukk", isikukood: "39203029876" },
    { nimi: "Margus Mustikas", isikukood: "49807010346" },
    { nimi: "Jaak Järve", isikukood: "39504234985" },
    { nimi: "Kadi Kask", isikukood: "39811136789" },
    // Lisa kontrollimiseks oma nimi ja isikukood
];

// Lisa meetod sünniaja ja vanuse leidmiseks
inimesteAndmed.forEach(isik => {
    isik.sunniaegJaVanus = function () {
        const aasta = "19" + this.isikukood.substring(1, 3);
        const kuu = this.isikukood.substring(3, 5);
        const paev = this.isikukood.substring(5, 7);
        const sunniaeg = new Date(`${aasta}-${kuu}-${paev}`);
        const vanus = new Date().getFullYear() - sunniaeg.getFullYear();
        return { sunniaeg, vanus };
    };
});

// Kuvame sünniaja ja vanuse
inimesteAndmed.forEach(isik => {
    const { sunniaeg, vanus } = isik.sunniaegJaVanus();
    console.log(`${isik.nimi} - Sünniaeg: ${sunniaeg.toLocaleDateString()}, Vanus: ${vanus} aastat`);
});

// Ülesanne 3: Kaugushüpe
const opilased = [
    { nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
    { nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
    { nimi: "Kati", tulemused: [4.9, 5.0, 4.7] },
    { nimi: "Jaan", tulemused: [4.3, 4.6, 4.4] },
    { nimi: "Liis", tulemused: [5.0, 5.2, 5.1] },
    { nimi: "Peeter", tulemused: [5.5, 5.3, 5.4] },
    { nimi: "Eva", tulemused: [4.8, 4.9, 4.7] },
    { nimi: "Marten", tulemused: [4.7, 4.6, 4.8] },
    { nimi: "Kairi", tulemused: [5.1, 5.3, 5.0] },
    { nimi: "Rasmus", tulemused: [4.4, 4.5, 4.3] },
];

// Kuvame õpilaste nime, parima tulemuse ja keskmise tulemuse
opilased.forEach(opilane => {
    const parimTulemus = Math.max(...opilane.tulemused);
    const keskmineTulemus = (opilane.tulemused.reduce((sum, tulemus) => sum + tulemus, 0) / opilane.tulemused.length).toFixed(2);
    console.log(`${opilane.nimi} - Parim tulemus: ${parimTulemus} m, Keskmine tulemus: ${keskmineTulemus} m`);
});

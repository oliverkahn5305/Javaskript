// Kaks funktsiooni nime väljastamiseks
function klassikalineNimi() {
    console.log("Minu nimi on Oliver");
}

const noolefunktsioonNimi = () => {
    console.log("Minu nimi on Oliver");
};

// Funktsioon kuupäeva ja kuu kuvamiseks eesti keeles
function kuupaevEesti(kuupaev) {
    const kuud = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
    const [paev, kuu, aasta] = kuupaev.split(".");
    
    console.log(`Täna on ${paev}. ${kuud[Number(kuu) - 1]} ${aasta}. aastal.`);
}

// Funktsioon teadmata hulga arvude koguarvu ja keskmise leidmiseks
const teadmataHulk = (...arvud) => {
    const summa = arvud.reduce((acc, arv) => acc + arv, 0);
    const keskmine = summa / arvud.length;

    console.log(`Arvude kogusumma on ${summa} ja keskmine on ${keskmine}.`);
};

// Noolefunktsioon salajase sõnumi loomiseks
const salajaneSonum = (sonum) => {
    const salajaneVersioon = sonum.replace(/[aeiouAEIOU]/g, '*');
    console.log(`Salajane sõnum: ${salajaneVersioon}`);
};

// Noolefunktsioon unikaalsete nimede leidmiseks
const leiaUnikaalsedNimed = (nimed) => {
    const unikaalsedNimed = [...new Set(nimed)];
    console.log("Unikaalsed nimed:", unikaalsedNimed);
};

// Testimine
klassikalineNimi();
noolefunktsioonNimi();

kuupaevEesti("19.07.23");

teadmataHulk(5, 10, 15);
teadmataHulk(2, 4, 6, 8, 10);

salajaneSonum("Tere hommikust!");
leiaUnikaalsedNimed(["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"]);

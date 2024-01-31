// Toote objekt
const toode = {
    nimetus: "Kohv",
    hind: 5.80,
    kogus: 2,
    koguhind: function () {
        return this.hind * this.kogus;
    },
    muudaKogust: function (uusKogus) {
        this.kogus = uusKogus;
    },
    kuvamine: function () {
        console.log(`Toode: ${this.nimetus}, Hind: ${this.hind} EUR, Kogus: ${this.kogus}`);
    }
};

// Kuva objekti omadused konsoolis
console.log("Toote omadused:");
console.log("Nimetus:", toode.nimetus);
console.log("Hind:", toode.hind);
console.log("Kogus:", toode.kogus);

// Kuva meetodi tulemused konsoolis
console.log("\nMeetodi tulemused:");
console.log("Toote koguhind:", toode.koguhind());
toode.muudaKogust(3);
console.log("Uus kogus:", toode.kogus);
toode.kuvamine();

// Ostukorv objekt
const ostukorv = {
    tooted: [
        { nimi: 'Piim', hind: 3.60, kogus: 2 },
        { nimi: 'Leib', hind: 2.00, kogus: 1 },
        { nimi: 'Munad', hind: 1.50, kogus: 6 },
        { nimi: 'Juust', hind: 4.20, kogus: 1 },
        { nimi: 'Tomatid', hind: 2.30, kogus: 3 },
    ],
    koguSumma: function () {
        let summa = 0;
        for (const toode of this.tooted) {
            summa += toode.hind * toode.kogus;
        }
        return summa;
    },
    kuvamine: function () {
        console.log("\nOstukorvi sisu:");
        for (const toode of this.tooted) {
            console.log(`${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}`);
        }
    },
    lisaToode: function (nimi, hind, kogus) {
        this.tooted.push({ nimi, hind, kogus });
    }
};

// Kuva meetodi tulemused ostukorvis
ostukorv.kuvamine();
console.log('Ostukorvi kogu summa:', ostukorv.koguSumma());

// Lisa toode ostukorvi ja kuva tulemus
ostukorv.lisaToode('Kohv', 5.80, 2);
console.log('\nUus ostukorvi sisu pärast lisamist:');
ostukorv.kuvamine();
console.log('Ostukorvi kogu summa pärast lisamist:', ostukorv.koguSumma());

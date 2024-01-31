// Tooted
const products = ["Õunad", "Piim", "Leib", "Juust", "Tomatid", "Kanafilee", "Muna", "Sibul", "Apelsinid", "Riis", "Jogurt", "Kartul", "Kalafilee", "Pasta", "Jogurtijook", "Porgandid", "Virsikud", "Pähklid", "Rosinad", "Kapsas", "Kreeka jogurt", "Veiseliha", "Banaanid", "Oliivid", "Mandlid", "Magus kartul", "Greibid"];

// Kuvab kõik tooted ja lisab iga toote ette järjekorranumbri
for (let i = 0; i < products.length; i++) {
    console.log(`${i + 1}. ${products[i]}`);
}

// Toodete vahelejätmine
console.log("\n10 esimest toodet (vahelejätmisega):");
for (let i = 0; i < 10; i++) {
    if (products[i] === "Muna" || products[i] === "Sibul" || products[i] === "Riis") {
        console.log("------");
        continue;
    }
    console.log(`${i + 1}. ${products[i]}`);
}

// Temperatuurid
const temperatures = [
    [5, 8, 12, 10, 7, 9, 11, 14, 16, 13, 10, 6, 4, 3, 2, 4, 6, 8, 10, 12, 15, 17, 18, 16, 13, 10],
    // ... (jätkub kuni detsembrini)
];

const monthsArray = months.split(", ");

// Keskmine temperatuur iga kuu kohta
console.log("\nKeskmine temperatuur iga kuu kohta:");
for (let i = 0; i < temperatures.length; i++) {
    const averageTemperature = temperatures[i].reduce((sum, temp) => sum + temp, 0) / temperatures[i].length;
    console.log(`${monthsArray[i]}: ${averageTemperature.toFixed(2)}°C`);
}

// Kõrgeim ja madalaim temperatuur iga kuu kohta
console.log("\nKõrgeim ja madalaim temperatuur iga kuu kohta:");
for (let i = 0; i < temperatures.length; i++) {
    const maxTemperature = Math.max(...temperatures[i]);
    const minTemperature = Math.min(...temperatures[i]);
    console.log(`${monthsArray[i]} - Kõrgeim: ${maxTemperature}°C, Madalaim: ${minTemperature}°C`);
}

const coins = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20];

let sum = 0;
let count = 0;
let i = 0;

while (i < coins.length) {
    const coin = coins[i];

    if (coin >= 1) {
        console.log(`Sain ${Math.floor(coin)} euro mündi`);
        sum += Math.floor(coin);
        count++;
    } else {
        console.log(`Sain ${coin * 100} sendi mündi`);
        sum += coin * 100;
        count++;
    }

    i++;
}

console.log(`Kokku sain ${count} münti ja nende summa on ${sum} eurot.`);

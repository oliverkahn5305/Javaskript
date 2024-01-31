// Positiivne või negatiivne
let number = 7;

switch (true) {
    case number > 0:
        console.log("Positiivne number");
        break;
    case number < 0:
        console.log("Negatiivne number");
        break;
    default:
        console.log("Null või mittearv");
}

// Restoran
let broneeringuArv = 4;

switch (true) {
    case broneeringuArv >= 1 && broneeringuArv <= 2:
        console.log("Valige laud kahele inimesele.");
        break;
    case broneeringuArv >= 3 && broneeringuArv <= 4:
        console.log("Valige laud neljale inimesele.");
        break;
    case broneeringuArv >= 5 && broneeringuArv <= 6:
        console.log("Valige laud kuuele inimesele.");
        break;
    case broneeringuArv > 6:
        console.log("Valige suur laud.");
        break;
    default:
        console.log("Vigane broneeringu arv");
}

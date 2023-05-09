let Fifty = document.getElementById("£50");
let Twenty = document.getElementById("£20");
let Tenner = document.getElementById("£10");
let Fiver = document.getElementById("£5");
let TwoPound = document.getElementById("£2");
let OnePound = document.getElementById("£1");
let FiftyPence = document.getElementById("£0.50");
let TwentyPence = document.getElementById("£0.20");
let TenPence = document.getElementById("£0.10");
let FivePence = document.getElementById("£0.05");
let TwoPence = document.getElementById("£0.02");
let OnePence = document.getElementById("£0.01");

let FiftyTotal = document.getElementById("FiftyTotal");
let TwentyTotal = document.getElementById("TwentyTotal");
let TennerTotal = document.getElementById("TennerTotal");
let FiverTotal = document.getElementById("FiverTotal");
let TwoPoundTotal = document.getElementById("TwoPoundTotal");
let OnePoundTotal = document.getElementById("OnePoundTotal");
let FiftyPenceTotal = document.getElementById("FiftyPenceTotal")
let TwentyPenceTotal = document.getElementById("TwentyPenceTotal")
let TenPenceTotal = document.getElementById("TenPenceTotal")
let FivePenceTotal = document.getElementById("FivePenceTotal")
let TwoPenceTotal = document.getElementById("TwoPenceTotal")
let OnePenceTotal = document.getElementById("OnePenceTotal")

let OverallTotal = document.getElementById("OverallTotal")

const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

function Calculate(){
    FiftyTotal.textContent = String("Total: " + formatter.format(Number(Fifty.value) * 50))
    TwentyTotal.textContent = String("Total: " + formatter.format(Number(Twenty.value) * 20))
    TennerTotal.textContent = String("Total: " + formatter.format(Number(Tenner.value) * 10))
    FiverTotal.textContent = String("Total: " + formatter.format(Number(Fiver.value) * 5))
    TwoPoundTotal.textContent = String("Total: " + formatter.format(Number(TwoPound.value) * 2))
    OnePoundTotal.textContent = String("Total: " + formatter.format(Number(OnePound.value) * 1))
    FiftyPenceTotal.textContent = String("Total: " + formatter.format(Number(FiftyPence.value) * 0.50))
    TwentyPenceTotal.textContent = String("Total: " + formatter.format(Number(TwentyPence.value) * 0.20))
    TenPenceTotal.textContent = String("Total: " + formatter.format(Number(TenPence.value) * 0.10))
    FivePenceTotal.textContent = String("Total: " + formatter.format(Number(FivePence.value) * 0.05))
    TwoPenceTotal.textContent = String("Total: " + formatter.format(Number(TwoPence.value) * 0.02))
    OnePenceTotal.textContent = String("Total: " + formatter.format(Number(OnePence.value) * 0.01))

    OverallTotal.textContent = String("Overall Total: " + formatter.format(Number(Fifty.value) * 50 + Number(Twenty.value) * 20 + Number(Tenner.value) * 10 + Number(Fiver.value) * 5 + Number(TwoPound.value) * 2 + Number(OnePound.value) * 1 + Number(FiftyPence.value) * 0.50 + Number(TwentyPence.value) * 0.20 + Number(TenPence.value) * 0.10 + Number(FivePence.value) * 0.05 + Number(TwoPence.value) * 0.02 + Number(OnePence.value) * 0.01))
}

function Reset(){
    location.reload()
}
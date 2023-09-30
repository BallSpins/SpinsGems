const fish = [
    {//herring
        tiny: 10 * Therring.value,
        small: 40 * Sherring.value,
        medium: 70 * Mherring.value,
        large: 100 * Lherring.value,
        huge: 300 * Hherring.value
    },
    {//kingish
        tiny: 10 * Tkingfish.value,
        small: 40 * Skingfish.value,
        medium: 70 * Mkingfish.value,
        large: 100 * Lkingfish.value,
        huge: 300 * Hkingfish.value
    },
    {//goldfish
        tiny: 15 * Tgoldfish.value,
        small: 60 * Sgoldfish.value,
        medium: 105 * Mgoldfish.value,
        large: 150 * Lgoldfish.value,
        huge: 450 * Hgoldfish.value
    },
    {//butterflyfish
        tiny: 15 * Tbutter.value,
        small: 60 * Sbutter.value,
        medium: 105 * Mbutter.value,
        large: 150 * Lbutter.value,
        huge: 450 * Hbutter.value
    },
    {//carp
        tiny: 20 * Tcarp.value,
        small: 80 * Scarp.value,
        medium: 140 * Mcarp.value,
        large: 200 * Lcarp.value,
        huge: 600 * Hcarp.value
    },
    {//halibut
        tiny: 20 * Thali.value,
        small: 80 * Shali.value,
        medium: 140 * Mhali.value,
        large: 200 * Lhali.value,
        huge: 600 * Hhali.value
    },
    {//tuna
        tiny: 40 * Ttuna.value,
        small: 160 * Stuna.value,
        medium: 280 * Mtuna.value,
        large: 400 * Ltuna.value,
        huge: 1200 * Htuna.value
    },
    {//sea angler
        tiny: 30 * Tang.value,
        small: 120 * Sang.value,
        medium: 210 * Mang.value,
        large: 300 * Lang.value,
        huge: 900 * Hang.value
    },
    {//piranha
        tiny: 30 * Tpir.value,
        small: 120 * Spir.value,
        medium: 210 * Mpir.value,
        large: 300 * Lpir.value,
        huge: 900 * Hpir.value
    },
    {//dumbfish
        tiny: 5 * Tdum.value,
        small: 10 * Sdum.value,
        medium: 30 * Mdum.value,
        large: 50 * Ldum.value,
        huge: 100 * Hdum.value
    },
    {//acid puffer
        tiny: 80 * Tacid.value,
        small: 320 * Sacid.value,
        medium: 560 * Macid.value,
        large: 800 * Lacid.value,
        huge: 2400 * Hacid.value
    },
    {//crab
        tiny: 320 * Tcrab.value,
        small: 1280 * Scrab.value,
        medium: 2240 * Mcrab.value,
        large: 3200 * Lcrab.value,
        huge: 9600 * Hcrab.value
    }
];
for(let i = 0; i < fish.length; i++) {
    fish[i].total = fish[i].tiny + fish[i].small + fish[i].medium + fish[i].large + fish[i].huge
}
const sum = fish.reduce(function(a, b) {
    return a + b.total;
}, 0);
function calc() {
    document.getElementById("total").innerHTML = sum;
}
function reset() {
    document.getElementById("total").innerHTML = sum*0;
}
function pricecalc()  {
    document.getElementById("priTo").innerHTML = sum / preca.value * 250;
}
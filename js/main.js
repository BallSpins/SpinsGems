function Fcalc() {//Fish Gems
    const fish = [
        {//herring
            tiny: 10 * document.getElementById("Therring").value,
            small: 40 * document.getElementById("Sherring").value,
            medium: 70 * document.getElementById("Mherring").value,
            large: 100 * document.getElementById("Lherring").value,
            huge: 300 * document.getElementById("Hherring").value
        },
        {//kingish
            tiny: 10 * document.getElementById("Tkingfish").value,
            small: 40 * document.getElementById("Skingfish").value,
            medium: 70 * document.getElementById("Mkingfish").value,
            large: 100 * document.getElementById("Lkingfish").value,
            huge: 300 * document.getElementById("Hkingfish").value
        },
        {//goldfish
            tiny: 15 * document.getElementById("Tgoldfish").value,
            small: 60 * document.getElementById("Sgoldfish").value,
            medium: 105 * document.getElementById("Mgoldfish").value,
            large: 150 * document.getElementById("Lgoldfish").value,
            huge: 450 * document.getElementById("Hgoldfish").value
        },
        {//butterflyfish
            tiny: 15 * document.getElementById("Tbutter").value,
            small: 60 * document.getElementById("Sbutter").value,
            medium: 105 * document.getElementById("Mbutter").value,
            large: 150 * document.getElementById("Lbutter").value,
            huge: 450 * document.getElementById("Hbutter").value
        },
        {//carp
            tiny: 20 * document.getElementById("Tcarp").value,
            small: 80 * document.getElementById("Scarp").value,
            medium: 140 * document.getElementById("Mcarp").value,
            large: 200 * document.getElementById("Lcarp").value,
            huge: 600 * document.getElementById("Hcarp").value
        },
        {//halibut
            tiny: 20 * document.getElementById("Thali").value,
            small: 80 * document.getElementById("Shali").value,
            medium: 140 * document.getElementById("Mhali").value,
            large: 200 * document.getElementById("Lhali").value,
            huge: 600 * document.getElementById("Hhali").value
        },
        {//tuna
            tiny: 40 * document.getElementById("Ttuna").value,
            small: 160 * document.getElementById("Stuna").value,
            medium: 280 * document.getElementById("Mtuna").value,
            large: 400 * document.getElementById("Ltuna").value,
            huge: 1200 * document.getElementById("Htuna").value
        },
        {//sea angler
            tiny: 30 * document.getElementById("Tang").value,
            small: 120 * document.getElementById("Sang").value,
            medium: 210 * document.getElementById("Mang").value,
            large: 300 * document.getElementById("Lang").value,
            huge: 900 * document.getElementById("Hang").value
        },
        {//piranha
            tiny: 30 * document.getElementById("Tpir").value,
            small: 120 * document.getElementById("Spir").value,
            medium: 210 * document.getElementById("Mpir").value,
            large: 300 * document.getElementById("Lpir").value,
            huge: 900 * document.getElementById("Hpir").value
        },
        {//dumbfish
            tiny: 5 * document.getElementById("Tdum").value,
            small: 10 * document.getElementById("Sdum").value,
            medium: 30 * document.getElementById("Mdum").value,
            large: 50 * document.getElementById("Ldum").value,
            huge: 100 * document.getElementById("Hdum").value
        },
        {//acid puffer
            tiny: 80 * document.getElementById("Tacid").value,
            small: 320 * document.getElementById("Sacid").value,
            medium: 560 * document.getElementById("Macid").value,
            large: 800 * document.getElementById("Lacid").value,
            huge: 2400 * document.getElementById("Hacid").value
        },
        {//crab
            tiny: 320 * document.getElementById("Tcrab").value,
            small: 1280 * document.getElementById("Scrab").value,
            medium: 2240 * document.getElementById("Mcrab").value,
            large: 3200 * document.getElementById("Lcrab").value,
            huge: 9600 * document.getElementById("Hcrab").value
        }
    ];
    for(let i = 0; i < fish.length; i++) {
        fish[i].total = fish[i].tiny + fish[i].small + fish[i].medium + fish[i].large + fish[i].huge
    }
    const sum = fish.reduce(function(a, b) {
        return a + b.total;
    }, 0);
    console.log(sum);
    document.getElementById("total").innerHTML = sum;
    return sum;
}
function Mcalc() { //Mine Gems
    const Gemstone = [
        {//Topaz
            tiny: 3 * document.getElementById("Ttopaz").value,
            small: 6 * document.getElementById("Stopaz").value,
            medium: 12 * document.getElementById("Mtopaz").value,
            large: 30 * document.getElementById("Ltopaz").value,
            huge: 90 * document.getElementById("Htopaz").value
        },
        {//Emerald
            tiny: 5 * document.getElementById("Temerald").value,
            small: 10 * document.getElementById("Semerald").value,
            medium: 20 * document.getElementById("Memerald").value,
            large: 50 * document.getElementById("Lemerald").value,
            huge: 150  * document.getElementById("Hemerald").value
        },
        {//Sapphire
            tiny: 10 * document.getElementById("Tsapphire").value,
            small: 20 * document.getElementById("Ssapphire").value,
            medium: 40 * document.getElementById("Msapphire").value,
            large: 100 * document.getElementById("Lsapphire").value,
            huge: 300 * document.getElementById("Hsapphire").value
        },
        {//Ruby
            tiny: 20 * document.getElementById("Truby").value,
            small: 40 * document.getElementById("Sruby").value,
            medium: 80 * document.getElementById("Mruby").value,
            large: 200 * document.getElementById("Lruby").value,
            huge: 600 * document.getElementById("Hruby").value
        },
        {//Diamond
            tiny: 30 * document.getElementById("Tdiamond").value,
            small: 60 * document.getElementById("Sdiamond").value,
            medium: 120 * document.getElementById("Mdiamond").value,
            large: 300 * document.getElementById("Ldiamond").value,
            huge: 900 * document.getElementById("Hdiamond").value
        }
    ];
    for(let i = 0; i < Gemstone.length; i++) {
        Gemstone[i].total = Gemstone[i].tiny + Gemstone[i].small + Gemstone[i].medium + Gemstone[i].large + Gemstone[i].huge
    }
    const sum = Gemstone.reduce(function(a, b) {
        return a + b.total;
    }, 0);
    console.log(sum);
    document.getElementById("total").innerHTML = sum;
    return sum;
}
function Fpricecalc() { 
    document.getElementById("priTo").innerHTML = Fcalc() / preca.value * 250;
}
function Mpricecalc() { 
    document.getElementById("priTo").innerHTML = Mcalc() / preca.value * 250;
}
function reset() {
    document.querySelectorAll("input").value="0";
}
function toMchange() {
    location.replace('https://BallSpins.github.io/SpinsGems/html/gems.html');
}
function toFchange() {
    location.replace('https://BallSpins.github.io/SpinsGems/index.html');
}

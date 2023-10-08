function Fcalc() {//Fish Gems
    const fish = [
        {//herring
            tiny: 10 * document.getElementById("Therring").value || 0,
            small: 40 * document.getElementById("Sherring").value || 0,
            medium: 70 * document.getElementById("Mherring").value || 0,
            large: 100 * document.getElementById("Lherring").value || 0,
            huge: 300 * document.getElementById("Hherring").value || 0
        },
        {//kingish
            tiny: 10 * document.getElementById("Tkingfish").value || 0,
            small: 40 * document.getElementById("Skingfish").value || 0,
            medium: 70 * document.getElementById("Mkingfish").value || 0,
            large: 100 * document.getElementById("Lkingfish").value || 0,
            huge: 300 * document.getElementById("Hkingfish").value || 0
        },
        {//goldfish
            tiny: 15 * document.getElementById("Tgoldfish").value || 0,
            small: 60 * document.getElementById("Sgoldfish").value || 0,
            medium: 105 * document.getElementById("Mgoldfish").value || 0,
            large: 150 * document.getElementById("Lgoldfish").value || 0,
            huge: 450 * document.getElementById("Hgoldfish").value || 0
        },
        {//butterflyfish
            tiny: 15 * document.getElementById("Tbutter").value || 0,
            small: 60 * document.getElementById("Sbutter").value || 0,
            medium: 105 * document.getElementById("Mbutter").value || 0,
            large: 150 * document.getElementById("Lbutter").value || 0,
            huge: 450 * document.getElementById("Hbutter").value || 0
        },
        {//carp
            tiny: 20 * document.getElementById("Tcarp").value || 0,
            small: 80 * document.getElementById("Scarp").value || 0,
            medium: 140 * document.getElementById("Mcarp").value || 0,
            large: 200 * document.getElementById("Lcarp").value || 0,
            huge: 600 * document.getElementById("Hcarp").value || 0
        },
        {//halibut
            tiny: 20 * document.getElementById("Thali").value || 0,
            small: 80 * document.getElementById("Shali").value || 0,
            medium: 140 * document.getElementById("Mhali").value || 0,
            large: 200 * document.getElementById("Lhali").value || 0,
            huge: 600 * document.getElementById("Hhali").value || 0
        },
        {//tuna
            tiny: 40 * document.getElementById("Ttuna").value || 0,
            small: 160 * document.getElementById("Stuna").value || 0,
            medium: 280 * document.getElementById("Mtuna").value || 0,
            large: 400 * document.getElementById("Ltuna").value || 0,
            huge: 1200 * document.getElementById("Htuna").value || 0
        },
        {//sea angler
            tiny: 30 * document.getElementById("Tang").value || 0,
            small: 120 * document.getElementById("Sang").value || 0,
            medium: 210 * document.getElementById("Mang").value || 0,
            large: 300 * document.getElementById("Lang").value || 0,
            huge: 900 * document.getElementById("Hang").value || 0
        },
        {//piranha
            tiny: 30 * document.getElementById("Tpir").value || 0,
            small: 120 * document.getElementById("Spir").value || 0,
            medium: 210 * document.getElementById("Mpir").value || 0,
            large: 300 * document.getElementById("Lpir").value || 0,
            huge: 900 * document.getElementById("Hpir").value || 0
        },
        {//dumbfish
            tiny: 5 * document.getElementById("Tdum").value || 0,
            small: 10 * document.getElementById("Sdum").value || 0,
            medium: 30 * document.getElementById("Mdum").value || 0,
            large: 50 * document.getElementById("Ldum").value || 0,
            huge: 100 * document.getElementById("Hdum").value || 0
        },
        {//acid puffer
            tiny: 80 * document.getElementById("Tacid").value || 0,
            small: 320 * document.getElementById("Sacid").value || 0,
            medium: 560 * document.getElementById("Macid").value || 0,
            large: 800 * document.getElementById("Lacid").value || 0,
            huge: 2400 * document.getElementById("Hacid").value || 0
        },
        {//crab
            tiny: 320 * document.getElementById("Tcrab").value || 0,
            small: 1280 * document.getElementById("Scrab").value || 0,
            medium: 2240 * document.getElementById("Mcrab").value || 0,
            large: 3200 * document.getElementById("Lcrab").value || 0,
            huge: 9600 * document.getElementById("Hcrab").value || 0
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
            tiny: 3 * document.getElementById("Ttopaz").value || 0,
            small: 6 * document.getElementById("Stopaz").value || 0,
            medium: 12 * document.getElementById("Mtopaz").value || 0,
            large: 30 * document.getElementById("Ltopaz").value || 0,
            huge: 90 * document.getElementById("Htopaz").value || 0
        },
        {//Emerald
            tiny: 5 * document.getElementById("Temerald").value || 0,
            small: 10 * document.getElementById("Semerald").value || 0,
            medium: 20 * document.getElementById("Memerald").value || 0,
            large: 50 * document.getElementById("Lemerald").value || 0,
            huge: 150  * document.getElementById("Hemerald").value || 0
        },
        {//Sapphire
            tiny: 10 * document.getElementById("Tsapphire").value || 0,
            small: 20 * document.getElementById("Ssapphire").value || 0,
            medium: 40 * document.getElementById("Msapphire").value || 0,
            large: 100 * document.getElementById("Lsapphire").value || 0,
            huge: 300 * document.getElementById("Hsapphire").value || 0
        },
        {//Ruby
            tiny: 20 * document.getElementById("Truby").value || 0,
            small: 40 * document.getElementById("Sruby").value || 0,
            medium: 80 * document.getElementById("Mruby").value || 0,
            large: 200 * document.getElementById("Lruby").value || 0,
            huge: 600 * document.getElementById("Hruby").value || 0
        },
        {//Diamond
            tiny: 30 * document.getElementById("Tdiamond").value || 0,
            small: 60 * document.getElementById("Sdiamond").value || 0,
            medium: 120 * document.getElementById("Mdiamond").value || 0,
            large: 300 * document.getElementById("Ldiamond").value || 0,
            huge: 900 * document.getElementById("Hdiamond").value || 0
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
    document.getElementById("total").innerHTML = "0";
    document.getElementById("priTo").innerHTML = "0";
    let inp = document.querySelectorAll("input");

    for (let i = 0; i < inp.length; i++) {
        inp[i].value = "";
    }
}
function toMchange() {
    location.replace('html/gems.html');
}
function toFchange() {
    location.replace('../index.html');
}
function copy_text(node){
    if(document.body.createTextRange){
        const range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
        document.execCommand('copy');
    }
    else if(window.getSelection){
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
    }
    else {
        console.warn("Could not select text in node");
    }
}

function clear_selection(){
    if(window.getSelection){
        window.getSelection().removeAllRanges();
    }
    else if(document.selection){
        document.selection.empty();
    }
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("copy").onclick = function(){
        copy_text(document.getElementById("total"));

        setTimeout(() => { clear_selection() }, 500);
    }
});
var total = 0;
var Ther = 10;
var Sher = 40;
var Mher = 70;
var Lher = 100;
var Hher = 300;

var Tgold = 15;
var Sgold = 60;
var Mgold = 105;
var Lgold = 150;
var Hgold = 450;

function calc(body) {
    var Ther1 = parseInt(Therring.value);
    var Sher1 = parseInt(Sherring.value);
    var Mher1 = parseInt(Mherring.value);
    var Lher1 = parseInt(Lherring.value);
    var Hher1 = parseInt(Hherring.value);
    var Th1 = Ther1*Ther;
    var Sh1 = Sher1*Sher;
    var Mh1 = Mher1*Mher;
    var Lh1 = Lher1*Lher;
    var Hh1 = Hher1*Hher;
    var Htotal = Th1+Sh1+Mh1+Lh1+Hh1;

    var Tking1 = parseInt(Tkingfish.value);
    var Sking1 = parseInt(Skingfish.value);
    var Mking1 = parseInt(Mkingfish.value);
    var Lking1 = parseInt(Lkingfish.value);
    var Hking1 = parseInt(Hkingfish.value);
    var Tk1 = Tking1*Ther;
    var Sk1 = Sking1*Sher;
    var Mk1 = Mking1*Mher;
    var Lk1 = Lking1*Lher;
    var Hk1 = Hking1*Hher;
    var Ktotal = Tk1+Sk1+Mk1+Lk1+Hk1;

    var Tgold1 = parseInt(Tgoldfish.value);
    var Sgold1 = parseInt(Sgoldfish.value);
    var Mgold1 = parseInt(Mgoldfish.value);
    var Lgold1 = parseInt(Lgoldfish.value);
    var Hgold1 = parseInt(Hgoldfish.value);
    var Tg1 = Tgold1*Tgold;
    var Sg1 = Sgold1*Sgold;
    var Mg1 = Mgold1*Mgold;
    var Lg1 = Lgold1*Lgold;
    var Hg1 = Hgold1*Hgold;
    var Gtotal = Tg1+Sg1+Mg1+Lg1+Hg1;

    var total = Htotal+Ktotal+Gtotal;
    console.log(total) 
    document.getElementById("total").innerHTML = total;
}

function reset() {
    var biji = total*0;
    document.getElementById("total").innerHTML = biji;
}

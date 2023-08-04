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

var Tcar = 20;
var Scar = 80;
var Mcar = 140;
var Lcar = 200;
var Hcar = 600;

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
    
    var Tbut = parseInt(Tbutter.value);
    var Sbut = parseInt(Sbutter.value);
    var Mbut = parseInt(Mbutter.value);
    var Lbut = parseInt(Lbutter.value);
    var HBut = parseInt(Hbutter.value);
    var Tb = Tbut * Tgold;
    var Sb = Sbut * Sgold;
    var Mb = Mbut * Mgold;
    var Lb = Lbut * Lgold;
    var Hb = HBut * Hgold;
    var TTotal = Tb+Sb+Mb+Lb+Hb;

    var Tcar1 = parseInt(Tcarp.value);
    var Scar1 = parseInt(Scarp.value);
    var Mcar1 = parseInt(Mcarp.value);
    var Lcar1 = parseInt(Lcarp.value);
    var Hcar1 = parseInt(Hcarp.value);
    var Tc1 = Tcar1*Tcar;
    var Sc1 = Scar1*Scar;
    var Mc1 = Mcar1*Mcar;
    var Lc1 = Lcar1*Lcar;
    var Hc1 = Hcar1*Hcar;
    var Ctotal = Tc1+Sc1+Mc1+Lc1+Hc1;

    var Thal = parseInt(Thali.value);
    var Shal = parseInt(Shali.value);
    var Mhal = parseInt(Mhali.value);
    var Lhal = parseInt(Lhali.value);
    var Hhal = parseInt(Hhali.value);
    var Tha = Thal * Tcar;
    var Sha = Shal * Scar;
    var Mha = Mhal * Mcar;
    var Lha = Lhal * Lcar;
    var Hha = Hhal * Hcar;
    var Hatotal = Tha+Sha+Mha+Lha+Hha;

    var total = Htotal+Ktotal+Gtotal+Ctotal+TTotal+Hatotal;
    console.log(total) 
    document.getElementById("total").innerHTML = total;
}

function reset() {
    var biji = total*0;
    console.log("kam")
    document.getElementById("total").innerHTML = biji;
}

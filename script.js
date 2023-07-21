var Therring = document.getElementById('Therring');
var Sherring = document.getElementById('Sherring');
var Mherring = document.getElementById('Mherring');
var Lherring = document.getElementById('Lherring');
var Hherring = document.getElementById('Hherring');

var Tkingfish = document.getElementById('Tkingfish');
var Skingfish = document.getElementById('Skingfish');
var Mkingfish = document.getElementById('Mkingfish');
var Lkingfish = document.getElementById('Lkingfish');
var Hkingfish = document.getElementById('Hkingfish');

var Tgoldfish = document.getElementById('Tgoldfish');
var Sgoldfish = document.getElementById('Sgoldfish');
var Mgoldfish = document.getElementById('Mgoldfish');
var Lgoldfish = document.getElementById('Lgoldfish');
var Hgoldfish = document.getElementById('Hgoldfish');

var Tcarp = document.getElementById('Tcarp');
var Scarp = document.getElementById('Scarp');
var Mcarp = document.getElementById('Mcarp');
var Lcarp = document.getElementById('Lcarp');
var Hcarp = document.getElementById('Hcarp');

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

function calc(body){
    var Ther1 = parseInt(Therring);
    var Sher1 = parseInt(Sherring);
    var Mher1 = parseInt(Mherring);
    var Lher1 = parseInt(Lherring);
    var Hher1 = parseInt(Hherring);
    var Th1 = Ther1*Ther;
    var Sh1 = Sher1*Sher;
    var Mh1 = Mher1*Mher;
    var Lh1 = Lher1*Lher;
    var Hh1 = Hher1*Hher;
    var Htotal = Th1+Sh1+Mh1+Lh1+Hh1;

    var Tking1 = parseInt(Tkingfish);
    var Sking1 = parseInt(Skingfish);
    var Mking1 = parseInt(Mkingfish);
    var Lking1 = parseInt(Lkingfish);
    var Hking1 = parseInt(Hkingfish);
    var Tk1 = Tking1*Ther;
    var Sk1 = Sking1*Sher;
    var Mk1 = Mking1*Mher;
    var Lk1 = Lking1*Lher;
    var Hk1 = Hking1*Hher;
    var Ktotal = Tk1+Sk1+Mk1+Lk1+Hk1;

    var Tgold1 = parseInt(Tgoldfish);
    var Sgold1 = parseInt(Sgoldfish);
    var Mgold1 = parseInt(Mgoldfish);
    var Lgold1 = parseInt(Lgoldfish);
    var Hgold1 = parseInt(Hgoldfish);
    var Tg1 = Tgold1*Tgold;
    var Sg1 = Sgold1*Sgold;
    var Mg1 = Mgold1*Mgold;
    var Lg1 = Lgold1*Lgold;
    var Hg1 = Hgold1*Hgold;
    var Gtotal = Tg1+Sg1+Mg1+Lg1+Hg1;

    var Tcar1 = parseInt(Tcarp);
    var Scar1 = parseInt(Scarp);
    var Mcar1 = parseInt(Mcarp);
    var Lcar1 = parseInt(Lcarp);
    var Hcar1 = parseInt(Hcarp);
    var Tc1 = Tcar1*Tcar;
    var Sc1 = Scar1*Scar;
    var Mc1 = Mcar1*Mcar;
    var Lc1 = Lcar1*Lcar;
    var Hc1 = Hcar1*Hcar;
    var Ctotal = Tc1+Sc1+Mc1+Lc1+Hc1;

    var total = Htotal+Ktotal+Gtotal+Ctotal;
    console.log(total) 
    document.getElementById("total").innerHTML = total;
}

function reset() {
    var biji = total*0;
    document.getElementById("total").innerHTML = biji;
}

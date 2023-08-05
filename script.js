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

//atas-bawah

var Ttun = 40;
var Stun = 160;
var Mtun = 280;
var Ltun = 400;
var Htun = 1200;

var Tan = 30;
var San = 120;
var Man = 210;
var Lan = 300;
var Han = 900; //angler == piranha

var Tdu = 5;
var Sdu = 10;
var Mdu  = 30;
var Ldu = 50;
var Hdu = 100;

var Taci = 80;
var Saci = 320;
var Maci = 560;
var Laci = 800;
var Haci = 2400;



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

    //atas-bawah

    var Ttun1 = parseInt(Ttuna.value);
    var Stun1 = parseInt(Stuna.value);
    var Mtun1 = parseInt(Mtuna.value);
    var Ltun1 = parseInt(Ltuna.value);
    var Htun1 = parseInt(Htuna.value);
    var Tt = Ttun1 * Ttun;
    var St = Stun1 * Stun;
    var Mt = Mtun1 * Mtun;
    var Lt = Ltun1 * Ltun;
    var Ht = Htun1 * Htun;
    var Tutotal = Tt+St+Mt+Lt+Ht;
    
    var Tan1 = parseInt(Tang.value);
    var San1 = parseInt(Sang.value);
    var Man1 = parseInt(Mang.value);
    var Lan1 = parseInt(Lang.value);
    var Han1 = parseInt(Hang.value);
    var Ta = Tan1 * Tan;
    var Sa = San1 * San;
    var Ma = Man1 * Man;
    var La = Lan1 * Lan;
    var Ha = Han1 * Han;
    var Atotal = Ta+Sa+Ma+La+Ha;

    var Tdu1 = parseInt(Tdum.value);
    var Sdu1 = parseInt(Sdum.value);
    var Mdu1 = parseInt(Mdum.value);
    var Ldu1 = parseInt(Ldum.value);
    var Hdu1 = parseInt(Hdum.value);
    var Td = Tdu1 * Tdu;
    var Sd  = Sdu1 * Sdu;
    var Md = Mdu1 * Mdu;
    var Ld = Ldu1 * Ldu;
    var Hd  = Hdu1 * Hdu;
    var Dtotal = Td+Sd+Md+Ld+Hd;

    var total = Htotal+Ktotal+Gtotal+Ctotal+TTotal+Hatotal+Tutotal+Atotal+Dtotal;
    console.log(total) 
    document.getElementById("total").innerHTML = total;
}

function reset() {
    var biji = total*0;
    console.log("kam")
    document.getElementById("total").innerHTML = biji;
}

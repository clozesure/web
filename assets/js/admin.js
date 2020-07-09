//Get form fields

const postcode = document.getElementById("postcode");
const first_line = document.getElementById("first_line");
const second_line = document.getElementById("second_line");
const post_town = document.getElementById("post_town");
const sale_price = document.getElementById("sale_price");
const owner_first = document.getElementById("o1fn");
const owner_last = document.getElementById("o1ln");
const o1NI = document.getElementById("o1NI");
const o1Email = document.getElementById("o1Email");
const o1Phone = document.getElementById("o1Phone");
const profile = document.getElementById("profile");
const buyer_first = document.getElementById("b1fn");
const buyer_last = document.getElementById("b1ln");
const b1Email = document.getElementById("b1Email");
const b1Phone = document.getElementById("b1Phone");
const ocn = document.getElementById("ocn");
const occ = document.getElementById("occ");
const ocnEmail = document.getElementById("ocnEmail");
const oean = document.getElementById("oean");
const oeac = document.getElementById("oeac");
const oeanEmail = document.getElementById("oeanEmail");
const app_date = document.getElementById("app_date");
const app_num = document.getElementById("app_num");
const prate = document.getElementById("rate");
const max = document.getElementById("max");
const update = document.getElementById("update");
const claim = document.getElementById("claim");
const claim_date = document.getElementById("claim_date");
const claim_tab = document.getElementById("ctab");
const claim_card = document.getElementById("tab7");
const exchDate = document.getElementById("exchDate");
const compDate = document.getElementById("compDate");
const prinAd = document.getElementById("prinAd");

pAddress = localStorage.getItem('prinAd');
eDate = localStorage.getItem('exchDate');
cDate = localStorage.getItem('compDate');
first = localStorage.getItem('o1fn');
last = localStorage.getItem('o1ln');
oEmail = localStorage.getItem('o1Email');
oNI = localStorage.getItem('o1NI');
oPhone = localStorage.getItem('o1Phone');
buyfirst = localStorage.getItem('b1fn');
buylast = localStorage.getItem('b1ln');
bEmail = localStorage.getItem('b1Email');
bPhone = localStorage.getItem('b1Phone');

cName = localStorage.getItem('ocn');
cCo = localStorage.getItem('occ');
cEmail = localStorage.getItem('ocnEmail');
eName = localStorage.getItem('oean');
eCo = localStorage.getItem('oeac');
eEmail = localStorage.getItem('oeanEmail');

pafl = localStorage.getItem('pafl');
pasl = localStorage.getItem('pasl');
papt = localStorage.getItem('papt');
p_code = localStorage.getItem('papc');
s_price = localStorage.getItem('sale_price');
sp_num = localStorage.getItem('sp_num');
date = localStorage.getItem('app_date');
number = localStorage.getItem('app_num');
rate = localStorage.getItem('rate');
claim_num = localStorage.getItem('claim');
claim_dte = localStorage.getItem('claim_date');

if (pAddress === "1") {
    prinAd.innerHTML = 'Yes';
} else {
    prinAd.innerHTML = 'No';
}

//price.innerHTML = '£' + value;
profile.innerHTML = first + ' ' + last;
postcode.innerHTML = p_code;
sale_price.innerHTML = '£' + s_price;
owner_first.innerHTML = first;
owner_last.innerHTML = last;
o1Email.innerHTML = oEmail;
o1Phone.innerHTML = oPhone;
o1NI.innerHTML = oNI;
buyer_first.innerHTML = buyfirst;
buyer_last.innerHTML = buylast;
b1Email.innerHTML = bEmail;
b1Phone.innerHTML = bPhone;

ocn.innerHTML = cName;
occ.innerHTML = cCo;
ocnEmail.innerHTML = cEmail;
oean.innerHTML = eName;
oeac.innerHTML = eCo;
oeanEmail.innerHTML = eEmail;

first_line.innerHTML = pafl;
second_line.innerHTML = pasl;
post_town.innerHTML = papt;
app_date.innerHTML = date;
exchDate.innerHTML = eDate;
compDate.innerHTML = cDate;
app_num.innerHTML = number;
claim.innerHTML = claim_num;
claim_date.innerHTML = claim_dte;

showClaim()

function showClaim() {
    if (claim_num !== null) {
        claim_tab.style.display="";
        claim_card.style.display="";
    }
}


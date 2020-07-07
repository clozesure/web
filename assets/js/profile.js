const price = document.getElementById("price");
const postcode = document.getElementById("postcode");
const first_line = document.getElementById("first_line");
const second_line = document.getElementById("second_line");
const post_town = document.getElementById("post_town");
const sale_price = document.getElementById("sale_price");
const owner_first = document.getElementById("o1fn")
const owner_last = document.getElementById("o1ln")
const profile = document.getElementById('profile')
const buyer_first = document.getElementById("b1fn")
const buyer_last = document.getElementById("b1ln")
const app_date = document.getElementById("app_date")
const app_num = document.getElementById("app_num")
const po1fn = document.getElementById("po1fn")
const po1ln = document.getElementById("po1ln")
const po1Email = document.getElementById("po1Email")
first = localStorage.getItem('o1fn');
last = localStorage.getItem('o1ln');
lo1Email = localStorage.getItem('o1Email');
buyfirst = localStorage.getItem('b1fn');
buylast = localStorage.getItem('b1ln');
value = localStorage.getItem('price');
pafl = localStorage.getItem('pafl');
pasl = localStorage.getItem('pasl');
papt = localStorage.getItem('papt');
p_code = localStorage.getItem('papc');
s_price = localStorage.getItem('sale_price');
date = localStorage.getItem('app_date');
number = localStorage.getItem('app_num');
sp_num = localStorage.getItem('sp_num');
//price.innerHTML = '£' + value;
profile.innerHTML = first + ' ' + last;
postcode.innerHTML = p_code;
sale_price.innerHTML = '£' + s_price;
owner_first.innerHTML = first;
owner_last.innerHTML = last;
buyer_first.innerHTML = buyfirst;
buyer_last.innerHTML = buylast;
first_line.innerHTML = pafl;
second_line.innerHTML = pasl;
post_town.innerHTML = papt;
app_date.innerHTML = date;
app_num.innerHTML = number;
po1fn.value = first;
po1ln.value = last;
po1Email.value = lo1Email;

max_value = parseInt(localStorage.getItem('max_value'));
// const max_value = 2000000

if (sp_num >= max_value) {
    const pill1 = document.getElementById("pill1");
    const pill2 = document.getElementById("pill2");
    const pill3 = document.getElementById("pill3");
    const tab1 = document.getElementById("tab1");
    const tab2 = document.getElementById("tab2");
    const tab3 = document.getElementById("tab3");
    pill1.style.display = "none";
    pill1.classList.remove("active");
    pill2.style.display = "";
    pill2.classList.add("active");
    pill3.style.display = "none";
    tab1.style.display = "none";
    tab1.classList.remove("active");
    tab2.style.display = "";
    tab2.classList.add("active");
    tab3.style.display = "none";
} else if (max_value >= sp_num) {
    pill1.style.display = "";
    pill2.style.display = "none";
    pill3.style.display = "";
    tab1.style.display = "";
    tab2.style.display = "none";
    tab3.style.display = "";
}
const btnClaim = document.getElementById("claimbtn");
btnClaim.onclick = function(){
var desiredMaxLength = 8
var randomNumber = '';
for (var i = 0; i < desiredMaxLength; i++) {
randomNumber += Math.floor(Math.random() * 10);
}
var objToday = new Date(),
    weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
    dayOfWeek = weekday[objToday.getDay()],
    domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
    dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
    curMonth = months[objToday.getMonth()],
    curYear = objToday.getFullYear(),
    curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
    curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
    curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
    curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
var today = dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;
localStorage.setItem('claim', randomNumber)
localStorage.setItem('claim_date', today)
notify.showNotification('top', 'center');
const c_num = document.getElementById("cpostnum")
c_num.innerHTML = randomNumber
document.getElementById("prectab").style.display="none";
document.getElementById("postctab").style.display="";
//window.document.location = './claim.html';
}

notify = {
    showNotification: function(from, align){
        color = 'warning';

        $.notify({
            icon: "now-ui-icons ui-1_bell-53",
            message: "Your Claim has been registered."

        },{
            type: color,
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    }
}

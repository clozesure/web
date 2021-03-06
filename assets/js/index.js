//const calcpc = document.getElementById("calcpc");
const first_line = document.getElementById("first_line");
const second_line = document.getElementById("second_line");
const post_town = document.getElementById("post_town");
const postcode = document.getElementById("postcode");
const calcsp = document.getElementById("calcsp");
const calcbtn = document.getElementById("calcbtn");


calcbtn.onclick = function(){
    //const rawpcode = calcpc.value;
    const sale_price = calcsp.value;
    const pafl = first_line.value;
    const pasl = second_line.value;
    const papt = post_town.value;
    const papc = postcode.value;

    //Set minimum rate
    if (localStorage.getItem('rate') <= 0.0005) {
        rate = 0.0005;
    } else {
        rate = localStorage.getItem('rate');
    }
    const sp_num = Number(sale_price.replace(/[^0-9.-]+/g,""));

    //Set price risk rate
    if (sp_num > 1500000) {
        rate = 0.00055;
    } else if (sp_num > 1000000) {
        rate = 0.000525;
    }
    var price = parseInt(sp_num * rate)

    //Set mimimun price
    if (price < 150) {
        price = 150;
    }

    const scotRe = /(^G\d)|(^AB\d)|(^IV\d)|(^KW\d)|(^PH\d)|(^DD\d)|(^PA\d)|(^FK\d)|(^KY\d)|(^KA\d)|(^ML\d)|(^EH\d)|(^TD\d)|(^DG\d)|(^HS\d)|(^ZE\d)/;
    const crownRe = /(^JE\d)|(^GY\d)|(^IM\d)/;
    const lonRe = /(^W1[SJKFTCDBGUWH])|(^E1\s)|(^EC[1234])|(^NW3)|(^NW8)|(^SE1)|(^SW1)|(^SW6)|(^SW10)|(^W2\s)|(^W6\s)|(^W8\s)|(^WC1\s)|(^WC2\s)|(^TW10)|(^M2\s)|(^GU25)|(^EN11)|(^LS1)|(^B4\s)|(^NP9)|(^B2\s)|(^M17\s)|(^NG80)|(^CR9)|(^CF99)/;
    // const postRe = /(GIR 0AA)|((([ABCDEFGHIJKLMNOPRSTUWYZ][0-9][0-9]?)|(([ABCDEFGHIJKLMNOPRSTUWYZ][ABCDEFGHKLMNOPQRSTUVWXY][0-9][0-9]?)|(([ABCDEFGHIJKLMNOPRSTUWYZ][0-9][ABCDEFGHJKSTUW])|([ABCDEFGHIJKLMNOPRSTUWYZ][ABCDEFGHKLMNOPQRSTUVWXY][0-9][ABEHMNPRVWXY])))) [0-9][ABDEFGHJLNPQRSTUWXYZ]{2})/;
    // const postcode = rawpcode.toUpperCase();

    if (scotRe.test(papc)) {
    window.document.location = './scotland.html';
    } else if (crownRe.test(papc)) {
    window.document.location = './crowndep.html';
    } else if (papc && sale_price) {
        localStorage.setItem('pafl', pafl)
        localStorage.setItem('pasl', pasl)
        localStorage.setItem('papt', papt)
        localStorage.setItem('papc', papc)
        localStorage.setItem('sale_price', sale_price)
        localStorage.setItem('rate', rate)
        localStorage.setItem('sp_num', sp_num)
        localStorage.setItem('price', price)
        localStorage.setItem('max_value', 1500000)
        const avmpost = "N21 2AR";

        if (papc.valueOf() === avmpost.valueOf()) {
            localStorage.setItem('max_value', 720000)
        } else if (lonRe.test(papc)) {
            localStorage.setItem('max_value', 3000000)
        }

        window.document.location = './app-page.html';
    } else {
        notify.showNotification('top', 'center');
        return false;
    }
}

notify = {
    showNotification: function(from, align){
        color = 'info';

        $.notify({
            icon: "now-ui-icons ui-1_bell-53",
            message: "Please complete all the required fields."

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


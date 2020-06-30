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
    const rate = '0.0005'
    const sp_num = Number(sale_price.replace(/[^0-9.-]+/g,""));
    const price = parseInt(sp_num * rate)
    const scotRe = /(^G\d)|(^AB\d)|(^IV\d)|(^KW\d)|(^PH\d)|(^DD\d)|(^PA\d)|(^FK\d)|(^KY\d)|(^KA\d)|(^ML\d)|(^EH\d)|(^TD\d)|(^DG\d)|(^HS\d)|(^ZE\d)/;
    const crownRe = /(^JE\d)|(^GY\d)|(^IM\d)/;
    const postRe = /(GIR 0AA)|((([ABCDEFGHIJKLMNOPRSTUWYZ][0-9][0-9]?)|(([ABCDEFGHIJKLMNOPRSTUWYZ][ABCDEFGHKLMNOPQRSTUVWXY][0-9][0-9]?)|(([ABCDEFGHIJKLMNOPRSTUWYZ][0-9][ABCDEFGHJKSTUW])|([ABCDEFGHIJKLMNOPRSTUWYZ][ABCDEFGHKLMNOPQRSTUVWXY][0-9][ABEHMNPRVWXY])))) [0-9][ABDEFGHJLNPQRSTUWXYZ]{2})/;
    // const postcode = rawpcode.toUpperCase();

    if (scotRe.test(papc)) {
    window.document.location = './scotland.html';
    } else if (crownRe.test(papc)) {
    window.document.location = './crowndep.html';
    } else if (postcode && sale_price) {
        localStorage.setItem('pafl', pafl)
        localStorage.setItem('pasl', pasl)
        localStorage.setItem('papt', papt)
        localStorage.setItem('papc', papc)
        localStorage.setItem('sale_price', sale_price)
        localStorage.setItem('rate', rate)
        localStorage.setItem('sp_num', sp_num)
        localStorage.setItem('price', price)
        window.document.location = './wizard.html';
    }
}


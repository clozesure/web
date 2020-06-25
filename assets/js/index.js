const calcpc = document.getElementById("calcpc");
const calcsp = document.getElementById("calcsp");
const calcbtn = document.getElementById("calcbtn");


calcbtn.onclick = function(){
    const rawpcode = calcpc.value;
    const sale_price = calcsp.value;
    const rate = '0.0005'
    const sp_num = Number(sale_price.replace(/[^0-9.-]+/g,""));
    const price = parseInt(sp_num * rate)
    const scotRe = /AB|IV|KW|PH|DD|PA|FK|KY|KA|ML|EH|TD|DG|HS|ZE|G\d/;
    const postRe = /(GIR 0AA)|((([ABCDEFGHIJKLMNOPRSTUWYZ][0-9][0-9]?)|(([ABCDEFGHIJKLMNOPRSTUWYZ][ABCDEFGHKLMNOPQRSTUVWXY][0-9][0-9]?)|(([ABCDEFGHIJKLMNOPRSTUWYZ][0-9][ABCDEFGHJKSTUW])|([ABCDEFGHIJKLMNOPRSTUWYZ][ABCDEFGHKLMNOPQRSTUVWXY][0-9][ABEHMNPRVWXY])))) [0-9][ABDEFGHJLNPQRSTUWXYZ]{2})/;
    const postcode = rawpcode.toUpperCase();

    if (scotRe.test(postcode)) {
    window.document.location = './scotland.html';
    } else if (postcode && sale_price) {
        localStorage.setItem('postcode', postcode)
        localStorage.setItem('sale_price', sale_price)
        localStorage.setItem('rate', rate)
        localStorage.setItem('sp_num', sp_num)
        localStorage.setItem('price', price)
        window.document.location = './app-page.html';
    }
}
  //    if (postRe.test(postcode)) {
  //  } else {
  //      alert("Postcode is invalid")
  //      }
  //

const calcpc = document.getElementById("calcpc");
const calcsp = document.getElementById("calcsp");
const calcbtn = document.getElementById("calcbtn");


calcbtn.onclick = function(){
    const postcode = calcpc.value;
    const sale_price = calcsp.value;
    const rate = '0.0005'
    const sp_num = Number(sale_price.replace(/[^0-9.-]+/g,""));
    const price = parseInt(sp_num * rate)

    if (postcode && sale_price) {
        localStorage.setItem('postcode', postcode)
        localStorage.setItem('sale_price', sale_price)
        localStorage.setItem('rate', rate)
        localStorage.setItem('sp_num', sp_num)
        localStorage.setItem('price', price)
        window.document.location = './app-page.html';
    };
};

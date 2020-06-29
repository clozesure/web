const o1fn = document.getElementById("o1fn");
const o1ln = document.getElementById("o1ln");
const o1Email = document.getElementById("o1Email");
const b1fn = document.getElementById("b1fn");
const b1ln = document.getElementById("b1ln");
const price = document.getElementById("price");
const postcode = document.getElementById("prop_code");
const first_line = document.getElementById("first_line");
const second_line = document.getElementById("second_line");
const post_town = document.getElementById("post_town");
const sale_price = document.getElementById("sale_price");
const applybtn = document.getElementById("apply");
// document.getElementById("input").value = "Start typing an address here..."
document.getElementById("first_line").value = "Property Name/Number";
document.getElementById("prop_code").value = "Postcode";

value_head = localStorage.getItem('price');
value = localStorage.getItem('price');
p_code = localStorage.getItem('postcode');
s_price = localStorage.getItem('sale_price');
price.innerHTML = '£' + value;
//first_line.innerHTML = 'Property Name/Number';
//postcode.innerHTML = 'Postcode';
// postcode.innerHTML = p_code;
sale_price.innerHTML = '£' + s_price;

applybtn.onclick = function(){
    const own1fn = o1fn.value;
    const own1ln = o1ln.value;
    const own1Email = o1Email.value;
    const buy1fn = b1fn.value;
    const buy1ln = b1ln.value;
    const pafl = first_line.value;
    const pasl = second_line.value;
    const papt = post_town.value;
    const papc = postcode.value;

    if (o1fn && o1ln) {
        localStorage.setItem('o1fn', own1fn)
        localStorage.setItem('o1ln', own1ln)
        localStorage.setItem('o1Email', own1Email)
        localStorage.setItem('b1fn', buy1fn)
        localStorage.setItem('b1ln', buy1ln)
        localStorage.setItem('pafl', pafl)
        localStorage.setItem('pasl', pasl)
        localStorage.setItem('papt', papt)
        localStorage.setItem('papc', papc)
        window.document.location = './profile.html';
    }
}

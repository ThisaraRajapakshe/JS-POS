let product = [
    {id: 1, name: 'Smartphone', price: 100000},
    {id: 2, name: 'Laptop', price: 292175},
    {id: 3, name: 'Tablet', price: 64675},
    {id: 4, name: 'Smartwatch', price: 48425},
    {id: 5, name: 'Wireless Earbuds', price: 25675},
    {id: 6, name: 'Bluetooth Speaker', price: 19175},
    {id: 7, name: 'Gaming Headset', price: 41925},
    {id: 8, name: 'Walkie-Talkie', price: 15875},
    {id: 9, name: 'Wireless Router', price: 32175},
    {id: 10, name: 'Landline Phone', price: 12675},
    {id: 11, name: 'Webcam', price: 28925},
    {id: 12, name: 'Microphone', price: 38675},
    {id: 13, name: 'Portable WiFi Hotspot', price: 41925},
    {id: 14, name: 'VR Headset', price: 97175},
    {id: 15, name: 'Satellite Phone', price: 194675},
    {id: 16, name: 'Two-Way Radio', price: 25675},
    {id: 17, name: 'USB-C Hub', price: 9435},
    {id: 18, name: 'Ethernet Cable', price: 6175},
    {id: 19, name: 'Power Bank', price: 15875},
    {id: 20, name: 'Wireless Keyboard', price: 25675},
    {id: 21, name: 'Wireless Mouse', price: 12675}
];
let amount = 1;
let subTot;
let cart = [];
load(0);

function load(id){

    let searchResults = product.filter(element => id == 0 || element.id == id);

    document.getElementById("productListDiv").innerHTML = '';

    searchResults.forEach(element => {
        const div = document.createElement('div')
        div.classList.add("display-card");
        const p = document.createElement('p');
        p.innerText =  element.name +' : Rs: ' + element.price;
        div.append(p);
        div.addEventListener('click', function() {
            addToCart(element);
        });
        document.getElementById("productListDiv").append(div);
    });
}
function amountOnChange(newAmount){
    amount = Number(newAmount);
}
function addToCart(product){
    subTot = product.price * amount;
    product.subTotal = subTot;
    cart.push({product: product});
    console.log(subTot);
    console.log(product);
}

function calculateSum(){
    total = 0;
    cart.forEach(cart => {
        total += cart.product.subTotal;
    });
    document.getElementById('displayTotTxt').innerHTML = "Rs."+total;
}


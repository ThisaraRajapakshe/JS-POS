let products = [
    {id: 1, name: 'Smartphone', price: 299},
    {id: 2, name: 'Laptop', price: 899},
    {name: 'Tablet', price: 199},
    {name: 'Smartwatch', price: 149},
    {name: 'Wireless Earbuds', price: 79},
    {name: 'Bluetooth Speaker', price: 59},
    {name: 'Gaming Headset', price: 129},
    {name: 'Walkie-Talkie', price: 49},
    {name: 'Wireless Router', price: 99},
    {name: 'Landline Phone', price: 39},
    {name: 'Webcam', price: 89},
    {name: 'Microphone', price: 119},
    {name: 'Portable WiFi Hotspot', price: 129},
    {name: 'VR Headset', price: 299},
    {name: 'Satellite Phone', price: 599},
    {name: 'Two-Way Radio', price: 79},
    {name: 'USB-C Hub', price: 29},
    {name: 'Ethernet Cable', price: 19},
    {name: 'Power Bank', price: 49},
    {name: 'Wireless Keyboard', price: 79},
    {name: 'Wireless Mouse', price: 39}
];

products.forEach(element => {
    const div = document.createElement('div')
    //div.innerHTML = element.name + ' : Rs: ' + element.price;
    div.style = "border: solid"

    const p = document.createElement('p');
    p.innerText =  element.name + ' : Rs: ' + element.price;

    div.append(p);

    document.getElementById("productListDiv").append(div);
});

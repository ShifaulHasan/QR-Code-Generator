let qrinput = document.getElementById("qr-input");
let qrbutton = document.getElementById("qr-button");
let qrimg = document.getElementById("qr-img");

qrbutton.addEventListener('click', () => {
    let inputvalue = qrinput.value; 

    if (!inputvalue) {
        alert('Please provide original link');
    } else {
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`; 
    }
});

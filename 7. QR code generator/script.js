let imgBox = document.getElementById("imgBox");
let qrIMg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");



function generateQR(){
    qrIMg.src = link + qrText.value;
}
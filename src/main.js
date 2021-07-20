const canvas = document.getElementById('signature');
const ctx = canvas.getContext('2d', {alpha: false});
const bg_image = new Image(canvas.width, canvas.height);
bg_image.crossOrigin = 'anonymous';
bg_image.onload = drawBackground;

const full_name_input = document.getElementById('full-name');
const title_input = document.getElementById('title');
const phone_input = document.getElementById('phone-number');
const phone2_input = document.getElementById('phone-number2');
const email_input = document.getElementById('email');

const download_button = document.getElementById('download');

full_name_input.oninput = draw;
title_input.oninput = draw;
phone_input.oninput = draw;
phone2_input.oninput = draw;
email_input.oninput = draw;

download_button.onclick = downloadSignature;

function draw() {
    drawBackground();
    drawFullName();
}

function drawBackground() {
    ctx.drawImage(bg_image, 0, 0);
    drawFullName();
    drawTitle();
    drawPhoneNumber();
    drawEmail();
}

function drawFullName() {
    ctx.font = '100 14px MontserratMedium';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(full_name_input.value, 16, 32);
}

function drawTitle() {
    ctx.font = '10px MontserratMedium, Arial';
    ctx.fillStyle = '#ffffff';
    title = title_input.value;
    ctx.fillText(title_input.value, 16, 44);
}

function drawPhoneNumber() {
    ctx.font = '9px MontserratMedium, Arial';
    ctx.fillStyle = '#ffffff';
    var p1 = phone_input.value;
    var p2 = phone2_input.value;
    var phone_number = "";
    if (p1 && p2) {
        phone_number = p1 + " | " + p2;
    } else if (p1) {
        phone_number = p1;
    } else if (p2) {
        phone_number = p2;
    }
    ctx.fillText(phone_number, 16, 68);
}

function drawEmail() {
    ctx.font = '9px MontserratMedium, Arial';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(email_input.value, 16, 78);
}

function downloadSignature() {
    var image = canvas.toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');
    download_button.setAttribute('href', image);
}
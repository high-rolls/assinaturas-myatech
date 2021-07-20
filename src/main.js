const canvas = document.getElementById('signature');
const ctx = canvas.getContext('2d', {alpha: false});
const bg_image = new Image(canvas.width, canvas.height);
bg_image.src = 'assets/bg-image.jpg';
bg_image.onload = draw;

const full_name_input = document.getElementById('full-name');
const title_input = document.getElementById('title');
const phone_input = document.getElementById('phone-number');
const phone2_input = document.getElementById('phone-number2');
const email_input = document.getElementById('email');
const skype_input = document.getElementById('skype');

const download_button = document.getElementById('download');

full_name_input.oninput = draw;
title_input.oninput = draw;
phone_input.oninput = draw;
phone2_input.oninput = draw;
email_input.oninput = draw;
skype_input.oninput = draw;

download_button.onclick = downloadSignature;

function draw() {
    ctx.drawImage(bg_image, 0, 0);

    ctx.fillStyle = '#ffffff';
    ctx.font = '100 14px MontserratMedium, sans-serif';
    ctx.fillText(full_name_input.value, 16, 32);
    
    ctx.font = '10px MontserratMedium, sans-serif';
    ctx.fillText(title_input.value, 16, 44);

    ctx.font = '9px MontserratMedium, sans-serif';

    phone = joinStrings(phone_input.value, phone2_input.value, ' | ');
    ctx.fillText(phone, 16, 60);
    ctx.fillText(email_input.value, 16, 70);
    if (skype_input.value) {
        ctx.fillText('Skype: ' + skype_input.value, 16, 80);
    }
}

/** join s1 and s2, with the separator sep if both strings are non empty,
 * otherwise return either string that is not empty, or an empty string in the
 * case that both of them are empty.
 */
function joinStrings(s1, s2, sep) {
    var res = '';
    if (s1) {
        res = s1;
        if (s2) {
            res += sep + s2;
        }
    } else if (s2) {
        res = s2;
    }
    return res;
}

function downloadSignature() {
    var image = canvas.toDataURL();
    download_button.href = image;
}
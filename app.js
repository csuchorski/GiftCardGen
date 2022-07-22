const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const amountInput = document.getElementById('amountInput')
const dateInput = document.getElementById('dateInput')
const saveBtn = document.getElementById('saveBtn')

function draw() {
    const img = new Image();
    img.addEventListener('load', function () {
        ctx.drawImage(img, 0, 0);
        //Font size for the amount
        ctx.font = '55px gabriola'
        ctx.fillText("50", 450, 300)

        //Font size for the date
        ctx.font = '40px gabriola'
        ctx.fillText("05.12.2022", 410, 361)
    })
    img.src = "images/bon.png";
}


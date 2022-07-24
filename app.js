const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const amountInput = document.getElementById('amountInput')
const dateInput = document.getElementById('dateInput')
const saveBtn = document.getElementById('saveBtn')

function drawInit() {
    const img = new Image();
    img.crossOrigin = "Anonymous"
    img.src = "images/bon.png";
    img.addEventListener('load', function () {
        ctx.drawImage(img, 0, 0);

        ctx.textAlign = "center"
        //Font size for the amount
        ctx.font = 'bold 55px gabriola'
        ctx.fillText(amountInput.value, 473, 305, 75)

        //Font size for the date
        ctx.font = '40px gabriola'
        ctx.fillText(dateInput.value, 480, 361)
    })

}

function downloadImage() {
    let image = canvas.toDataURL()
    let link = document.createElement('a');
    link.download = "bon.png"
    link.href = image
    link.click()
}

amountInput.addEventListener('change', drawInit)
dateInput.addEventListener('change', drawInit)

saveBtn.addEventListener('click', downloadImage)
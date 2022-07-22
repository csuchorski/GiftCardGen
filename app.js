const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function draw() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        const img = new Image();
        img.addEventListener('load', function () {
            ctx.drawImage(img, 0, 0);
        })
        img.src = "images/bon.png";
    }
}


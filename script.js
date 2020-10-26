const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');



const renderWatch = () => {
    let date = new Date();
    let sec = date.getSeconds();
    let min = date.getMinutes();
    let hrs = date.getHours();
    const romanNumbers = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']


    ctx.setTransform(1, 0, 0, 1, canvas.offsetWidth / 2, canvas.offsetHeight / 2);

    ctx.clearRect(-(canvas.offsetWidth / 2), -(canvas.offsetHeight / 2), canvas.offsetWidth, canvas.offsetHeight);

        ctx.lineWidth = 1;
        ctx.font = "20px arial";
    for (let i = 1; i <= 12; i++) {
        ctx.setTransform(1, 0, 0, 1, canvas.offsetWidth / 2, canvas.offsetHeight / 2);
        ctx.rotate((i * 30) * Math.PI / 180);
        if (i <= 3) {
            ctx.fillText(`${romanNumbers[i - 1]}`, (romanNumbers[i - 1].length * -5) / 2, -167)
        } else {
            ctx.fillText(`${romanNumbers[i - 1]}`, romanNumbers[i - 1].length * -5, -167)
        }

    }

    ctx.lineCap = 'butt';
    for (let i = 1; i <= 61; i++) {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.rotate(6 * Math.PI / 180);
        if (i % 5 === 0) {
            ctx.lineWidth = 4;
            ctx.moveTo(0, -200);
            ctx.lineTo(0, -187);
        } else {
            ctx.moveTo(0, -200);
            ctx.lineTo(0, -190);
        }
        ctx.stroke();
    }

    ctx.lineCap = 'round';

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.arc(0, 0, 200, 0, Math.PI * 2);
    ctx.stroke();

    ctx.translate(canvas.offsetWidth / 2, canvas.offsetHeight / 2);

    ctx.setTransform(1, 0, 0, 1, canvas.offsetWidth / 2, canvas.offsetHeight / 2);
    ctx.rotate((sec * 6) * Math.PI / 180);
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -160);
    ctx.stroke();

    ctx.setTransform(1, 0, 0, 1, canvas.offsetWidth / 2, canvas.offsetHeight / 2);
    ctx.rotate((min * 6) * Math.PI / 180);
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -120);
    ctx.stroke();

    ctx.setTransform(1, 0, 0, 1, canvas.offsetWidth / 2, canvas.offsetHeight / 2);
    ctx.rotate((hrs * 30) * Math.PI / 180);
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -80);
    ctx.stroke();
}

renderWatch();
setInterval(renderWatch, 1000)
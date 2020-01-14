function drawAxis() {

    //axis
    let height = canvas.height;
    let width = canvas.width;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width / 2, height);
    ctx.lineTo(width / 2, 0);
    ctx.lineTo(width / 2 + 3, 7);
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2 - 3, 7);
    drawDigitsX(ctx, size, width, height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.lineTo(width - 7, height / 2 + 3);
    ctx.moveTo(width, height / 2);
    ctx.lineTo(width - 7, height / 2 - 3);
    drawDigitsY(ctx, size, width, height);
    ctx.stroke();

    drawTextX(ctx, size, width, height,4)
    drawTextY(ctx, size, width, height,4)
}

function drawRectangle(){
    //borders
    let height = canvas.height;
    let width = canvas.width;
    ctx.strokeStyle = "#604343";
    ctx.fillStyle = "#8a8586";
    ctx.fillRect(width / 2 - 3 * size, height / 2 - 5 * size, 6 * size, 8 * size);
}

function drawDigitsX(ctx, i, width, height) {
    let t = width / 2;
    for (let j = 0; j < 5; j++) {
        t += i;
        ctx.moveTo(t, height / 2 + 3);
        ctx.lineTo(t, height / 2 - 3)
    }
    t = width / 2;
    for (let j = 0; j < 5; j++) {
        t -= i;
        ctx.moveTo(t, height / 2 + 3);
        ctx.lineTo(t, height / 2 - 3)
    }
}

function drawDigitsY(ctx, i, width, height) {
    let t = height / 2;
    for (let j = 0; j < 5; j++) {
        t += i;
        ctx.moveTo(width / 2 + 3, t);
        ctx.lineTo(width / 2 - 3, t);
    }
    t = height / 2;
    for (let j = 0; j < 5; j++) {
        t -= i;
        ctx.moveTo(width / 2 + 3, t);
        ctx.lineTo(width / 2 - 3, t);
    }
}




function drawTextX(context, i, width, height,r){
    context.font = "11px Helvetica";
    context.strokeStyle="black";
    let t = width / 2;
    t += i;
    for (let j = 1; j < 6; j++) {
        context.strokeText(j/4*r, t,height / 2+14 );
        t += i;
    }
    t = width / 2;
    for (let j = 0; j < 7; j++) {
        context.strokeText(-j/4*r, t, height / 2 +14);
        t -= i;
    }
}

function drawTextY(context, i, width, height,r) {
    let t = height / 2;
    context.font = "11px Helvetica";
    context.strokeStyle="black";
    t += i;
    for (let j = 1; j < 6; j++) {

        context.strokeText(-j/4*r, width / 2+4, t+8);
        t += i;
    }
    t = height / 2;
    for (let j = 0; j < 6; j++) {
        context.strokeText(j/4*r, width / 2+4, t+8);
        t -= i;
    }
}








function drawArea(r) {
    let height = canvas.height;
    let width = canvas.width;
    ctx.strokeStyle = "#eaeeee";
    ctx.fillStyle = "#e3e1e3";
    ctx.beginPath();
    ctx.moveTo(width / 2, height / 2);
    ctx.lineTo(width / 2 - r/2 * size, height / 2);
    ctx.lineTo(width / 2 - r/2 * size, height / 2 - r  * size);
    ctx.lineTo(width / 2, height / 2 - r * size );
    ctx.lineTo(width / 2, height / 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, r / 2 * size, 0, -Math.PI/2, true);
    ctx.lineTo(width / 2, height / 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(width / 2, height / 2);
    ctx.lineTo(width / 2 + r / 2 * size, height / 2);
    ctx.lineTo(width / 2, height / 2 + r / 2 * size);
    ctx.lineTo(width / 2, height / 2);
    ctx.fill();
}

function drawPoint(x, y, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(canvas.width / 2 + x * size, canvas.height / 2 - y * size, 2, 0, Math.PI * 2, true);
    ctx.fill();
}

function clearCanvas() {
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
}

function drawPointsFromTable() {
    let table = document.getElementById("table-form:result-table").childNodes[3];
    for (let row of table.children) {
        let x = Number(row.children[0].innerText);
        let y = Number(row.children[1].innerText);
        let ch = row.children[3].innerText;
        drawPoint(x, y, isPointInArea(x, y, radius) ? "lime" : "red")
    }
}

function drawResize() {
    table = document.getElementById("table-form:result-table").childNodes[3];
    counter = 0;
    drawStep();
}

function drawStep() {
    console.log(counter);
    if (counter < table.children.length) {
        let row = table.children[counter];
        if (!row.children[0].innerText) return;
        let x = Number(row.children[0].innerText);
        let y = Number(row.children[1].innerText);
        xCanvas.value = x;
        yCanvas.value = y;
        counter++;
        checkResize();
    }
}

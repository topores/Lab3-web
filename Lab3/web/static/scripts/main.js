let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let size = Math.min(canvas.width, canvas.height) / 10 - 2;
let radius = 1;

let xCanvas = document.getElementById("canvas-form:xCanvas");
let yCanvas = document.getElementById("canvas-form:yCanvas");
let counter;
let table = document.getElementById("table-form:result-table").childNodes[3];
drawRectangle();
drawArea(radius);
drawAxis();
drawResize();

let link_3 = document.getElementById("main-form:y-3");
let link_2 = document.getElementById("main-form:y-2");
let link_1 = document.getElementById("main-form:y-1");
let link0 = document.getElementById("main-form:y0");
let link1 = document.getElementById("main-form:y1");
let link2 = document.getElementById("main-form:y2");
let link3 = document.getElementById("main-form:y3");
let link4 = document.getElementById("main-form:y4");
let link5 = document.getElementById("main-form:y5");
link_3.addEventListener("click", function (ev) {
    console.log("-3");
    document.getElementById("main-form:y").value = -3;
    setDefinedY(-3);
});
link_2.addEventListener("click", function (ev) {
    document.getElementById("main-form:y").value = -2;
    setDefinedY(-2);
});
link_1.addEventListener("click", function (ev) {
    document.getElementById("main-form:y").value = -1;
    setDefinedY(-1);
});
link0.addEventListener("click", function (ev) {
    document.getElementById("main-form:y").value = 0;
    setDefinedY(0);
});
link1.addEventListener("click", function (ev) {
    document.getElementById("main-form:y").value = 1;
    setDefinedY(1);
});
link2.addEventListener("click", function (ev) {
    document.getElementById("main-form:y").value = 2;
    setDefinedY(2);
});
link3.addEventListener("click", function (ev) {
    document.getElementById("main-form:y").value = 3;
    setDefinedY(3);
});
link4.addEventListener("click", function (ev) {
    document.getElementById("main-form:y").value = 4;
    setDefinedY(4);
    console.log()
});
link5.addEventListener("click", function (ev) {
    document.getElementById("main-form:y").value = 5;
    setDefinedY(5);
});

function setDefinedY(i) {
    link_3.style.color = 'white';
    link_2.style.color = 'white';
    link_1.style.color = 'white';
    link0.style.color = 'white';
    link1.style.color = 'white';
    link2.style.color = 'white';
    link3.style.color = 'white';
    link4.style.color = 'white';
    link5.style.color = 'white';
    switch (i) {
        case -3:
            link_3.style.color = 'lawngreen';
            break;
        case -2:
            link_2.style.color = 'lawngreen';
            break;
        case -1:
            link_1.style.color = 'lawngreen';
            break;
        case 0:
            link0.style.color = 'lawngreen';
            break;
        case 1:
            link1.style.color = 'lawngreen';
            break;
        case 2:
            link2.style.color = 'lawngreen';
            break;
        case 3:
            link3.style.color = 'lawngreen';
            break;
        case 4:
            link4.style.color = 'lawngreen';
            break;
        case 5:
            link5.style.color = 'lawngreen';
            break;
    }
    document.getElementById("warningY").innerText = '';

}


let linkr1 = document.getElementById("main-form:r1");
let linkr2 = document.getElementById("main-form:r2");
let linkr3 = document.getElementById("main-form:r3");
let linkr4 = document.getElementById("main-form:r4");
let linkr5 = document.getElementById("main-form:r5");

linkr1.addEventListener("click", function (ev) {
    document.getElementById("main-form:r").value = 1;
    setDefinedR(1);
});
linkr2.addEventListener("click", function (ev) {
    document.getElementById("main-form:r").value = 2;
    setDefinedR(2);
});
linkr3.addEventListener("click", function (ev) {
    document.getElementById("main-form:r").value = 3;
    setDefinedR(3);
});
linkr4.addEventListener("click", function (ev) {
    document.getElementById("main-form:r").value = 4;
    setDefinedR(4);
    console.log()
});
linkr5.addEventListener("click", function (ev) {
    document.getElementById("main-form:r").value = 5;
    setDefinedR(5);
});


function setDefinedR(i) {
    linkr1.style.color = 'white';
    linkr2.style.color = 'white';
    linkr3.style.color = 'white';
    linkr4.style.color = 'white';
    linkr5.style.color = 'white';
    switch (i) {
        case 1:
            linkr1.style.color = 'lawngreen';
            break;
        case 2:
            linkr2.style.color = 'lawngreen';
            break;
        case 3:
            linkr3.style.color = 'lawngreen';
            break;
        case 4:
            linkr4.style.color = 'lawngreen';
            break;
        case 5:
            linkr5.style.color = 'lawngreen';
            break;
    }
    document.getElementById("warningR").innerText = '';
    handleRChange()

}






function handleRChange() {
    clearCanvas();
    radius = Number(document.getElementById("main-form:r").value);
    drawRectangle();
    drawArea(radius);
    drawAxis();
    setTimeout(() => drawResize(), 10);
}

function handleSubmit() {
    clearCanvas();
    drawRectangle();
    drawArea(radius);
    drawAxis();
    drawResize();
}

function isPointInArea(x, y, r) {
    console.log(x, y, r);
    //y=-y;
    return ((x <= 0 && y <= 0 && false || (x >= 0 && y >= 0 && x**2 + y**2 <= r**2 / 4) || (x <= 0 && y >= 0 && x<=r &&  y>=(r/2)) || (x >= 0 && y >= 0 && y>=-r/2+x )));
}

function handleCanvasClick(event) {
    let obj = event.target;
    let x = Number(((event.pageX - window.pageXOffset - obj.getBoundingClientRect().x - obj.width / 2) / size).toFixed(2));
    let y = Number((-(event.pageY - window.pageYOffset - obj.getBoundingClientRect().y - obj.height / 2) / size).toFixed(2));
    console.log(x);
    console.log(y);
    if (x >= -3 && x <= 3 && y >= -3 && y <= 5) {
        xCanvas.value = x;
        yCanvas.value = y;
        checkCanvas();
    }
}




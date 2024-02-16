function calculateTriangleArea() {
    const triangleBase = document.getElementById("triangle-b");
    const triangleBaseInput = triangleBase.value;
    const base = parseFloat(triangleBaseInput);

    const triangleHeight = document.getElementById("triangle-h");
    const triangleHeightInput = triangleHeight.value;
    const height = parseFloat(triangleHeightInput);

    const area = 0.5 * base * height;
    const triangleArea = document.getElementById("triangle-area");
    triangleArea.innerText = area;

    triangleBase.value =""
    triangleHeight.value = ""

    const output = document.getElementById('output');
    const result = document.createElement('p')
    result.innerText = `Triangle Area = ${area.toFixed(2)} cm`
    output.appendChild(result);
}
function calculateRectangle() {
    const rectangleWidth = document.getElementById("rectangle-w");
    const rectangleWidthInput = rectangleWidth.value;
    const width = parseFloat(rectangleWidthInput);

    const rectangleLength = document.getElementById("rectangle-l");
    const rectangleLengthInput = rectangleLength.value;
    const length = parseFloat(rectangleLengthInput);

    const area = width * length;
    const rectangleArea = document.getElementById("rectangle-area");
    rectangleArea.innerText = area;

    rectangleWidth.value =""
    rectangleLength.value= ""

    const output = document.getElementById('output');
    const result = document.createElement('p')
    result.innerText = `Rectangle Area = ${area.toFixed(2)} cm`
    output.appendChild(result);
}

// parallelogram

function calculateParallelogram() {
    const parallelogramBase = document.getElementById("parallelogram-b");
    const parallelogramBaseInput = parallelogramBase.value;
    const base = parseFloat(parallelogramBaseInput);

    const parallelogramHeight = document.getElementById("parallelogram-h");
    const parallelogramHeightInput = parallelogramHeight.value;
    const height = parseFloat(parallelogramHeightInput);

    const area = base * height;
    const parallelogramArea = document.getElementById("parallelogram-area");
    parallelogramArea.innerText = area;

    parallelogramBase.value=""
    parallelogramHeight.value=""

    const output = document.getElementById('output');
    const result = document.createElement('p')
    result.innerText = `Parallelogram Area = ${area.toFixed(2)} cm`
    output.appendChild(result);
}

// rhombus area
function calculateRhombusArea() {
    const rhombusD1 = document.getElementById("rhombus-d1");
    const rhombusD1Input = rhombusD1.value;
    const d1 = parseFloat(rhombusD1Input);

    const rhombusD2 = document.getElementById("rhombus-d2");
    const rhombusD2Input = rhombusD2.value;
    const d2 = parseFloat(rhombusD2Input);

    const area = 0.5 * d1 * d2;
    const rhombusArea = document.getElementById("rhombus-area");
    rhombusArea.innerText = area;

    rhombusD2.value=""
    rhombusD1.value=""

    const output = document.getElementById('output');
    const result = document.createElement('p')
    result.innerText = `Rhombus Area = ${area.toFixed(2)} cm`
    output.appendChild(result);
}

// pentagon

function calculatePentagonArea() {
    const pentagonBase = document.getElementById("pentagon-p");
    const pentagonBaseInput = pentagonBase.value;
    const base = parseFloat(pentagonBaseInput);

    const pentagonHeight = document.getElementById("pentagon-b");
    const pentagonHeightInput = pentagonHeight.value;
    const height = parseFloat(pentagonHeightInput);

    const area = 0.5 * base * height;
    const pentagonArea = document.getElementById("pentagon-area");
    pentagonArea.innerText = area;

    pentagonBase.value= ""
    pentagonHeight.value= ""


    const output = document.getElementById('output');
    const result = document.createElement('p')
    result.innerText = `Pentagon Area = ${area.toFixed(2)} cm`
    output.appendChild(result);
}

//  Ellipse

function calculatePentagonAre() {
    const pentagonBase = document.getElementById("Ellipse-a");
    const pentagonBaseInput = pentagonBase.value;
    const base = parseFloat(pentagonBaseInput);

    const pentagonHeight = document.getElementById("Ellipse-b");
    const pentagonHeightInput = pentagonHeight.value;
    const height = parseFloat(pentagonHeightInput);

    const area = 3.1416 * base * height;
    const pentagonArea = document.getElementById("Ellipse-area");
    pentagonArea.innerText = area.toFixed(2);
    
    pentagonBase.value= "";
    pentagonHeight.value = "";

    const output = document.getElementById('output');
    const result = document.createElement('p')
    result.innerText = `Ellipse Area = ${area.toFixed(2)} cm`
    output.appendChild(result); 

    



}
 function removeItem(){
    const removeItem = document.getElementById('output');
    removeItem.remove();

 }


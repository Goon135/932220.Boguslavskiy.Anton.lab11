const container = document.getElementById('container');
const shapeCountInput = document.getElementById('shapeCount');
const squareBtn = document.getElementById('squareBtn');
const triangleBtn = document.getElementById('triangleBtn');
const circleBtn = document.getElementById('circleBtn');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function createSquare() {
    const size = getRandomInt(50, 100);
    const left = getRandomInt(0, window.innerWidth - size);
    const top = getRandomInt(0, window.innerHeight - size);

    const square = document.createElement('div');
    square.className = 'shape';
    square.style.border = 'solid 1px black';
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    square.style.left = `${left}px`;
    square.style.top = `${top}px`;
    square.style.backgroundColor = 'red';

    addShapeEvents(square);
    container.appendChild(square);
}

function createTriangle() {
    const triangle = document.createElement('div');
    triangle.className = 'shape triangle';
    const left = getRandomInt(0, window.innerWidth - 100);
    const top = getRandomInt(0, window.innerHeight - 100);
    
    triangle.style.left = `${left}px`;
    triangle.style.top = `${top}px`;

    addShapeEvents(triangle);
    container.appendChild(triangle);
}

function createCircle() {
    const size = getRandomInt(50, 100);
    const left = getRandomInt(0, window.innerWidth - size);
    const top = getRandomInt(0, window.innerHeight - size);

    const circle = document.createElement('div');
    circle.className = 'shape';
    circle.style.border = 'solid 1px black'
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.left = `${left}px`;
    circle.style.top = `${top}px`;
    circle.style.backgroundColor = 'green';
    circle.style.borderRadius = '50%';

    addShapeEvents(circle);
    container.appendChild(circle);
}

function addShapeEvents(shape) {
    shape.addEventListener('click', () => {
        if(shape.style.backgroundColor === 'yellow' || shape.style.borderBottom === '100px solid yellow'){
            container.removeChild(shape);
        }
        if (shape.classList.contains('triangle')) {
            shape.style.borderBottom = '100px solid yellow';
        } else if (shape.classList.contains('shape')) {
            shape.style.backgroundColor = 'yellow';
        } else {
            shape.style.backgroundColor = 'yellow';
        }
    });
}

function addShapes(shapeType) {
    const count = parseInt(shapeCountInput.value, 10);
    if (!isNaN(count) && count > 0) {
        for (let i = 0; i < count; i++) {
            if (shapeType === 'square') {
                createSquare();
            } else if (shapeType === 'triangle') {
                createTriangle();
            } else if (shapeType === 'circle') {
                createCircle();
            }
        }
    } else {
        alert("Введите корректное число!");
    }
}

squareBtn.addEventListener('click', () => addShapes('square'));
triangleBtn.addEventListener('click', () => addShapes('triangle'));
circleBtn.addEventListener('click', () => addShapes('circle'));
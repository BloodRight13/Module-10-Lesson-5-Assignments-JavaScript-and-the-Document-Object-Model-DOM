// Task 1 in 3.html

// Task 2
function changeColor() {
    var box = document.getElementById('box');
    box.style.backgroundColor = box.style.backgroundColor === 'lightblue' ? 'lightcyan' : 'lightblue';
}

// Task 3
function toggleSize() {
    var circle = document.getElementById('circle');
    if (circle.style.width === '150px') {
        circle.style.width = '100px';
        circle.style.height = '100px';
    } else {
        circle.style.width = '150px';
        circle.style.height = '150px';
    }
}

function changeTextStyle() {
    var text = document.getElementById('text');
    text.style.color = text.style.color === 'black' ? 'red' : 'black';
    text.style.fontWeight = text.style.fontWeight === 'bold' ? 'normal' : 'bold';
}

function changeBorder() {
    var container = document.getElementById('container');
    container.style.border = container.style.border === '1px solid black' ? '2px dashed red' : '1px solid black';
}

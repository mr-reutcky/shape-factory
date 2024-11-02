'use strict';

function select(selector, scope = document) {
  return scope.querySelector(selector);
}

function listen(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

const selectShape = select('.shape-select');
const selectColor = select('.color-select');
const create = select('.create');
const box = select('.box');
const shapeInfo = select('.shape-info');
const maxShapes = 18;
let shapeCount = 0;

class Shape {
  constructor(shape, color) {
    this.shape = shape;
    this.color = color;
  }

  createElement() {
    const shapeElement = document.createElement('div');
    shapeElement.classList.add('shape');
    shapeElement.style.backgroundColor = this.color;

    if (this.shape === 'Circle') {
      shapeElement.style.borderRadius = '50%';
    } else {
      shapeElement.style.borderRadius = '5px';
    }

    return shapeElement;
  }
}

function makeNewShape() {
  if (shapeCount < maxShapes) {
    shapeCount++;
    const newShape = new Shape(selectShape.value, selectColor.value);
    const shapeElement = newShape.createElement();
    box.appendChild(shapeElement);
    shapeInfo.innerText = `Unit ${shapeCount}:  ${
      selectColor.options[selectColor.selectedIndex].text
    } ${selectShape.value}`;
  } else {
    shapeInfo.innerText = `The box is full! You can't make any more shapes.`;
  }
}

shapeInfo.innerText = 'No shapes made yet';
listen('click', create, makeNewShape);

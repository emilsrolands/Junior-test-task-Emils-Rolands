'use strict';

// Displays output value
const displayOutput = function (textOutput) {
  document.querySelector('.text-output').textContent = textOutput;
};

document.querySelector('.btn-calculate').addEventListener('click', function () {
  const aSide = Number(document.getElementById('aSide').value);
  const bSide = Number(document.getElementById('bSide').value);
  const cSide = Number(document.getElementById('cSide').value);

  // When there is no input
  if (!aSide || !bSide || !cSide) {
    document.getElementById('img').src = 'img/checkered bg.png';
    displayOutput('Values are missing');

    // When the triangle is equilateral
  } else if (aSide == bSide && bSide == cSide) {
    document.getElementById('img').src = 'img/equilateral.png';
    displayOutput('Equilateral triangle');

    // When the triangle is isosceles
  } else if (
    (aSide == bSide && bSide > cSide / 2) ||
    (bSide == cSide && cSide > aSide / 2) ||
    (aSide == cSide && cSide > bSide / 2)
  ) {
    document.getElementById('img').src = 'img/isosceles.png';
    displayOutput('Isosceles triangle');

    // When the triangle is scalenes
  } else if (
    aSide + bSide > cSide &&
    bSide + cSide > aSide &&
    aSide + cSide > bSide
  ) {
    document.getElementById('img').src = 'img/scalenes.png';
    displayOutput('Scalenes triangle');

    // // When the triangle is not possible
  } else {
    document.getElementById('img').src = 'img/checkered bg.png';
    displayOutput('Triangle not possible');
  }
});

let fs = require('fs');

let findClosest = (filename, inputCoords = [0.0, 0.0], numPoints = 5) => {
  return new Promise((resolve, reject) => {
    let coordinates = [];
    let output = [];
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) {
        reject('FILE READ ERROR: ' + err);
      } else {
        coordinates = data.trim().split('\n');
        coordinates = coordinates.map((elem) => {
          elem = elem.split(' ');
          elem[0] = parseFloat(elem[0]);
          elem[1] = parseFloat(elem[1]);
          return elem;
        });
        coordinates.map((elem) => {
          return elem.push(findDistance(elem, inputCoords));
        });
        console.log(coordinates);
        coordinates.sort((a, b) => a[2] - b[2]);
        resolve(coordinates.slice(0, numPoints).map(elem => elem.slice(0, 2)));
      }
    });
  });
};

let findDistance = (coords, refPoint) => {
  let xDist = Math.abs(coords[0] - refPoint[0]);
  let yDist = Math.abs(coords[1] - refPoint[1]);
  if (coords[0] === refPoint[0]) { // if they're on same x axis
    return yDist;
  }
  if (coords[1] === refPoint[1]) { // if they're on same y axis
    return xDist;
  }
  return Math.sqrt((xDist ** 2) + (yDist ** 2));
};

findClosest('coordinates.txt').then(data => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});

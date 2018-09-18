var zeroMatrixBruteForce = (matrix) => {
    var zeroElemCoords = {}; // will hold tuples of zero elems' indices
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                if (zeroElemCoords[i] !== undefined) {
                    zeroElemCoords[i].push(j);
                } else {
                    zeroElemCoords[i] = [j];
                }
            }
        }
    }

    for (var key in zeroElemCoords) {
        matrix[key] = Array.from(matrix[key], elem => 0);
        for (var k = 0; k < zeroElemCoords[key].length; k++) {
            var colIdx = zeroElemCoords[key][k];
            for (var l = 0; l < matrix.length; l++) {
                matrix[l][colIdx] = 0;
            }
        }
    }

    return matrix;

};

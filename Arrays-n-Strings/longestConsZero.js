var longestZeroBinFlip = (binStr) => {
  let consZero = 0;
  let max = 0;
  let flipIdx = -1;
  let binStrCopy;

  for (let i =0; i < binStr.length; i++) {
  	if (binStr[i] === '1') {
      binStrCopy = binStr.split('');
      binStrCopy[i] = '0';
      for (let k = 0; k < binStrCopy.length; k++) {
      	if (binStrCopy[k] === '0') {
        	consZero++;
        } else if (binStrCopy[k] === '1') {
        	if (consZero > max) {
          	    max = consZero;
                flipIdx = i;
            }
          consZero = 0;
        }
      }
      binStrCopy[i] = '1';
    }
    if (consZero > max) {
       max = consZero;
       flipIdx = i;
    }
  }

  return flipIdx;
};

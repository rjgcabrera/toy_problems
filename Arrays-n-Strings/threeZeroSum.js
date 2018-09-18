var threeZeroSumNaive = function(nums) {
    var solnObj = {};
    for (var i = 0; i < nums.length; i++) {
        var possibleSoln = [nums[i]];
        var restOfNums = nums.slice(0, i).concat(nums.slice(i+1));
        for (var j = 0; j < restOfNums.length; j++) {
            possibleSoln.push(restOfNums[j]);
            var restOfNums2 = restOfNums.slice(0, j).concat(restOfNums.slice(j+1));
            for (var k = 0; k < restOfNums2.length; k++) {
                if (possibleSoln[0] + possibleSoln[1] + restOfNums2[k] === 0 && solnObj[possibleSoln.toString()] === undefined) {
                    possibleSoln.push(restOfNums2[k]);
                    var soln = JSON.parse(JSON.stringify(possibleSoln));
                    soln.sort();
                    solnObj[soln.toString()] = soln;
                    possibleSoln.pop();
                }
            }
            possibleSoln.pop();
        }
        possibleSoln.pop();
    }
    return Object.values(solnObj);
};

var threeZeroSum = (nums) => {
  var rtn = [];
  if (nums.length < 3) {
    return rtn;
  }
  nums = nums.sort(function(a, b) {
    return a - b;
  });
  for (var i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      return rtn;
    }
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    for (var j = i + 1, k = nums.length - 1; j < k;) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        rtn.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] == nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] == nums[k + 1]) {
          k--;
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
      } else {
        j++;
      }
    }
  }
return rtn;
};

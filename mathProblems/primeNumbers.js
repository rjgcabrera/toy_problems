var primeNaive = (num) => {
  if (num < 2) {
    return false;
  }
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log('primeNaive(7): ', primeNaive(7));
console.log('primeNaive(9): ', primeNaive(9));

var primeSlightlyBetter = (num) => {
  if (num < 2) {
    return false;
  }
  var sqrt = Math.round(Math.sqrt(num));
  for (var i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log('primeSlightlyBetter(7): ', primeSlightlyBetter(7));
console.log('primeSlightlyBetter(9): ', primeSlightlyBetter(9));


/*---- Generating List of Primes ----*/

var sieveOfEratosthenes = function(n) {
    // Eratosthenes algorithm to find all primes under n
    var array = [], upperLimit = Math.sqrt(n), output = [];

    // Make an array from 2 to (n - 1)
    for (var i = 0; i < n; i++) {
        array.push(true);
    }

    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    // All array[i] set to true are primes
    for (var i = 2; i < n; i++) {
        if(array[i]) {
            output.push(i);
        }
    }

    return output;
};

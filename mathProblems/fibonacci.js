// Time: O(2^n)
var fibonacciNaive = function(num) {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  return fibonacciNaive(num - 1) + fibonacciNaive(num - 2);
};

// Time: O(n). Space: O(n)
var fibonacciMemo = function(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacciMemo(num - 1, memo) + fibonacciMemo(num - 2, memo);
};

// Time: O(n), Space: O(1)
var fibonacciIter = function(num) {
  if (num === 0) {
    return 0;
  }
  var a = 0;
  var b = 1;
  for (var i = 2; i < num; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
}

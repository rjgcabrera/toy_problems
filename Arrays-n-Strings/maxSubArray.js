function findMaxSum(array) {
    let currentMaxSum = array[0];
    let globalMaxSum = array[0];
    for (let i = 1; i < array.length; i++) {
        currentMaxSum = Math.max(array[i], currentMaxSum + array[i]);
        globalMaxSum = Math.max(globalMaxSum, currentMaxSum);
    }
    return globalMaxSum;
}

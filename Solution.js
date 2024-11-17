// подсчет суммы цифр веса
function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

function orderWeight(strng) {
    // убираем пробелы во входящей строке
    const numbers = strng.trim().split(/\s+/);
    
    // создаем массив, где будут храниться 2 числа: начальный вес и сумма цифр этого веса.
  const weightedNumbers = numbers.map(num => [num, sumOfDigits(num)]);

    
    const sortedWeightedNumbers = weightedNumbers.sort((a, b) => {
    if (a[1] === b[1]) {
        return a[0].localeCompare(b[0]); // сравниваем как строки
    }
    return a[1] - b[1]; // освновное сравнение по весу
});

    // извлекаем только начальный вес в отсортированном порядке
    const sortedValues = sortedWeightedNumbers.map(item => item[0]).join(' ');
    console.log(sortedValues); // выводим массив
    return sortedValues;
}





//sample test
const { assert } = require('chai');

describe("Order Weights",function() {
  it("Basic tests",function() {
    assert.strictEqual(orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99")
    assert.strictEqual(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999")
  })
})

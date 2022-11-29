function queueTime(customers, n) {
  let queueLength = customers.length;
  const sumOfCheckout =
    queueLength >= 1 && customers.reduce((acc, cur) => acc + cur);

  const longestCheckout = Math.max(...customers);

  if (queueLength === 0) return 0;

  if (n >= queueLength) return longestCheckout;
  
  if (queueLength === 1 || n === 1) return sumOfCheckout;

  if (longestCheckout === customers[0]) return customers[0];

  let flag = false;
  let condition = true;
  let nextQueue = [];
  let checkout = 0;

  do {
    let initialQueue = flag ? nextQueue : customers.splice(0, n);

    const quickestCustomer = Math.min(...initialQueue);
    checkout += quickestCustomer;
    const currentQueue = initialQueue.map(
      (customer) => customer - quickestCustomer
    );

    const customerStillInCashier = currentQueue.filter(
      (customer) => customer !== 0
    );

    const isSomeCashierFree =
      customerStillInCashier.length < initialQueue.length;

    const nextCustomer = customers.splice(
      0,
      initialQueue.length - customerStillInCashier.length
    );

    initialQueue = customerStillInCashier;

    if (isSomeCashierFree) {
      nextQueue = initialQueue.concat(nextCustomer);
    }
    flag = true;
    condition = customers.length === 0 && nextQueue.length === 0 ? false : true;
  } while (condition);

  return checkout;
}

console.log(6, queueTime([10, 9, 8, 7, 11], 2)); //28
console.log(7, queueTime([2, 2, 3, 3, 4, 4], 2)); //9
console.log(8, queueTime([2, 3, 10, 2], 2)); //12
console.log(
  9,
  queueTime(
    [
      15, 8, 7, 4, 3, 5, 16, 17, 20, 10, 11, 3, 8, 7, 4, 7, 14, 20, 17, 17, 12,
      6, 15, 2, 1, 17, 2, 5, 16, 2, 20, 14, 17, 12, 20, 4, 19, 18, 5, 2, 11, 11,
      6, 17, 13, 1,
    ],
    4
  )
); //126

// console.log(1, queueTime([], 1)); // 0
// console.log(2, queueTime([5], 2)); // 5
// console.log(3, queueTime([5, 3], 1)); // 8
// console.log(4, queueTime([12, 9, 8, 7, 12], 1)); // 48
// console.log(5, queueTime([12, 9, 8, 7, 12], 2)); // 12
// console.log(6, queueTime([12, 8], 2)); // 20
// console.log(7, queueTime([12, 8], 12)); // 20

//    1     2    3
// 0  10    9    8    = 8
// 1  2     1    7    = 9
// 1  1     11   6    = 10
// 1  0     10   5    = 15
// 5  0     5    0    = 20

//    1     2
// 9  10    9   = 9
// 1  1     8   = 10
// 7  7     7   = 17
// 11 11    0   = 28

//    1     2
// 0  10    9   = 9
// 1  1     8   = 10
// 1  7     7   = 11
// 7  0    0   = 18

//    1     2    3
// 0  10    9    8    = 8
// 1  2     1    7    = 9
// 1  1     0   6     = 10
// 1  0     0   5     = 15

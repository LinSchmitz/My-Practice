'use strict';

const account1 = {
  accountName: 'Sara',
  balance: 5,
  transactions: [],
};

const account2 = {
  accountName: 'Jonas',
  balance: 105,
  transactions: [],
};

console.log(account1);

const deposit = function (amount) {
  account1.balance += amount;
  account1.transactions.push({ type: 'deposit', amount: amount });

  console.log('add to acc' + account1.balance);
};

const withdraw = function (amount) {
  account1.balance -= amount;
  account1.transactions.push({ type: 'withdraw', amount: amount });

  console.log('remove from acc' + account1.balance);
};

const transfer = function (acc1, acc2, amount) {
  acc1.balance -= amount; // کم کردن از حساب فرستنده
  acc2.balance += amount; // اضافه کردن به حساب گیرنده

  acc1.transactions.push({
    type: 'transfer',
    amount: amount,
    to: acc2.accountName,
  });
  acc2.transactions.push({
    type: 'received',
    amount: amount,
    from: acc1.accountName,
  });

  console.log(
    `Transferred ${amount} from ${acc1.accountName} to ${acc2.accountName}`,
  );
};

// deposit(10);
// withdraw(3);
transfer(account1, account2, 12);
console.log(account1.transactions, account1.balance, account2.balance);

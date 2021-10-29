const password = Math.floor(Math.random() * 1000).toString();
// console.log(password)

var request = {
  name: 'dami',
  age: 27
};
var name = 'dami', age = 28;

({ name=name, age=age} = request)

// console.log(request.age);
// console.log(Date.now() / 1000);


const a = [{b: 1, c: 2}, {b: 3, c: 5}]
const b = a.map((x,i) => {
  // x.b = 2;
  // x.c = 0
  x.d = 12;
  return x;
})
console.log(b)

// var arr = new Array(3).fill({a:"", b:""})
var arr = new Array(3).fill({})
console.log(arr)

arr = arr.map((x, i) => {
  x.a = 1,
  x.b = 3

  return x
})
console.log(arr)

const transactions = 
[
  {
    amount: 200,
    sendresponse: '6202',
    unwanted: 23
  },
  {
    amount: 100,
    sendresponse: '6868',
    unwanted: 23
  }
]

// const creditTransactions = [...transactions].map((transaction, x) => ({ transaction, wanted:x}))
var creditTransactions = [...transactions]
creditTransactions = creditTransactions.map(function(v){
  delete v.unwanted
  v.yes = 12;

  return v

});
// console.log(creditTransactions)




creditTransactions = creditTransactions.map((transaction, index) => {
  transaction.credit = transactions[index].amount
  transaction.reference = transactions[index].sendresponse

  return transaction
});
// console.log(creditTransactions);


const x = () => {
  const y = [];
  for (var i = 0; i < creditTransactions.length; i++) {
    creditTransactions[i].credit = transactions[i].amount;
    creditTransactions[i].reference = transactions[i].sendresponse;
    
    y.push(creditTransactions[i])
  }
  return y;
}

console.log('----------')
// console.log(newArr)
console.log(x());
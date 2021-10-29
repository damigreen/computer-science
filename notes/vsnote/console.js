
/* 
    amout = 5000
    plan = monthly
    wallet = 200,000
        
*/

// let amount = 5000
// let plan = "monthly"
// let wallet_ballance = 200000
// var start_date
// var end_date

let residence = {
  id: 32,
  wallet_balance: 50000,
  start_date: null,
  end_date: null,
};

// Generate a start date
// when the subscription has been updated
// where start_date != null
//

// 3days ago
// remove 5000 every 5 days
// in the 5th day remove 5000
// two days later
// in the 10th day remove another 5000
// 7days later

// 3 days ago
// remove 5000 every 5 days
// in the 4th day, change to 10 days deduction
// 6 Days later remove another 5000
const timeToSeconds = (value, unit) => {
  const timeValues = {
    seconds: 1,
    minutes: 60,
    hours: 60 * 60,
    days: 60 * 60 * 24,
    weeks: 60 * 60 * 24 * 7,
    years: 60 * 60 * 24 * 365.25,
  };

  return parseFloat(value) * timeValues[unit];
};

const time = new Date("2021-07-30").getTime();
console.log(time) // 1627603200000
const endDate = new Date(1630281600000)
console.log(endDate)
console.log(new Date(1635529344000), new Date(1646071936000))
// const dateNow = new Date().getTime() / 1000;
// const dateNow = new Date().getTime()
// const dateNow1 = DateTime.now();
// const date = new Date();
// const date1 = new Date(1634860800000);
// const oneMonth = timeToSeconds(4, "weeks") * 1000
// const oneMonthNow = (new Date(1635520253695)).getTime()
// console.log(date);
// console.log('time now >>--->', dateNow);
// console.log('time now >>--->', dateNow1);
// console.log('violet 10 end time >>---->', date1);
// console.log('one month >>---->', oneMonth);
// console.log('now + oneMonth', new Date(oneMonth + dateNow));
// console.log('oneMonthNow', oneMonthNow);

// const july27 = new Date(1627344000000) //1627344000000
// const aug27 = new Date(1630022400000) // 1630022400000
// const today = new Date(1635269198188)
// const start_date = new Date(1632441600000)
// const end_date = new Date(1634860800000)
// console.log(time)
// console.log(start_date)
// console.log(end_date)
// 1632700800000 sep 27
// 1635292800000 oct 27
// console.log(july27)
// console.log(dateNow)
// console.log(today)
// const date = new Date(1634860800000)
// const x = date.getDate()
// console.log(date)
// console.log(x)

// function isPrime(n) {
//     if (n <= 1) {
//         return false;
//     }

//     // check from 2 to n-1
//     for (var i = 2;  i < n; i++) {
//         console.log(n)
//         if (n % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(17))

// Prime numbers list
// 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97
// All primes are of the form 6k+-1, wth the exception of 2 and 3.
// 5*5 = 25
// n-prime   = 19, 29
// n-not-prime =
// function isPrime(n) {
//     if (n <= 1) return false;
//     if (n <= 3) return true;

//     // This is checked so that we can skip
//     // middle five numbers in below loop
//     if (n%2 == 0 || n%3 == 0) return false;

//     for (var i = 5; i*i <= n; i+=6) {
//         if (n%i == 0  || n%(i+2) == 0) return false
//     }

//     return true;
// }
// console.log(isPrime(101));

// function primFactors(n) {
//     // n = 12 12/2=6 6/2=3 3/2=1r1
//     while(n % 2 == 0) {
//         console.log(2)
//         n = n / 2;
//     }

//     // n must be odd at this point. So we can skip one element
//     // (Note i = i +2)
//     for (var i = 3; i * i <= n; i = i +2) {
//         while(n % i == 0) {
//             console.log(i);
//             n = n / i;
//         }
//     }

//     // This condition is to handle the case when n is a prime number
//     // greater than 2
//     if (n > 2) console.log(n)
// }

// // console.log(primFactors(12));
// primFactors(30)

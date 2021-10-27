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
    end_date: null
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

// const time = (new Date('2021-09-27')).getTime()
// const dateNow = (new Date()).getTime() / 1000
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

function isPrime(n) {
    if (n <= 1) {
        return false;
    }

    // check from 2 to n-1
    for (var i = 2;  i < n; i++) {
        console.log(n)
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(17))



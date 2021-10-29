const express = require("express")
const { DateTime } = require('luxon');

const app = express();


// const dateNow = DateTime.now().millisecond
// const dateNowMonth = DateTime.now().plus({ months: 1 })
// const dateNowQuarter = DateTime.now().plus({ months: 1 })
// const dateNowYear = DateTime.now().plus({ years: 1 })
const dateNowMonth = new Date((DateTime.now().plus({ months: 1 }) ).ts)
const dateNowQuarter = new Date((DateTime.now().plus({ months: 4 })).ts)
const dateNowYear = new Date((DateTime.now().plus({ years: 1 })).ts)
const dateNew = new Date(1635552000000)
// const dateEnd = DateTime.fromJSDate(new Date(1635292800000))
const dateEnd = DateTime.fromJSDate(new Date(1635552000000))
const dateEndOneMonth = DateTime.fromJSDate(new Date(1635552000000)).plus({ months: 1 });

// const dateNew = new Date(1635292800000)
// const dateEnd = DateTime.now(1635292800000)
// const dateEnd = DateTime.fromISO("2017-05-15T08:30:00").plus({ years: 1 })
console.log(dateEnd)
console.log(dateEndOneMonth)
console.log(dateEndOneMonth.ts)
console.log(dateNew)
// console.log(dateNowMonth)
// console.log(dateNowQuarter)
// console.log(dateNowYear)

app.listen(3007, () => {
    console.log("Server running at 3007")
})

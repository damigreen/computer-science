var axiosOption = {
    a: 1,
    b: 2
}

var request = {
    occupant_id: 3,
    unit_id: 4
}

axiosOption.params = request;

// console.log(axiosOption)
// console.log(request)

var axios = ["ab", "cd", "ef"]
var cat = ["ab"] 

var tac = axios.reduce((a,b) => a.concat(b))

console.log(tac)
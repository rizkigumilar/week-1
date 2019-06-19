let arrObj = [
	{
		name: "Tatas",
		company: "Arkademy",
		job: "Trainer",
		status: "single",
		city: "Jogja"
	},
	{
		name: "Pratama",
		company: "Emago",
		job: "Trainer",
		status: "single",
		city: "Jakarta"
	}
]


let result =[...arrObj.splice(0, 0), Object.assign({}, arrObj[0], {
    status: "married",
    city: "jakarta"
}),...arrObj.splice(1,0),Object.assign({},arrObj[1],{
    company: "Arkademy",
    city: "jogja"
})]

console.log(result);
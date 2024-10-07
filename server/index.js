const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000

app.get('/api/availableCountries', async (req, res) => {
	try {
		const response = await fetch("https://date.nager.at/api/v3/AvailableCountries")
		const data = await response.json()
		res.send(data);
	}
	catch (err) { console.log(err) }
})

app.get('/api/countryInfo', async (req, res) => {
	const { country, code } = req.query
	try {
		const res1 = await fetch(`https://date.nager.at/api/v3/CountryInfo/${code}`)
		const res2 = await fetch(`https://countriesnow.space/api/v0.1/countries/population`)
		const res3 = await fetch(`https://countriesnow.space/api/v0.1/countries/flag/images`)

		const countryInfo = await res1.json()
		const population = await res2.json()
		const populationChart = population.data.find(item => item.country === country);
		const flag = await res3.json()

		const countryFlag = flag.data.find(country => country.iso2 === code);

		const data = {
			info: countryInfo,
			population: populationChart.populationCounts,
			flag: countryFlag.flag
		}

		res.send(data);
	}
	catch (err) { console.log(err) }
})

app.listen(PORT, () => { console.log('Server started at port 5000') })
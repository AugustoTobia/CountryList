import React, { useEffect, useState } from "react";
import { requestCountryDetails } from '../requesters';
import { useParams } from 'react-router-dom';
import BordersWidget from "../components/BordersWidget";

import './countryInfo.css';
import PopulationChart from "../components/PopulationChart";

const CountryInfo = () => {
	const [countryData, setCountryData] = useState()
	let { country, countryCode } = useParams();

	useEffect(() => {
		requestCountryDetails(country, countryCode).then(data => setCountryData(data))
	}, [country, countryCode])


	return (
		<div className="container">
			{countryData &&
				<div>
					<div className="titleContainer">
						<h1>{countryData.info.commonName}</h1>
						<img alt='flag' src={countryData.flag} className="flagImg" />
					</div>
					<BordersWidget borders={countryData.info.borders} />
					<PopulationChart population={countryData.population} />
				</div>
			}
			<a href="/">Go back to the list</a>
		</div>
	)
}

export default CountryInfo
import React, { useState, useEffect } from 'react'
import { requestAvailableCounties } from '../requesters';

const Home = () => {
	const [state, setState] = useState();

	useEffect(() => {
		requestAvailableCounties().then(data => setState(data))
	}, [])


	return (
		<div>
			{state &&
				<ul>
					{state.map(country => {
						return <li><a href={`/country/${country.name}/code/${country.countryCode}`}>{country.name}</a></li>
					}
					)}
				</ul>
			}
		</div>
	)
}

export default Home;
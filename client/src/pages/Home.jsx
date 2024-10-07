import React, { useState, useEffect } from 'react'
import { requestAvailableCounties } from '../requesters';

import "./home.css"
const Home = () => {
	const [state, setState] = useState();

	useEffect(() => {
		requestAvailableCounties().then(data => setState(data))
	}, [])


	return (
		<div>
			{state &&
				<ul className='list'>
					{state.map(country => {
						return <li className='listItem' key={country.name}>
							<a href={`/country/${country.name}/code/${country.countryCode}`}>
								{country.name}
							</a>
						</li>
					}
					)}
				</ul>
			}
		</div>
	)
}

export default Home;
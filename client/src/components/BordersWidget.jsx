const BordersWidget = ({ borders }) => {

	return (
		<>
			<ul>
				{borders.map((border) => {
					return <li key={border.countryCode}>
						<a href={`/country/${border.commonName}/code/${border.countryCode}`}>
							{border.officialName}
						</a>
					</li>
				})}
			</ul>
		</>
	)
}

export default BordersWidget;
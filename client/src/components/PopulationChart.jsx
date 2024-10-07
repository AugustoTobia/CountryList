import { LineChart } from "@mui/x-charts";

const PopulationChart = ({ population }) => {
	return (
		<>
		<h2>The next chart shows the changes in population over the years</h2>
			<LineChart
				xAxis={[{ dataKey: 'year' }]}
				series={[{ dataKey: 'value' }]}
				height={500}
				dataset={population}
			/>
		</>
	)
}

export default PopulationChart
import { LineChart } from "@mui/x-charts";

const PopulationChart = ({ population }) => {
	return (
		<>
			<LineChart
				xAxis={[{ dataKey: 'year' }]}
				series={[{ dataKey: 'value' }]}
				width={600}
				height={500}
				dataset={population}
			/>
		</>
	)
}

export default PopulationChart
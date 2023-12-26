import "./App.css";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  PieChart,
  Pie,
  Cell,
  BarChart,
  ResponsiveContainer,
} from "recharts";
import { Table } from "./Table";

function App() {
  return (
    <div className="chart_example">
      <div className="mixed">
        <MixedChart />
      </div>
      {/* <div className="basic">
        Basic Line Chart
        <Basic />
      </div> */}
      {/* <div className="basic">
        Doughnut
        <DoughnutChart />
      </div> */}
      {/* <div className="basic">
        Stacked Bar
        <StackedBarChart />
      </div> */}
    </div>
  );
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateData({ n }) {
  let data = [];
  for (let i = 1; i < n + 1; i++) {
    data.push({
      name: `7/${i}`,
      Bar_A: randomIntFromInterval(100, 300),
      Bar_B: randomIntFromInterval(100, 200),
      Line_A: randomIntFromInterval(200, 400),
      Line_B: randomIntFromInterval(100, 250),
    });
  }

  return data;
}

// const CustomTooltip = (data) => {
//   const { active, payload, label } = data;
//   console.log("data:", data);
//   if (active && payload && payload.length) {
//     return (
//       <div className="custom-tooltip">
//         <p className="label">{`${label} : ${payload[0].value}`}</p>
//         <p className="intro">{label}</p>
//         <p className="desc">Anything you want can be displayed here.</p>
//       </div>
//     );
//   }

//   return null;
// };

function MixedChart() {
  const data = generateData({ n: 15 });
  console.log("data:", data);

  return (
    <>
      {/* <ResponsiveContainer width="100%" height="80%"> */}
      <ComposedChart width={600} height={200} data={data} barGap={8}>
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis
          yAxisId="left"
          orientation="left"
          stroke="#8884d8"
          axisLine={false}
          tickLine={false}
          tickCount={8}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke="#82ca9d"
          axisLine={false}
          tickLine={false}
          tickCount={6}
        />
        <Tooltip />
        {/* <Legend /> */}
        <Bar
          yAxisId="left"
          dataKey="Bar_A"
          stackId="a"
          fill="red"
          barSize={28}
        />
        <Bar
          yAxisId="left"
          dataKey="Bar_B"
          stackId="a"
          fill="blue"
          barSize={28}
        />
        <Line
          yAxisId="right"
          type="linear"
          dataKey="Line_A"
          stroke="green"
          strokeWidth={2}
        />
        <Line
          yAxisId="right"
          type="linear"
          dataKey="Line_B"
          stroke="black"
          strokeWidth={2}
        />
      </ComposedChart>
      <Table />
      {/* </ResponsiveContainer> */}
    </>
  );
}

function StackedBarChart() {
  const data = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" stackId="a" fill="#8884d8" />
      <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
    </BarChart>
  );
}

function DoughnutChart() {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}

function Basic() {
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 500, pv: 2400, amt: 2400 },
    { name: "Page C", uv: 200, pv: 2400, amt: 2400 },
    { name: "Page D", uv: 100, pv: 2400, amt: 2400 },
  ];

  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
}

export default App;

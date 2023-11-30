import useSurveySurveyor from "../../Hooks/useSurveySurveyor";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  ResponsiveContainer,
} from "recharts";
import { LuSquareEqual } from "react-icons/lu";

import useAllSurvey from "../../Hooks/useAllSurvey";
import PiechartShared from "../../Shared/PiechartShared";

const coolor = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
    Z`;
};
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const SurveyorStatics = () => {
  const { data, refetch } = useSurveySurveyor() || {};

  const chartinfo = data?.map((item) => {
    return {
      name: item?.title,
      vote: item?.voteCount,
    };
  });

  return (
    <div className="">
      <div className="flex gap-4 items-center font-bold">
        <LuSquareEqual className="text-xl ml-10 my-10 text-primary_Colors" />

        <h1>Total Vote Chart Map </h1>
      </div>
      <BarChart
        width={800}
        height={500}
        data={chartinfo}
        className="text-xs md:w-full"
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
        <Bar
          dataKey="vote"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {chartinfo?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={coolor[index % 20]} />
          ))}
        </Bar>
      </BarChart>

      {/* pichart */}
      <div className="flex gap-4 items-center font-bold">
        <LuSquareEqual className="text-xl ml-10 my-5 text-primary_Colors" />

        <h1>Parsentage Vote Chart Map </h1>
      </div>
      <div>
        <PiechartShared pieinfo={chartinfo}></PiechartShared>
      </div>
    </div>
  );
};

export default SurveyorStatics;

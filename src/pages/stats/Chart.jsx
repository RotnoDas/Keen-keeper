import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { RechartsDevtools } from '@recharts/devtools';
import { useContext } from "react";
import { context } from "../../components/context/ContextCreate";

const Chart = () => {
    const call = {
        name: "Call",
        value: 0,
        fill: "#0088FE"
    }
    const text = {
        name: "Text",
        value: 0,
        fill: "#00C49F"
    }
    const video = {
        name: "Video",
        value: 0,
        fill: "#FFBB28"
    }
    const counter = [call, text, video];
    console.log(counter);
    const { timelineData } = useContext(context);
    timelineData.map((data) => {
        if (data.type === "Call") {
            call.value += 1;
        } else if (data.type === "Text") {
            text.value += 1;
        } else if (data.type === "Video") {
            video.value += 1;
        }
    })
    return (
        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
            <Pie
                data={counter}
                innerRadius="80%"
                outerRadius="100%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="50%"
                fill="#8884d8"
                // padding angle is the gap between each pie slice
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
                animationDuration={1000}
                animationEasing="ease-in-out"
            />
            <Tooltip></Tooltip>
            <Legend></Legend>
            <RechartsDevtools />
        </PieChart>
        
    );
};

export default Chart;
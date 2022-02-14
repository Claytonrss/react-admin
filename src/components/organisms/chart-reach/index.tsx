import React, { useEffect, useState } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ReactComponent as CardIcon1 } from '../../../assets/images/reach-chart-card-01.svg';
import { ReactComponent as CardIcon2 } from '../../../assets/images/reach-chart-card-02.svg';
import { ReactComponent as CardIcon3 } from '../../../assets/images/reach-chart-card-03.svg';
import {
  ChartReachCardItem,
  ChartReachCards,
  ChartReachContainer,
  ChartReachHeader,
} from './styles';

const DataFormatter = (number: number) => {
  return `${(number / 1000).toString()}K`;
};

const RenderLineChart: React.FC = () => {
  const [dataReach, setDataReach] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('/api/reaches');
      const { reaches } = await data.json();
      setDataReach(reaches);
    };
    fetchData();
  }, []);

  return (
    <ResponsiveContainer
      width="98%"
      height={300}
      className="responsiveContainer"
    >
      <LineChart data={dataReach}>
        <Line
          name="Total Reach"
          type="linear"
          dataKey="totalReach"
          stroke="#30D987"
          strokeWidth="2px"
        />
        <Line
          name="Paid Reach"
          type="linear"
          dataKey="paidReach"
          stroke="#017EFA"
          strokeWidth="2px"
        />
        <Line
          name="Organic Reach"
          type="linear"
          dataKey="organicReach"
          stroke="#FD1F9B"
          strokeWidth="2px"
        />
        <CartesianGrid vertical={false} stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis
          type="number"
          tickFormatter={DataFormatter}
          domain={[0, (dataMax: number) => Math.ceil(dataMax / 50000) * 50000]}
          tickCount={6}
        />

        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

const ChartReach: React.FC = () => {
  return (
    <ChartReachContainer>
      <ChartReachHeader>
        <ChartReachCards>
          <ChartReachCardItem>
            <CardIcon3 />
            <p>Total Organic Reach</p>
            <span>150K</span>
          </ChartReachCardItem>
          <ChartReachCardItem>
            <CardIcon2 />
            <p>Total Paid Reach</p>
            <span>115K</span>
          </ChartReachCardItem>
          <ChartReachCardItem>
            <CardIcon1 />
            <p>Total Reach</p>
            <span>35K</span>
          </ChartReachCardItem>
        </ChartReachCards>
      </ChartReachHeader>
      <RenderLineChart />
    </ChartReachContainer>
  );
};

export default ChartReach;

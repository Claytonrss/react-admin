import React, { useEffect, useState } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import {
  ChartDemographicContainer,
  ChartDemographicHeader,
  ChartDemographicInfos,
  ChartDemographicTitle,
} from './styles';
import { ReactComponent as DemographicIcon } from '../../../assets/images/icons/demographic.svg';

const renderLabelContent: React.FunctionComponent = (props: any) => {
  const { value, cx, cy, innerRadius, outerRadius, midAngle } = props;
  const RADIAN = Math.PI / 180;
  const radius = 25 + innerRadius + (outerRadius - innerRadius);
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#333"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize="24px"
      fontWeight="bold"
    >
      {`${value.toFixed(0)}%`}
    </text>
  );
};

const RenderPieChart: React.FC = () => {
  const [dataDemographic, setDataDemographic] = useState<[]>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('/api/demographics');
      const { demographics } = await data.json();
      console.log(demographics);
      setDataDemographic(demographics);
    };
    fetchData();
  }, []);

  const COLORS = ['#017EFA', '#51CBFF', '#30DA88'];

  return (
    <ResponsiveContainer
      width="98%"
      height={300}
      className="responsiveContainer"
    >
      <PieChart>
        <Pie
          label={renderLabelContent}
          labelLine={false}
          data={dataDemographic}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={110}
          fill="#030303"
        >
          {dataDemographic &&
            dataDemographic.map((entry, index) => (
              <Cell key="index" fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

const ChartDemographic: React.FC = () => {
  return (
    <ChartDemographicContainer>
      <ChartDemographicHeader>
        <ChartDemographicTitle>
          <DemographicIcon />
          Demographic
        </ChartDemographicTitle>
      </ChartDemographicHeader>
      <ChartDemographicInfos>
        <RenderPieChart />
      </ChartDemographicInfos>
    </ChartDemographicContainer>
  );
};

export default ChartDemographic;

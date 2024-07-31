import * as React from 'react';

import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const Graph = ({syam,syam1}) => {
    const data = [
        { label: 'Group A', value: syam.length, color: 'black' },
        { label: 'Group B', value: syam1.length, color: 'green' },
        { label: 'Group B', value: syam1.length, color: 'maroon' },
        
      ];
      
      const sizing = {
        margin: { right: 5 },
        width: 200,
        height: 200,
        legend: { hidden: true },
      };
      const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);
      
      const getArcLabel = (params) => {
        const percent = params.value / TOTAL;
        return `${(percent * 100).toFixed(0)}%`;
      };
      
      
  return (
    <div>
        <PieChart
      series={[
        {
          outerRadius: 80,
          data,
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontSize: 14,
          fontWeight:"bold"
        },
      }}
      {...sizing}
    />
    </div>
  )
}

export default Graph
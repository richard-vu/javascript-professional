import React from "react";
import Chart from "react-google-charts";
import './Chart.css';

// const data = [
//   ["Element", "Density", { role: "style" }],
//   ["Copper", 8.94, "#0066ff"], // RGB value
//   ["Silver", 10.49, "silver"], // English color name
//   ["Gold", 19.3, "gold"],
//   ["Platinum", 21.45, "color: #e5e4e2"] // CSS-style declaration
// ];
export default class HChart extends React.Component {
  render() {
    return (
      <div className="my-pretty-chart-container ">
        <Chart
          className='bottom'
          width={'500px'}
          height={'300px'}
          chartType="ComboChart"
          loader={<div>Loading Chart</div>}
          data={[
            [
              'Month',
              'Bolivia',
              'Ecuador',
              'Madagascar',
              'Papua New Guinea',
              'Rwanda',
            ],
            ['2004/05', 165, 938, 522, 998, 450],
            ['2005/06', 135, 1120, 599, 1268, 288],
            ['2006/07', 157, 1167, 587, 807, 397],
            ['2007/08', 139, 1110, 615, 968, 215],
            ['2008/09', 136, 691, 629, 1026, 366],
          ]}
          options={{
            title: 'Monthly Coffee Production by Country',
            vAxis: { title: 'Cups' },
            hAxis: { title: 'Month' },
            seriesType: 'bars',
            series: { 5: { type: 'line' } },
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    );
  }
}
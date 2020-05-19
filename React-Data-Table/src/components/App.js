import React, { useState } from 'react';

import DataTable from 'react-data-table-component';

import { Chart } from "react-google-charts";

import { GoogleMap, Marker } from "react-google-maps"
 
const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982',
summary: 'Orphaned boy Conan is enslaved after his village is destroyed...', genre:'action' , 
image: 'https://avatars2.githubusercontent.com/u/24472947?v=4'
}];
const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
    cell: row => <div><div style={{ fontWeight: 'bold' }}>{row.title}</div>{row.summary}</div>,
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
    right: true,
  },
  {
    name: 'Genre',
    selector: 'genre',
    sortable: true,
    right: true,
  },
];

const handleChange = (state) => {
  // You can use setState or dispatch with something like Redux so we can use the retrieved data
  console.log('Selected Rows: ', state.selectedRows);
};

const ExpanableComponent = ({ data }) => <img src={data.image} />;

class MyComponent extends React.Component {
  render() {
    return (
      <DataTable
        title="Arnold Movies"
        columns={columns}
        data={data}
        selectableRows
        Clicked
        onSelectedRowsChange={handleChange}
        expandableRows
        expandableRowDisabled={row => row.disabled}
        expandableRowsComponent={<ExpanableComponent />}
      />
    )
  }
};

const ChartData = [
  ["Age", "Weight"],
  [8, 12],
  [4, 5.5],
  [11, 14],
  [4, 5],
  [3, 3.5],
  [6.5, 7]
];

const options = {
  title: "Age vs. Weight comparison",
  hAxis: { title: "Age", viewWindow: { min: 0, max: 15 } },
  vAxis: { title: "Weight", viewWindow: { min: 0, max: 15 } },
  legend: "none"
};

const chartEvents = [
  {
    eventName: "select",
    callback({ chartWrapper }) {
      console.log("Selected ", chartWrapper.getChart().getSelection());
    }
  }
];

class GoogleChart extends React.Component {
  render() {
    return (
      <div className={"my-pretty-chart-container"}>
        <Chart
          chartType="ColumnChart"
          data={ChartData}
          options={options}
          width="100%"
          height="400px"
          legendToggle
          chartEvents={chartEvents}
        />
      </div>
    );
  }
}

// class GoogleMaps extends React.Component {
//   render() {
//     return (
//       <GoogleMap
//       defaultZoom={8}
//       defaultCenter={{ lat: -34.397, lng: 150.644 }}
//     >
//       {this.props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
//     </GoogleMap>
//     );
//   }
// }

const GoogleMaps = (props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>

export default function App({ initialData }) {
  return (
    <div>
      <MyComponent/>
      <GoogleChart/>
      <GoogleMaps isMarkerShown />
    </div>
  );
}

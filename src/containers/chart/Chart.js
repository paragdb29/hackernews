import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class Chart extends PureComponent {

  render() {
    const data = [];
    this.props.storydata.forEach(function(story,id) {
        let chartObj = {};
        chartObj.title = story.title;
        chartObj.indexes = id;
        chartObj.score = story.score;
        data.push(chartObj);
    });;
    return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="indexes" />
        <YAxis/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="score" stroke="#8884d8" />
      </LineChart>
    );
  }
}

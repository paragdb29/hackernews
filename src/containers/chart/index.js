import React from 'react';
import { Button } from 'react-bootstrap';
import Chart from './Chart'

const ChartView = (props) => {

    return(
      <>
      <Button variant="info" onClick={()=>props.history.push("/")} className="back-btn">Back</Button>
      <h1>Chart View</h1>
      <Chart storydata={props.location.state.data}/>  
      </>
    )
  
}
export default ChartView;
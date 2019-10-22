import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import List from '../../components/List'

class MainView extends Component {

    componentDidMount(){
        this.props.fetchStories();
    }

    render(){
        const { stories } = this.props;
        return(
            <>
            {this.props.isFetching ?
                <div className="loader">
                    Loading stories please wait......
                </div>:
                <>
                    <h1>MainView</h1>  
                    <List stories={stories}/>                    
                    <Button variant="success" className="chart-btn" onClick={()=>this.props.history.push("/chart",{data:stories})}>Chart View</Button>
                </>
            }
            </>
          )
    }
} 

export default MainView;
import React, { Component } from 'react';
import List from '../../components/List'

class MainView extends Component {

    componentDidMount(){
        this.props.fetchStories();
    }

    render(){
        const { stories } = this.props;
        return(
            <>
            <h1>MainView</h1>  
            <List stories={stories}/>
            </>
          )
    }
} 

export default MainView;
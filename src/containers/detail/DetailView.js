import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import {getDate} from '../../utils/Utils'

class DetailsView extends Component {
  
    componentDidMount(){
        const storyDetails = this.props.location.state.storyDetails;
        if(storyDetails.kids){
            if(storyDetails.kids.length){
                const noOfComments = storyDetails.kids.length > 10 ? 10 : storyDetails.kids.length;
                const commentids = storyDetails.kids.slice(0,noOfComments)
                this.props.fetchComments(commentids);
            }
        }
    }

    render(){        
        const storyDetails = this.props.location.state.storyDetails;
        const {comments} = this.props;
        return(
            <>
            <h1>{storyDetails.title}</h1> 
            {comments.length > 0 ?
                comments.map(comment =>{
                    return(
                        <Jumbotron>
                            <h3>{comment.by}</h3>
                            <div dangerouslySetInnerHTML={{__html: comment.text}}></div>
                            <p>{getDate(comment.time)}</p>
                        </Jumbotron>
                    )})
                
            :null} 
            </>
        )
    }
  
}
export default DetailsView;
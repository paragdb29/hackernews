import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Comments from '../../components/Comments';
import {getDate} from '../../utils/Utils';
import './style.scss'

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
            {this.props.isFetching ?
                <div className="loader">
                    Loading story......
                </div>:   
                <>   
                    <Jumbotron>
                        <Button variant="info" onClick={()=>this.props.history.push("/")} className="back-btn">Back</Button>
                        <h1>{storyDetails.title}</h1> 
                        <div className="story-details">
                            <span>Score - {storyDetails.score}</span>
                            <span>Author - {storyDetails.by}</span>
                            <span>{getDate(storyDetails.time)}</span>
                            <span><Button variant="primary" href={storyDetails.url}>Go to story</Button></span>
                        </div>
                    </Jumbotron>
                    
                    {comments.length > 0 ?  
                        <Comments comments={comments}/>                  
                        :null
                    } 
                </>
            }
            </>
        )
    }
  
}
export default DetailsView;
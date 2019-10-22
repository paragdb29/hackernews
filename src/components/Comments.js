import React from 'react';
import {getDate} from '../utils/Utils'
import './style.scss'



const Comments = (props) => {
  const {comments} = props;
    return(
        <div className="comments" >
            {comments.map((comment,id) =>{
                return(
                    <div key={id} className="comment-box">
                        <div  className="header">
                            <span  className="comment-name">Comment by - {comment.by}</span>
                        </div>
                        <div  className="comment-text">
                            <p dangerouslySetInnerHTML={{__html: comment.text}}></p>
                            <span  className="comment-date"><i>{getDate(comment.time)}</i></span>
                        </div>
                        <div className="total-comments">
                            {comment.kids ? `${comment.kids.length} comments`: "0 comment" } by <b>{comment.by}</b>
                        </div>
                    </div>
                )})}
        </div> 
    )
  
}
export default Comments;
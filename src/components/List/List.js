import React from 'react';
import { Link } from 'react-router-dom';
const List = (props) => {
   
    return (
            
        <div>
            <img alt="img" src={props.thumbnail} id={props.id}/>
            <Link to={`/comments/${props.id}`}>{props.title}</Link>
          
            
            <hr></hr>
        </div>
                    
     );
}
 
export default List;
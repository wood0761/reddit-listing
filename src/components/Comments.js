import React, { Component } from 'react';
import Reddit from '../utils/API';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: props.match.params.id,
            children: []
         }
         console.log(props.match.params.id)
    }

    componentDidMount = () => {
        Reddit.getComments(this.state.id)
        .then( res => {
            this.setState({ children: res.data[1].data.children })
        });
    }
    
    render() { 
        return ( 
            <div className="container">
                <h2>Comments:</h2>
                <ul>
                    {this.state.children.map( child => (
                        <li>{child.data.body}</li>
                    ))}
                </ul>
             </div>
         );
    }
}
 
export default Comments;

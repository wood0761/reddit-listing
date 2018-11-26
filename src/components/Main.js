import React, { Component } from 'react';
import Reddit from '../utils/API';
import Button from './Button/Button';
import List from './List/List';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [],
            children: [],
            after: '',
            before: '',
            count: 0,
            comments: [],
         }
    }

    componentDidMount() {
        Reddit.getListing()
            .then( res => {
                this.setState({ 
                    data: res,
                    children: res.data.data.children,
                    count: this.state.count + 10
                })
                this.pagination();
        });
    };

    pagination = () => {
        const before = this.state.data.data.data.before;
        const after = this.state.data.data.data.after;
        
        this.setState({
            after: after,
            before: before
        })
        console.log(this.state.after)
        console.log(this.state.before)
    }

    handleMoreClick = event => {
        event.preventDefault();
        Reddit.getMoreListing(this.state.after, this.state.count)
        .then( res => {
            this.setState({ 
                data: res,
                children: res.data.data.children,
                count: this.state.count + 10
            })
            
            this.pagination();
    });
    }

    handlePreviousClick = event => {
        event.preventDefault();
        if(this.state.count > 10){
            Reddit.getPreviousListing(this.state.before, this.state.count)
            .then( res => {
                this.setState({ 
                    data: res,
                    children: res.data.data.children,
                    count: this.state.count - 10
                })
            this.pagination();
            });
        }
    }

    render() { 
        const more = "MORE";
        const previous = "PREVIOUS"
        
        return ( 
            <div className="container">
                <div className="row ">
                    <div className="col-md-12">  
                        <Button
                        handleClick = {this.handlePreviousClick}
                        name = {previous}
                        />
                        <Button
                        handleClick = {this.handleMoreClick}
                        name = {more}
                        />
                    </div>
                </div>
                <ul>
                    {this.state.children.map( child => (
                        <List
                            key={child.data.id}
                            id={child.data.id}
                            title={child.data.title}
                            thumbnail={child.data.thumbnail}
                        />
                    ))}
                </ul>
            </div>
         );
    }
}
 
export default Main;
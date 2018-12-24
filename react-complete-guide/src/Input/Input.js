import React, {Component} from 'react'

class input extends Component {

    render(props){

    return (
        <div>
            <input type="text" onChange={this.props.textchange} value={this.props.username}/>
        </div>
    );
    }
};

export default input;
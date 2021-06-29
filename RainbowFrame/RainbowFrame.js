import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {
    static propTypes= {
        colors: PropTypes.string.isRequired,
    };
    

    render () {
        let color=['yellow', 'blue', 'red', 'green', 'grey', 'purple', 'orange'];
        let code=this.props.color.array.forEach(color => {
            code= <div style={{border:"solid 1px "+this.props.color,padding:"10px"}}>
        {this.props.children}
        Hello! My name is Anna.
         </div>
         });
         return code;
        
    };
}
export default RainbowFrame;

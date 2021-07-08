import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';
let colors=['yellow', 'blue', 'red', 'green', 'grey', 'purple', 'orange'];

class RainbowFrame extends React.Component {
  
  static propTypes = {
    colors: PropTypes.string.isRequired,
  };
  

  render() {
        let code=this.props.children;
        this.props.colors.forEach (color => 
            <div style={{border:"solid 1px "+this.props.color,padding:"10px"}} >
              {code}
                Hello! My name is Anna.
            </div>
         );
         return code;
        
    };
}
export default RainbowFrame;
   
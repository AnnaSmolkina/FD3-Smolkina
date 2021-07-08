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
           code= <div style={{border:"solid 1px "+this.props.colors,padding:"10px"}}>={code}
           <RainbowFrame colors={colors}>Hello!</RainbowFrame>
                </div> 
         );
         return code;
        
    };
}
export default RainbowFrame;
   
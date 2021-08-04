import React from 'react';

function withRainbowFrame (colors) {
  return function (Component) {
    return props => (
      <div style={{border:"solid 1px "+colors,padding:"10px"}}>
        <Component {...props} />
      </div>
    );
  };
}

export { withRainbowFrame};

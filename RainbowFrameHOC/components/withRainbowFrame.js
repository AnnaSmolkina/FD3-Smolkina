import React, { Component} from 'react';

const withRainbowFrame=colors=> 
Component=>props=> {
  let code=props.children;
  colors.forEach(color=>
    {code=<div style={{border:"solid 1px "+color,padding:"10px"}}>
      {code}
      </div>});
    return code;
};



export {withRainbowFrame};

import React from 'react';
import {NavLink} from 'react-router-dom';




class Home extends React.PureComponent {
  
  render() {
    
    return (
      <div className='HomePage'>
        <div className="Page">
           <p id="TEXT1">Мы позаботимся о вашей машине! </p>
           <p id="TEXT2" >В нашем салоне вы можете подобрать комплектующие для своего автомобиля!</p>
           <NavLink to="/catalog"  className="modalbox">В каталог</NavLink>
        </div>
      </div>
      
    );

  }

}

export default Home;

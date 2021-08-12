import React from 'react';
import PropTypes from 'prop-types';

class MasterCar extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,

  };

  render() {

    return (
     <div>
      <header className="App-header">
        <div id='Top1'> {this.props.name}<span>.</span></div>
           <div id='Top2'></div>
           <div id='Top3'>
               <img id="Foto1" src="images/1g.png"/> <span>График работы: </span><br/> 9.00-19.30<br/> Без обеда, без выходных</div>
           <div id="Top4">
              <img id="Foto1" src="images/1g.png"/> <span>Наш адрес:</span>  г.Жлобин <br/>1-й Заводской пер., д. 4 </div>
           <div  id="Top5">
               <img id="Foto1" src="images/1g.png"/> <span>Позвоните нам:</span> <br/> +375293515152</div>
        </header>
        
      </div>

    )
    ;

  }

}

export default MasterCar;

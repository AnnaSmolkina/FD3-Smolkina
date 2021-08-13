import React from 'react';



class Header extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  render() {
    
    return (
      <header className="App-header">
        <div id='app-header_11'> 
           {this.props.name}<span>.</span>
        </div>
        <div id='app-header_2'></div>
        <div id='app-header_3'>
            <img id="Foto1" src="assets/img/logo.png"/>
            <span>График работы: </span><br/> 
            9.00-19.30<br/> 
            Без обеда, без выходных
        </div>
        <div id='app-header_4'>
            <img id="Foto1" src="assets/img/logo.png"/> 
            <span>Наш адрес:</span> г.Жлобин <br/>
            1-й Заводской пер., д. 4 
        </div>
        <div  id='app-header_5'>
            <img id="Foto1" src="assets/img/logo.png"/> 
            <span>Позвоните нам:</span> <br/>
             +375293515152
        </div>
      </header>
      
     
    );

  }

}

export default Header;

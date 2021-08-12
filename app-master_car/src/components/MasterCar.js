import React from 'react';
import PropTypes from 'prop-types';
import Catalog from './Catalog';

class MasterCar extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    catalog: PropTypes.arrayOf (
      PropTypes.string.isRequired,
    )

  };

  render() {

    return (
     <div>
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
        <main>
          <Catalog/>
          <img src="assets/img/katalog_marki.jpg"/>
        </main>
        <footer>
            <div id='footer_1'>
               {this.props.name}<span>.</span><br/><br/>
               Всегда с заботой о клиентах!
            </div>
            <div id='footer_2'>
              <span> У нас можно приобрести:</span>
              <ul>
                <li>{this.props.catalog} </li>
              </ul>
            </div>
            <div id='footer_3'>
              <span>Рабочее время: </span><br/><br/>
              9.00-19.30<br/> 
              Без обеда, без выходных
            </div>
            <div id="footer_4">
              <span>Контактная информация:</span> <br/><br/>
              г.Жлобин, 1-й Заводской пер., д. 4  <br/><br/>
              тел.: +37529 351-51-52 <br/><br/>
              e-mail: automag_drive@mail.ru
            </div>
            <div id='footer_5'>
              &copy; 2021 Анна Смолкина
            </div>
        </footer>
        
      </div>

    )
    ;

  }

}

export default MasterCar;

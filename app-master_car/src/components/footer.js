import React from 'react';



class Footer extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    catalog: PropTypes.arrayOf (
        PropTypes.string.isRequired,
    ),
  };

  render() {
    
    return (
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
     
    );

  }

}

export default Footer;
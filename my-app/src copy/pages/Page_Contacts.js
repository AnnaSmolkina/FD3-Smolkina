import React from 'react';

class Page_Contacts extends React.PureComponent {
          
  render() {

    return (
      <div className="Contacts">
        <div className="Contacts_info">
          <h2>Контакты для физических и юридических лиц</h2>
          <div id="Adress">
               <span>Наш адрес:</span><br/>
               г. Жлобин, <br/>1-й Заводской пер., д 4
          </div>
          <div id="Phone">
               <span> телефон:<br/></span> +375293515152
          </div>
          <div id="Mail">
                <span>e-mail:</span> automag_drive@mail.ru
          </div>
        </div>
        <div className="Contact_form">
          <h3> Вы можете оставить заявку. Мы обязатьельно с Вами свяжемся!</h3>
          <form name="INFO" action="http://fe.it-academy.by/TestForm.php" noValidate>
              Введите ваше имя:  <input type='text' name='FIO'/><br/>
              Введите номер телефона: <input type='text' name='NUMBER'/><br/>
              Введите ваш e-mail: <input type='text' name='MAIL'/><br/>
              <input type='submit' defaultValue='Отправить'/>
          </form>
        </div>
        <div id="Map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2406.6584014458053!2d30.014530315789834!3d52.90057397988805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d6b7d210e74123%3A0x3d793294ac46dd7f!2zWmF2b2Rza29pIDEgNCwg0JbQu9C-0LHQuNC9!5e0!3m2!1sru!2sby!4v1609077954916!5m2!1sru!2sby" width="570" height="350" frameborder="0" style="border:0;"  allowfullscreen="" aria-hidden="false" tabindex="0" id="MAP"></iframe>
        </div>
      </div>
    );
    
  }

}
    
export default Page_Contacts;
    
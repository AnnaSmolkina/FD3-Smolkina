import React from 'react';
import PropTypes from 'prop-types';
import Catalog from './Catalog';
import Header from './header';
import Footer from './footer';

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
        <Header/>
        <main>
          <Catalog/>
          <img src="assets/img/katalog_marki.jpg"/>
        </main>
        <Footer/>
        
      </div>

    );
  }
}

export default MasterCar;

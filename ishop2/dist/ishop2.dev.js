"use strict";

var ishop2 = React.createClass({
  displayName: "ishop2",
  propTypes: {
    top: React.PropTypes.array,
    products: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      code: React.PropTypes.number.isRequired,
      price: React.PropTypes.number.isRequired,
      url: React.PropTypes.string.isRequired,
      quantity: React.PropTypes.number
    }))
  },
  getInitialState: function getInitialState() {
    return {
      setectedProductCode: null
    };
  },
  render: function render() {
    var _this = this;

    var productRow = this.props.products.map(function (v) {
      return React.createElement(ishop2, {
        key: v.code,
        name: v.name,
        code: v.code,
        price: v.price,
        url: v.url,
        quantity: v.quantity,
        workMode: _this.props.workMode
      });
    });
    var headTableRow = this.props.top.map(function (x) {
      return React.createElement(ishop2, {
        key: x.code,
        text1: x.text1,
        text2: x.text2,
        text3: x.text3,
        text4: x.text4
      });
    });
    return React.DOM.div({
      className: 'ISHOP2'
    }, React.DOM.tr({
      className: 'ISHOP2__TOP'
    }, headTableRow), React.DOM.tr({
      className: 'ISHOP2__PRODUCTLIST_PRODUCT1'
    }, productRow), React.DOM.tr({
      className: 'ISHOP2__PRODUCTLIST_PRODUCT2'
    }, productRow), React.DOM.tr({
      className: 'ISHOP2__PRODUCTLIST_PRODUCT3'
    }, productRow), React.DOM.tr({
      className: 'ISHOP2__PRODUCTLIST_PRODUCT4'
    }, productRow), React.DOM.tr({
      className: 'ISHOP2__PRODUCTLIST_PRODUCT5'
    }, productRow), React.DOM.tr({
      className: 'ISHOP2__PRODUCTLIST_PRODUCT6'
    }, productRow));
  }
});
//# sourceMappingURL=ishop2.dev.js.map

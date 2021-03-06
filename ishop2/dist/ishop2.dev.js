"use strict";

var ishop2 = React.createClass({
  displayName: "ishop2",
  propTypes: {
    products: React.PropTypes.arrayOf(React.PropTypes.shape({
      text: React.PropTypes.string.isRequired,
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
    var productRow = this.props.products.map(function (v) {
      return React.DOM.table({
        className: 'ISHOP2__TABLE'
      }, React.DOM.thead({
        className: 'ISHOP2__TABLE_TOP'
      }, React.DOM.tr(React.DOM.th(null, v.text1), React.DOM.th(null, v.text2), React.DOM.th(null, v.text3), React.DOM.th(null, v.text4))), React.DOM.tbody({
        className: 'ISOP2__TABLE_BODY'
      }, React.DOM.tr({
        key: v.code,
        className: 'ISHOP2__PRODUCTLIST_PRODUCT1'
      }, React.DOM.td(null, v.name), React.DOM.td(null, v.price), React.DOM.td(null, v.url), React.DOM.td(null, v.quantity)), React.DOM.tr({
        key: v.code,
        className: 'ISHOP2__PRODUCTLIST_PRODUCT2'
      }, React.DOM.td(null, v.name), React.DOM.td(null, v.price), React.DOM.td(null, v.url), React.DOM.td(null, v.quantity)), React.DOM.tr({
        key: v.code,
        className: 'ISHOP2__PRODUCTLIST_PRODUCT3'
      }, React.DOM.td(null, v.name), React.DOM.td(null, v.price), React.DOM.td(null, v.url), React.DOM.td(null, v.quantity)), React.DOM.tr({
        key: v.code,
        className: 'ISHOP2__PRODUCTLIST_PRODUCT4'
      }, React.DOM.td(null, v.name), React.DOM.td(null, v.price), React.DOM.td(null, v.url), React.DOM.td(null, v.quantity)), React.DOM.tr({
        key: v.code,
        className: 'ISHOP2__PRODUCTLIST_PRODUCT5'
      }, React.DOM.td(null, v.name), React.DOM.td(null, v.price), React.DOM.td(null, v.url), React.DOM.td(null, v.quantity)), React.DOM.tr({
        key: v.code,
        className: 'ISHOP2__PRODUCTLIST_PRODUCT6'
      }, React.DOM.td(null, v.name), React.DOM.td(null, v.price), React.DOM.td(null, v.url), React.DOM.td(null, v.quantity))));
    });
    return React.DOM.div({
      className: 'ISHOP2'
    }, React.DOM.table({
      className: 'ISHOP2__TABLE'
    }, productRow));
  }
});
//# sourceMappingURL=ishop2.dev.js.map

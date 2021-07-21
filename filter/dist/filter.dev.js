"use strict";

var filter = React.createClass({
  displayName: "filter",
  propTypes: {
    words: React.PropTypes.array.string.isRequired
  },
  getInitialState: function getInitialState() {
    return {
      wordsSTR: []
    };
  },
  render: function render() {
    var wordsFilterList = this.props.words.map(function (w) {
      return React.createElement(FilterList, {
        words: w.words
      });
    });
    return React.DOM.div({
      className: 'FILTER'
    }, React.DOM.div({
      className: 'FOLTER__INPUTS'
    }, React.createElement.input(null, {
      type: "checkbox"
    }), React.createElement.input(nill, {
      type: "text"
    }), React.React.DOM.thead({
      className: "ISHOP2__TABLE_TOP"
    }, headRow), React.DOM.tbody({
      className: "ISHOP2__TABLE_BODY"
    }, productRow)));
  }
});
//# sourceMappingURL=filter.dev.js.map

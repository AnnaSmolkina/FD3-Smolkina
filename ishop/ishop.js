var ishop=React.createClass ( {
    displayName: "ishop",
    propTypes: {
        nameShop: React.PropTypes.string.isRequired,
        products: React.PropTypes.array.isRequired,
        /*
        products: React.PropTypes.arrayOf (
            React.PropTypes.shape ({
                nameProduct: React.PropTypes.string.isRequired,
                code: React.PropTypes.number.isRequired,
                price:React.PropTypes.number.isRequired,
                url: React.PropTypes.string.isRequired,
                free: React.PropTypes.number,
                text: React.PropTypes.string.isRequired,
            })
        )
        */
    },

   render: function () {
    var productList=this.props.products.map ( v=>
           React.DOM.div({key:v.code, className:'ishop__Product'}, 
            React.DOM.span (v.url),
            React.DOM.span (v.text, v.nameProduct),
            React.DOM.span (v.text, v.price),
            React.DOM.span (v.text, v.free),
           ),
          );
        
        return React.DOM.div ({className:'ishop'},
            React.DOM.div( {className:'ishop__Name'}, this.props.nameShop ),
            React.DOM.div( {className: 'ishop__Products'}, productList ),
        );
      },
    });

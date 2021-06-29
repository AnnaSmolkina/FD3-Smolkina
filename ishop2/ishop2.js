var ishop2=React.createClass ( {
    displayName: "ishop2",
    propTypes: {
        shop: React.PropTypes.array.isRequired,
        /*
        shop: React.PropTypes.arrayOf (
            React.propTypes.shape ({
                text: React.PropTypes.string.isRequired;
            })
        )
        */

        products: React.PropTypes.array.isRequired,
        /*
        products: React.PropTypes.arrayOf (
            React.PropTypes.shape ({
                name: React.PropTypes.string.isRequired,
                code: React.PropTypes.number.isRequired,
                price:React.PropTypes.number.isRequired,
                url: React.PropTypes.string.isRequired,
                quantity: React.PropTypes.number,
             })
        )
        */
    },

   render: function () {
    var productList=this.props.products.map ( v=>
           React.DOM.div({key:v.code, className:'ishop__Product'}, 
            React.DOM.span ({className:'PRODUCT'}, v.nameProduct),
            React.DOM.span ({className: 'PRICE'},  v.price),
            React.DOM.span ({className:'URL'}, v.url),
            React.DOM.span ({className: 'FREE'},  v.free),
            ),
          );
        
        return React.DOM.div ({className:'ishop'},
            React.DOM.div( {className:'ishop__Name'}, this.props.nameShop ),
            React.DOM.div( {className: 'ishop__Products'}, productList ),
        );
      },
    });

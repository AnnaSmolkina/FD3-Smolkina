var ishop2=React.createClass ( {
    displayName: "ishop2",
    propTypes: {
        head: React.PropTypes.array.isRequired,
        products: React.PropTypes.arrayOf (
           
            React.PropTypes.shape ({
                name: React.PropTypes.string.isRequired,
                code: React.PropTypes.number.isRequired,
                price:React.PropTypes.number.isRequired,
                url: React.PropTypes.string.isRequired,
                quantity: React.PropTypes.number,
            })
        )
    },

     getInitialState: function () {
         return {
             products: [],
             setectedProductCode: null
             };  
     },


    render: function () {
        var headRow=this.props.head.map(ht=>
                React.DOM.tr ({key:ht.code, className:'HAED'},
                    React.DOM.th ({className:'NAME'}, ht.text1 ),
                    React.DOM.th ({className:"PRICE"}, ht.text2 ),
                    React.DOM.th ({className:"URL"}, ht.text3),
                    React.DOM.th ({className:"QUANTITY"}, ht.text4),
                )
        );

        var productRow=this.props.products.map(v  => 
                React.DOM.tr ( {key: v.code, className: 'ISHOP2__PRODUCTLIST_PRODUCT'},
                   React.DOM.td ({className:'NAME'}, v.name),
                   React.DOM.td ({className:"PRICE"}, v.price),
                   React.DOM.td ({ className:"URL"}, v.url),
                   React.DOM.td ({ className:"QUANTITY"}, v.quantity),
                ) 
             );
        
                    
                          
        return React.DOM.div ({className:'ISHOP2'},
               React.DOM.table ({className:'ISHOP2__TABLE'},
                  React.DOM.thead ({className:"ISHOP2__TABLE_TOP"}, headRow ),
                  React.DOM.tbody ({className:"ISHOP2__TABLE_BODY"},productRow)
                 )
            );
      },
    
    });


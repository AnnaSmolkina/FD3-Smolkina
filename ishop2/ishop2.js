var ishop2=React.createClass ( {
    displayName: "ishop2",
    propTypes: {
        workMode: React.PropTypes.number.isRequired,
        head: React.PropTypes.arrayOf (
            React.PropTypes.shape ({
                text1: React.PropTypes.string.isRequired,
                text2: React.PropTypes.string.isRequired,
                text3: React.PropTypes.string.isRequired,
                text4: React.PropTypes.string.isRequired,
                text5: React.PropTypes.string.isRequired,
            })
        ),
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

    productSelected: function(code) {
       console.log('выбран ответ с кодом '+code);
       this.setState( {selectedProductCode:code} );
    },

    productClicked: function(EO) {
        this.props.cbSelected(EO.target.getatribute(code));
    },


    render: function () {
            var productRow=this.props.products.map(v  => 
                React.createElement (ProductsGrid, {key: v.code, 
                name:v.name, code:v.code, price:v.price, url:v.url, quantity:v.quantity, 
                control:v.control,
                cbSelected:this.productSelected,
                selectedProductCode:this.state.selectedProductCode,
                workMode:this.props.workMode,
                }
                )
            );

            var headRow=this.props.head.map(ht=>
                React.DOM.tr ({key:ht.code, className:'HAED'},
                    React.DOM.th ({className:'NAME'}, ht.text1 ),
                    React.DOM.th ({className:"PRICE"}, ht.text2 ),
                    React.DOM.th ({className:"URL"}, ht.text3),
                    React.DOM.th ({className:"QUANTITY"}, ht.text4),
                    React.DOM.th ({className:"CONTROL"}, ht.text5),
                )
        );


            
        return React.DOM.div ({className:'ISHOP2'},
               React.DOM.table ({className:'ISHOP2__TABLE'},
                  React.DOM.thead ({className:"ISHOP2__TABLE_TOP"}, headRow),
                  React.DOM.tbody ({className:"ISHOP2__TABLE_BODY"}, productRow),
               )        
        );
      },
    
    });



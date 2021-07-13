var filter=React.createClass ( {
    displayName: "filter",
    propTypes: {
        words: React.PropTypes.array.string.isRequired,
    }
     
    getInitialState: function () {
         return {
             products: [],
             setectedProductCode: null
             };  
     },

    
    render: function () {
        var wordsFilterList=this.props.words.map(w =>
                React.DOM.tr ({key:ht.code, className:'HAED'},
                    React.DOM.th ({className:'NAME'}, ht.text1 ),
                    React.DOM.th ({className:"PRICE"}, ht.text2 ),
                    React.DOM.th ({className:"URL"}, ht.text3),
                    React.DOM.th ({className:"QUANTITY"}, ht.text4),
                    React.DOM.th ({className:"CONTROL"}, ht.text5),
                )
        );

        var productRow=this.props.products.map(v  => 
                React.DOM.tr ( {key: v.code, className: 'ISHOP2__PRODUCTLIST_PRODUCT'},
                   React.DOM.td ({className:'NAME'}, v.name),
                   React.DOM.td ({className:"PRICE"}, v.price),
                   React.DOM.td ({ className:"URL"}, v.url),
                   React.DOM.td ({ className:"QUANTITY"}, v.quantity),
                   React.DOM.td ({className:"CONTROL"},
                      React.DOM.input ({type: "button", value: "Delete"}),
                   )
                )
             );

        
                    
                          
        return React.DOM.div ({className:'ISHOP2'},
               React.DOM.table ({className:'ISHOP2__TABLE'},
                  React.DOM.thead ({className:"ISHOP2__TABLE_TOP"}, headRow ),
                  React.DOM.tbody ({className:"ISHOP2__TABLE_BODY"}, productRow),
                 )
            
        );
      },
    
    });


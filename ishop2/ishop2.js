var ishop2=React.createClass ( {
    displayName: "ishop2",
    propTypes: {
        workMode: React.PropTypes.number.isRequired,
        top: React.PropTypes.string.isRequired,
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
         return {setectedProductCode: null};  
     },


    render: function () {
        var productRow=this.props.products.map ( v=>
            React.createElement(ishop2, {key:v.code,
             name:v.name, code:v.code, price:v.price, url:v.url, quantity:v.quantity,
             workMode:this.props.workMode }, 
            ),
          );

        var headTableRow=this.props.top.map( v=>
            React.createElement(ishop2, {key:x.code, 
            text1: v.text1, text2: v.text2, text3: v.text3. text4: v.text4},
            ),
          );
       
        
        return React.DOM.div ({className:'ISHOP2'},
                React.DOM.tr ( {className:'ISHOP2__TOP'},
                   React.DOM.td (null, x.text1),
                   React.DOM.td (null, x.text2),
                   React.DOM.td (null, x.text3),
                   React.DOM.td (null, x.text4)
                 )
                React.DOM.tr ({className: 'ISHOP2__PRODUCTLIST_PRODUCT1', v.code}, productRow) ,
                React.DOM.tr ({className: 'ISHOP2__PRODUCTLIST_PRODUCT2', v.code}, productRow) ,
                React.DOM.tr ({className: 'ISHOP2__PRODUCTLIST_PRODUCT3', v.code}, productRow) ,
                React.DOM.tr ({className: 'ISHOP2__PRODUCTLIST_PRODUCT4', v.code}, productRow) ,
                React.DOM.tr ({className: 'ISHOP2__PRODUCTLIST_PRODUCT5', v.code}, productRow) ,
                React.DOM.tr ({className: 'ISHOP2__PRODUCTLIST_PRODUCT6', v.code}, productRow) ,
             );
      },
    });

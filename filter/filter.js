var filter=React.createClass ( {
    displayName: "filter",
    propTypes: {
        words: React.PropTypes.array.string.isRequired,
    },
     
    getInitialState: function () {
         return {
             wordsSTR: [],
            };  
     },

    
    render: function () {
        var wordsFilterList=this.props.words.map(w =>
                React.createElement (FilterList, {words: w.words})
              );

        
                    
                          
        return React.DOM.div ({className:'FILTER'},
               React.DOM.div ({className:'FOLTER__INPUTS'},
                  React.createElement.input (null, {type:"checkbox"}),
                  React.createElement.input ( null, {type: "text"}),
                  React.createElement.input (null, {type:"button", value="сбросить"})
               ),
               React.createElement.select ({className:"FILTER__WORDSLIST", })
            
        );
      },
    
    });


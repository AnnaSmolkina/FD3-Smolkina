var filterProject=React.createClass ( {
    displayName: "filterProject",
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
               React.createElement.div ({className:'FILTER__INPUTS'},
                  React.createElement.input (null, {type:"checkbox"}),
                  React.createElement.input ( null, {type: "text"}),
                  React.createElement.input (null, {type:"button",  defaultValue:"сбросить"})
               ),
               React.createElement.select({className:"FILTER__WORDSLIST", multiple:true,defaultValue:this.props.words}, wordsFilterList)
               
            
        );
      },
    
    });


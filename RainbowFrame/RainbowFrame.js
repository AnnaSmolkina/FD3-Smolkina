import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {
    static propTypes= {
        rainbow: PropTypes.string.isRequired,
    };

    render () {
        let colors=['yellow', 'blue', 'red', 'green', 'grey', 'purple', 'orange'];
        return (
            <RainbowFrame colors={colors}>
            Hello! My name is Anna.
            </RainbowFrame>
        );
    };
}
export default RainbowFrame;

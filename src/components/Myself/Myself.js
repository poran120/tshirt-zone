import React from 'react';
import Special from '../Special/Special';

const Myself = ({house}) => {
    return (
        <div>
            <h4>My Self here</h4>
            <p>house: {house}</p>
            <Special></Special>
        </div>
    );
};

export default Myself;
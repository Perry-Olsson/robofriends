import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', borderTop: '1px solid black', height: '100%', padding: '7px 0px'}}>
            {props.children}
        </div>
    );
}

export default Scroll
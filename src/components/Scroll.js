import React from 'react';

const Scroll = ({children}) => {
    return (
        <div style={{overflowY: 'scroll', border: '5px solid', height: '100vh'}}>{children}</div>
    );
}
export default Scroll;
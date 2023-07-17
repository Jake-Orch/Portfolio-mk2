import React from 'react';

function Icon(props) {
    return (
        <div>
            {props.src}
            <span>{props.title}</span>
        </div>
    )
}

export default Icon;
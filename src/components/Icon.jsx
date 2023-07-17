import React from 'react';

function Icon(props) {
    return (
        <div className='grid grid-rows-2 justify-items-center h-24 w-24 p-2 '>
            {props.src}
            <span>{props.title}</span>
        </div>
    )
}

export default Icon;
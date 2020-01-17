import React from 'react';

function RandomColorButton()
{
    const randomColor = event =>
    {
        event.preventDefault();
    }

    return(
        <div className='random-color'>
            <button onClick={randomColor}>Click Me!</button>
        </div>
    );
}

export default RandomColorButton;
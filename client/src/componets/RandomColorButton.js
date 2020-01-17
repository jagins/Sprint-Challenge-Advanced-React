import React from 'react';
import {useRandomColor} from '../hooks/useRandomColor';

function RandomColorButton()
{
    const [randomColor, setRandomColor] = useRandomColor('bg_color', '')
    const pickRandomColor = event =>
    {
        event.preventDefault();
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256)
        let bgColor = "rgb(" + red + ","+ green + "," + blue + ")";
        setRandomColor(bgColor);
    }

    return(
        <div className='random-color'>
            <button onClick={pickRandomColor}>Click Me!</button>
        </div>
    );
}

export default RandomColorButton;
import React from 'react';
import {useRandomColor} from '../hooks/useRandomColor';
import {randomColorGenerator} from '../utils/randomColor';

function RandomColorButton()
{
    const [randomColor, setRandomColor] = useRandomColor('bg_color', '')
    const pickRandomColor = event =>
    {
        event.preventDefault();
        setRandomColor(randomColorGenerator());
    }

    return(
        <div className='random-color'>
            <button data-testid='random-color-btn' onClick={pickRandomColor}>Click Me!</button>
            <input readOnly value={randomColor} placeholder='color will output here'/>
        </div>
    );
}

export default RandomColorButton;
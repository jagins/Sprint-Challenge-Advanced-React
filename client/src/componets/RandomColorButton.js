import React from 'react';
import {useRandomColor} from '../hooks/useRandomColor';
import {randomColorGenerator} from '../utils/randomColorGenerator';

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
            <h2>Click the button to change background color</h2>
            <button data-testid='random-color-btn' onClick={pickRandomColor}>Click me!</button>
            <input readOnly value={randomColor} placeholder='color will output here'/>
        </div>
    );
}

export default RandomColorButton;
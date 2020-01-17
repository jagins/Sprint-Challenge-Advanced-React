import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useRandomColor = (key, initialValue) =>
{
    const [randomColor, setRandomColor] = useLocalStorage(key, initialValue);

    useEffect(() =>
    {
        if(randomColor !== null)
            document.body.style.background = randomColor;
        else
            document.body.style.background = "#FFFFFF";
    }, [randomColor])

    return [randomColor, setRandomColor];
}
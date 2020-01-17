import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useRandomColor = (key, initialValue) =>
{
    const [randomColor, setRandomColor] = useLocalStorage(key, initialValue);

    useEffect(() =>
    {

    }, [])

    return [randomColor, setRandomColor];
}
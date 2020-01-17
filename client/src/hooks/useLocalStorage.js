import {useState} from 'react';

export const useLocalStorage = (key, initialValue) =>
{
    const [storedvalue, setStoredValue] = useState(() =>
    {
        const item = window.localStorage.getItem(key);

        if(item)
            return JSON.parse(item);
        else
            return initialValue;
    });

    const setValue = value =>
    {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedvalue, setValue];
}
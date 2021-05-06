import React , { useEffect, useState} from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
    
    const KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';
    const [translated, setTranslated] = useState('');
    //we use this in order not to send the api a request for every character we hit
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500); 

        return () => {
            clearTimeout(timerId);
        }
        
    }, [text]);

    useEffect(()=>{
        const doTranslation = async () => { 
            const {data} = await axios.post(
                'https://translation.googleapis.com/language/translate/v2', 
                {}, 
                {
                    params: {
                        q: debouncedText,
                        target: language.value,
                        key: KEY
                    },
                }
            );
            setTranslated(data.data.translations[0].translatedText);
        };

        doTranslation();

    }, [language, debouncedText]);

    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
}

export default Convert;
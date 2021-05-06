import axios from 'axios';
import React, {useEffect, useState} from 'react';

const SearchBar = () => {
    const [term, setTerm] = useState('bicho');
    const [results, setResults] = useState([]);

    useEffect (() => {
        //define the function and then immediately invoke it;
        const search = async () => {
            //saving data from the request to the api
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: term
                   },
            });
            //we update the state with the data we got
            // we just need the array "search"
            setResults(data.query.search);
            console.log(data.query.search);
        };
        if (term && !results.length){
            search();
        } else {
       
            const timeoutId = setTimeout(() => {
                //we only want to run a search if there is a term
                if (term) {
                    search();
                }
            }, 500);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [term]);

    //we build a list of results
    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="left floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>

                    </a>
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet }}></span>
                </div>
            </div>
        );
    });
    
    return(
        <div>
        <form>
            <input value= {term} type='text' placeholder='Type here the key word to find videos about it' onChange = {(e) => setTerm(e.target.value)}></input>
        </form> 
        <div className="ui celled list">
            {renderedResults}
        </div>
        </div>
    );
}

export default SearchBar;

import {useState, useEffect} from 'react';

const Route = ({path, children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    {/*we want to run this only once when the component is rendered */}
    useEffect(() => {
        const onLocationChange = () => {
           setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);
    return window.location.pathname === path? children 
    : null;
};

export default Route;
import React from 'react';

const Link = ({className, href, children}) => {

    const preventFullPageReload = (event) =>{

        if (event.metaKey || event.ctrlKey){
            return;
        }

        event.preventDefault();
        {/* we change the url */}
        window.history.pushState({}, '', href);

        {/* we communicate that the url has changed */}
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
    <a onClick={preventFullPageReload} className={className} href={href}>{children}</a>
    );
}

export default Link;
//useState is a hook
import React , { useState} from 'react';

//we can either pass props.items or {items}
const Accordion = ({items}) => {
    //initialize state
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        //update state with the value of index
        setActiveIndex(index);
        console.log(index);
    }
    //mapping through the items array
    const renderedItems = items.map( (item, index) => {

    //set which item is the active one by comparing index with the activeIndex
    const active = index === activeIndex ? 'active' : '';
      //then we add the class active
    return ( 
        <React.Fragment key={index}>
            <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                <i className='dropdown icon'> </i>
                {item.title}  
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    );
    
    });

    return <div className='ui styled accordion'>{renderedItems}</div>;

}
export default Accordion;
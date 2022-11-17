import React from 'react';
import './Indicator.css';

export const Indicator = ({slices}) => {
    const indicators = [...slices];
    indicators.fill(1);
    //console.log(indicators);
  return (
    
    <div className="indicatorContainer">
        {indicators.map((e)=>(
            <div className='indicatorItem'></div>   

        ))}

        
        

    </div>
  )
}


/*

*/
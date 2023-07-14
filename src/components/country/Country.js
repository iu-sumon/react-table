import React from 'react';
import './Country.css'
const Country = ({country}) => {
    const {name,flags,region} = country;
    return (
        
            <div className='country-card'>
                <h2>{name.common}</h2>
                <img src={flags.png} alt="" />
                <p>{region}</p>
            </div>
        
    );
};

export default Country;
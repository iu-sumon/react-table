import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import './Countries.css'
const Countries = () => {

    const [countries,setCountries] = useState([])

    useEffect(()=>{
       fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json => setCountries(json))
    },[])
    return (
        <div className='countries-container'>
            {
                countries.map((country,index)=> 
                 <Country
                 key={index}
                 country={country}
                 ></Country>
                )
            }
        </div>
    );
};

export default Countries;
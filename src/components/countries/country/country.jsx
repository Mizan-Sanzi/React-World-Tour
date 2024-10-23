import { useState } from 'react';
import './country.css'
const Country = ({country}) => {
    const {name, flags, area, population, cca3}=country;
    const [visited, setVisited]= useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited? 'visited' : 'not-visited'}`}>
            <h3 style={{color: visited ? 'yellow' : 'green'}} >Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Area: {area} </p>
            <p>Population: {population} </p>
            <p><small>Code: {cca3} </small></p>
            <button onClick={handleVisited}>{visited? 'visted' : 'Going'}</button>
            {visited ? 'I have visited this country' : 'I want to visit'}
        </div>
    );
};

export default Country;
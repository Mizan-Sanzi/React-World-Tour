import { useEffect } from "react";
import { useState } from "react";
import Country from "./country/country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries]= useState([])
    const [visitedCountry, setvisitedCountry] = useState([]);
    useEffect(()=>{

    }, [])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountry = country=>{
        console.log('add this to your visited country');
        console.log(country);
    }

    return (
        <div>
            <h3>Countries: {countries.length} </h3>
            <div>
            <h4>Visited Countries</h4>
            <ul>

            </ul>
            </div>
            <div className="country-container">
            {
                countries.map(country => <Country 
                    key={country.cca3} 
                    country={country}>
                        handleVisitedCountry={handleVisitedCountry}
                    </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;
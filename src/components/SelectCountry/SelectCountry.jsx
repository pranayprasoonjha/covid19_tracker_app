import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl } from '@material-ui/core';

import './SelectCountry.css';
import {fetchCountries} from '../../api/Api.js';

const SelectCountry = ({handleCountryChange}) => {

    const[fetchedCountries, setFetchedCountries]= useState([]);
    
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        
        fetchAPI();
    },[setFetchedCountries]); // if the second paramater is present 
            //then useEffect will only activate if the values in the list changes

        

    return(
        <div className="selector">
        <FormControl className="form_control">
            <NativeSelect defaultValue=" " onChange = { (e) => handleCountryChange(e.target.value)} >
               <option value="">Global</option> 
               {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}

            </NativeSelect>
        </FormControl>    
        </div>
    )
}

export default SelectCountry;
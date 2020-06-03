import React , { useState , useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core'; 

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

// to be able to fetch specail country from the API
const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries ());
        }
        fetchAPI();
    }, [setFetchedCountries]);
   // console.log("The fetchedCountries",fetchedCountries)
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>

                {/* loop to Choose from all the countries */}
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option> )}
            </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker;
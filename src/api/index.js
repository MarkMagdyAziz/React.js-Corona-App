import axios from 'axios';


// Functions to fetch data that we need
const url = 'https://covid19.mathdro.id/api';

// fetching the data
export const fetchData = async (country) => {
    let changeableUrl = url;

    if (country) {
        changeableUrl = `${url}/countries/${country}`;
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
        //const data = await axios.get.data(url);
        
        // modfied the data which from API and return only the data that we need
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        return error;
    }
};

// fetching the daily data
export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        //console.log("The Daily Data" , data);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
    
        return modifiedData;
    }
    catch (error) {
        return error;

    }
    
};
// fetching contry
export const fetchCountries = async () => {
    try {
        const { data: { countries }} = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    }
    catch (error){
        console.log(error);
    }
}
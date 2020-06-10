import React from 'react';
// import Cards from './components/Cards';
// import Chart from './components/Chart';
// import CountryPicker from './components/CountryPicker';
import { Cards, Chart, CountryPicker , Clock} from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/covid-19 (3).jpg';

// class based component
// state to save the informtaions {data , country}
class App extends React.Component {
    state = {
        data: {}, 
        country:'',  
    }

    // making a request to fetch the data when componentDidMounts
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }
        //console.log(" The Fetched Data : ",fetchedData)

        // handle countryChange
        // get the country as a parameter and making a request to fetch data API
        handleCountryChange = async (country) => {
           
            const fetchedData = await fetchData(country);
           
            //after fetch the data set the state
            this.setState({ data: fetchedData , country : country });
             
        }
     // cards 
    // country CountryPicker
    //chart
    render() {
        const { data , country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19"/>
                <Clock/>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} />
                <span className={styles.cp}> &copy; Copyright 2020 Mark Wahba.  All rights reserved. </span>
            </div>
        );
    }
}

export default App;
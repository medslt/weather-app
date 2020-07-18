import React, {useState, useEffect} from 'react';
import storeContext from './storeContext';


const {Provider} = storeContext;
const getUrl = (path) => {
    const params = '?q=London,uk&units=metric&appid=2cefe1fd9c145b11b8254ac699e6da04';
    const baseUrl = 'http://api.openweathermap.org/data/2.5/';

    const url = `${baseUrl}${path}${params}`

    return url;
};

const StoreProvider = ({children}) => {
    const [todayWeatherTemp, setTodayWeatherTemp] = useState();
    const [fiveDaysWeather, setFiveDaysWeather] = useState();

    useEffect(() => {
        fetchTodayWeather();
    });

    const fetchTodayWeather = async () => {
        try {
            const url =  getUrl('weather');
            const response = await fetch(url);
           const data = await response.json();
           
           const newTodayWeatherTemp = parseInt(data.main.temp);
           setTodayWeatherTemp(newTodayWeatherTemp);
        } catch (error) {
            console.info({error});
        }
    }

    return (
        <Provider value={{todayWeatherTemp}}>
            {children}
        </Provider>
    )
};


export default StoreProvider;


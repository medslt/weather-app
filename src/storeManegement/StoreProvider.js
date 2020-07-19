import React, {useState, useEffect} from 'react';
import dayjs from 'dayjs';
import storeContext from './storeContext';



const {Provider} = storeContext;
const getUrl = (path) => {
    const params = '?q=London,uk&units=metric&appid=2cefe1fd9c145b11b8254ac699e6da04';
    const baseUrl = 'https://api.openweathermap.org/data/2.5/';

    const url = `${baseUrl}${path}${params}`

    return url;
};

const StoreProvider = ({children}) => {
    const [todayWeatherTemp, setTodayWeatherTemp] = useState();
    const [fiveDaysWeatherInfo, setFiveDaysWeatherInfo] = useState([]);
    const [secondsToReload, setSecondsToReload] = useState(60);

    useEffect(() => {
        Promise.all([fetchTodayWeather(), fetchFiveDaysWeatherInfo()]).then((values) => {
            reloadWeatherData();
          });
    }, []);

    const fetchTodayWeather = async () => {
        try {
            const url =  getUrl('weather');
            const response = await fetch(url);
            const data = await response.json();
           
            const newTodayWeatherTemp = parseInt(data.main.temp);
            setTodayWeatherTemp(newTodayWeatherTemp);
        } catch (error) {
            console.error({error});
        }
    }

    const fetchFiveDaysWeatherInfo = async() => {
        try {
            const url =  getUrl('forecast');
            const response = await fetch(url);
            const data = await response.json();
           
            const daysInfo = [];
            let tempDay = -1;
            
            data.list.forEach((tempInfo) => {
               if (tempDay !== dayjs(tempInfo.dt_txt).day()) {
                   
                 tempDay = dayjs(tempInfo.dt_txt).day();

                 const dayInfo = {
                    day: dayjs(tempInfo.dt_txt).format('ddd'),
                    temp: parseInt(tempInfo.main.temp),
                    desc: tempInfo.weather[0].description,
                    icon: tempInfo.weather[0].icon.replace('n', 'd'), // get icon days instead of night
                 }

                 daysInfo.push(dayInfo);
               }
            })
            
            setFiveDaysWeatherInfo(daysInfo.slice(1,6)); // remove today
        } catch (error) {
            console.error({error});
        }
    }

    const reloadWeatherData = () => {
        let secCounter = 0;
        setInterval(() => {
            secCounter++;
            setSecondsToReload(60 - secCounter);
            if (secCounter === 60) {
                fetchTodayWeather();
                fetchFiveDaysWeatherInfo();
                secCounter = 0;
            }
            
        }, 1000);
    }

    return (
        <Provider value={{todayWeatherTemp, fiveDaysWeatherInfo, secondsToReload}}>
            {children}
        </Provider>
    )
};


export default StoreProvider;


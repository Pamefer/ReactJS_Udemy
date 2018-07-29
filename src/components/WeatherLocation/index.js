import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css'
import transformWeather from '../../services/transformWeather';

const location = "Loja, ec"
const api_key = "14c300da705692c2d414d00e13d90170"
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city : 'Buenos Aires',
            data : null
        };
    }

    handleUpdateClick = () => {
        fetch(api_weather).then( data => {
            return data.json();
        }).then( weather_data => {
            const data = transformWeather(weather_data);
            this.setState({ data })    
        });
    }

    
    componentWillMount() {
        this.handleUpdateClick();
    }

    render = () => {
        const { city, data } = this.state;
        return (
        <div className='weatherLocationCont'>
            <Location city={ city }/>
            {data ? <WeatherData data={ data }/> : 
            <CircularProgress size={60} thickness={7} />
            } 
        </div>
        )
    };
    }

export default WeatherLocation;


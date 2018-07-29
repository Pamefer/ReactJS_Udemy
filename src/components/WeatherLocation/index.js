import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css'
import { 
    SUN
} from '../../constants/weathers';

const location = "Loja, Ec"
const api_key = "14c300da705692c2d414d00e13d90170"
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;
const data1 = {
    temperature: 20,
    weatherState: SUN,
    humidity: '10',
    wind: '10 m/s',
};

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city : 'Buenos Aires',
            data : data1
        };
    }

    handleUpdateClick = () => {
        fetch(api_weather).then( data => {
            return data.json();
        }).then( weather_data => {
            console.log(weather_data)
            debugger;
        });
        /*
        this.setState ({
            data : data2
        });
        */
    }

    render = () => {
        const { city, data } = this.state;
        return (
        <div className='weatherLocationCont'>
            <Location city={ city }/>
            <WeatherData data={ data }/>
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>
        )
    };
}

export default WeatherLocation;


import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
    <div>
        <WeatherLocation city={'Loja, ec'} />
        <WeatherLocation city={'Quito, ec'} />
        <WeatherLocation city={'Cuenca, ec'} />
    </div>
);
export default LocationList;

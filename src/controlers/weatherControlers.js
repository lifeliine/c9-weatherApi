//1)Se realiza una peticion a mi api, voy de routes hasta aca, controlers
//2)Paso a la capa de service(findCities)
//3)Paso a la capa de repositories(class CityRepositories)
//4)Se obtiene la data de 3ros
//5)Vuelvo a la capa service transformo la data en lo que necesito
//6)Vuelvo a la capa controlers con la data lista para volver a routes 

const express = require('express');
const {findWeather,weatherById} = require('../services/weatherService');
const Success = require('../handlers/successHandler');
const logger = require('../loaders/logger');


const weatherByCoordinates = async function (req, res) {
    const { lon, lat } = req.query;
    const weather = await findWeather(lon, lat);
    const success = new Success(weather);

    res.json(success);

}

const weatherByCityId = async (req,res) => {
    try {
        const id = req.params.id;
        const city = req.params.city;
        const weather = await weatherById(city, id);
        const success = new Success(weather);
        res.json(success);
    } catch (err) {
        next(err);
    }
}
module.exports = {
      weatherByCoordinates,
      weatherByCityId 
    
}

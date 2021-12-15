const express = require('express');
const axios = require('axios');
const cityRepository = require('../repositories/cityRepository');

const repository = new cityRepository();

const cities = async function (req, res) {
    res.json(await repository.findCity(req.params.city));

}
  

module.exports = {
      cities
}

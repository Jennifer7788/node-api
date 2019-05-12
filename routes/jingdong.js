var express = require('express');
var router = express.Router();
var city = require('../assets/areas/city');
var country = require('../assets/areas/country');
var province = require('../assets/areas/province');

/* GET home page. */
router.get('/areaList', function(req, res, next) {
    const { provinceId, cityId } = req.query;
    if (!provinceId && !cityId) {
        res.send(province);
    } else if (provinceId && !cityId) {
        res.send(city[provinceId]);
    } else if (cityId) {
        res.send(country[cityId]);
    }
});

module.exports = router;

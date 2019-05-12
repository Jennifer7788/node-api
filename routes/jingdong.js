var express = require('express');
var router = express.Router();
var city = require('../assets/areas/city');
var country = require('../assets/areas/country');
var province = require('../assets/areas/province');

/* GET home page. */
router.get('/areaList', function(req, res, next) {
    const { provinceId, cityId, type } = req.query;
    let result = null;

    if (!['province', 'city', 'country'].includes(type)) {
        res.send({
            code: 400,
            data: result,
            message: 'type参数异常: '+type
        });
        return;
    }

    if (type === 'province') {
        result = province;
    } else if (type === 'city' && provinceId) {
        result = city[provinceId];
    } else if (type === 'country' && cityId) {
        result = country[cityId];
    }

    res.send({
        code: 200,
        data: result,
        message: '请求成功'
    });
});

module.exports = router;

const services = require('../services');

function getCourses(req, res){
    services.courses.getAll.then(courses => {
        res.json({sucess: true, courses: courses});
    }).catch(err => {
        res.status = 500;
        res.json({sucess: false, error: err});
    });
}

function course() {
    return {
        getAll: getCourses
    }
}

module.exports = course();
const services = require('../services');

async function getCourses(req, res) {
    try {
        const courses = await services.courses.getAll();
        res.json({ success: true, data: courses });
    }
    catch (err) {
        console.error(`error fetching courses: ${err}`);
        res.status = 500;
        res.json({ sucess: false, error: err });
    }
}

function course() {
    return {
        getAll: getCourses
    }
}

module.exports = course();